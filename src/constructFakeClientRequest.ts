import { NextRequest } from "next/server";
import getAllClientSignals from "./getAllClientSignals";
import getClientSignal from "./getClientSignal";

export default function (): NextRequest {
    const request = new NextRequest(window.location.href, {
        headers: {
            "x-real-ip": getClientSignal("ip") || "127.0.0.1",
        },
    });

    getAllClientSignals().forEach(({ name, value }) => {
        request.headers.set(name, value);
    });

    return request;
}
