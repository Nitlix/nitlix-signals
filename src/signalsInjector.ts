import { NextRequest, NextResponse } from "next/server"

/**
 * Only run on the server-side as middleware.
*/
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

    function assign(name: string, value: any){
        response.headers.set(name, value)
        request.headers.set(name, value)
    }
        
    request.headers.forEach((value, key)=>{
        const name: string = `signal-${key}`
        assign(name, value);
    })

    assign("signal-url", request.url)


    return {
        request,
        response
    }
}