import { cookies } from 'next/headers'

interface SignalCookie {
    name: string,
    value: string,
}

/**
 * Only for use on the client side.
 * @returns {Array<{name: string, value: string}>} An array of objects with the name and value of each signal.
 */
export default function(): SignalCookie[] {
    const final: SignalCookie[] = []
    cookies().getAll().map(cookie=>{
        if (cookie.name.startsWith("signal-")) final.push({
            name: cookie.name.slice(7),
            value: cookie.value
        })
    })

    return final;
}