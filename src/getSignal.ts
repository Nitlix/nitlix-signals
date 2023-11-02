import { SignalCookie } from "./types";
import { cookies } from "next/headers"

/**
 * Only for use on the client side.
 * @param {string} signalName The name of the signal to get.
 * @returns {SignalCookie | undefined} The signal cookie, or undefined if it doesn't exist.
 * @example getSignal("foo") // {name: "foo", value: "bar"}
*/
export default function(signalName: string): SignalCookie | undefined {
    const cookie = cookies().get(`signal-${signalName}`)
    return cookie;
}