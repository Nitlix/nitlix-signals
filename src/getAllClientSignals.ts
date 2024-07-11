import { SignalFull } from "./types";

export default function (): SignalFull[] {
    const cookies = document.cookie
        .split("; ")
        .map((row) => row.split("="))
        .map(([name, value]) => ({ name, value }));
    const final: SignalFull[] = [];

    cookies.forEach((cookie) => {
        if (cookie.name.startsWith("signal-"))
            final.push({
                name: cookie.name.slice(7),
                value: cookie.value,
            });
    });

    return final;
}
