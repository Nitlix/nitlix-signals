import { SignalCookie } from "./types";

/**
 * Only for use on the client side.
 * @param {string} signalName The name of the signal to get.
 * @returns {SignalCookie | undefined} The signal cookie, or undefined if it doesn't exist.
 * @example getSignal("foo") // {name: "foo", value: "bar"}
*/
export default function(name: string): SignalCookie | undefined {
    const cookie = document.cookie.split("; ").find(row => row.startsWith(`signal-${name}=`))
    if (!cookie) return undefined;
    const value = cookie.split("=")[1]
    return {
        name,
        value
    }
}