import { NextRequest, NextResponse } from "next/server"

export default function(
    request: NextRequest,
    response: NextResponse = new NextResponse
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