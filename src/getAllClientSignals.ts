import { SignalCookie } from "./types"

/**
 * Only for use on the client side.
 * @returns {Array<{name: string, value: string}>} An array of objects with the name and value of each signal.
 */
export default function(): SignalCookie[] {
    const cookies = document.cookie.split("; ").map(row=>row.split("=")).map(([name, value])=>({name, value}))
    const final: SignalCookie[] = []

    cookies.forEach(cookie=>{
        if (cookie.name.startsWith("signal-")) final.push({
            name: cookie.name.slice(7),
            value: cookie.value
        })
    })

    return final;
}