import { NextRequest, NextResponse } from "next/server";

export default function (
    request: NextRequest,
    response: NextResponse = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
): {
    request: NextRequest;
    response: NextResponse;
} {
    function assign(name: string, value: any) {
        response.cookies.set(name, value);
        request.cookies.set(name, value);
    }

    request.headers.forEach((value, key) => {
        const name: string = `signal-${key}`;
        assign(name, value);
    });

    assign("signal-url", request.url);
    assign(
        "signal-ip",
        request.headers.get("x-real-ip") ||
            request.headers.get("x-forwarded-for") ||
            "127.0.0.1"
    );

    return {
        request,
        response,
    };
}
