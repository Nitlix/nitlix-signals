import { NextRequest, NextResponse } from "next/server"

export default function(
    request: NextRequest,
    response: NextResponse = NextResponse.next({
        request: {
            headers: request.headers
        }
    })
): {
    request: NextRequest,
    response: NextResponse
} {
    request.headers.forEach((value, key)=>{
        const name: string = `signal-${key}`
        request.cookies.set(name, value)
        response.cookies.set(name, value)
    })

    return {
        request,
        response
    }
}