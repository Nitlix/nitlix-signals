import { cookies, headers } from "next/headers";
import { SignalFull, SignalServerFetchMethod } from "./types";

export default async function (
    fetchMethod: SignalServerFetchMethod = "headers"
): Promise<SignalFull[]> {
    const final: SignalFull[] = [];

    switch (fetchMethod) {
        case "cookies": {
            const cookieData = await cookies();
            for (const [key, value] of cookieData) {
                if (key.startsWith("signal-")) {
                    final.push({
                        name: key.slice(7),
                        value: value.value,
                    });
                }
            }
            break;
        }
        case "headers": {
            const headerData = await headers();
            for (const [key, value] of headerData) {
                final.push({
                    name: key.slice(7),
                    value,
                });
            }
            break;
        }
        default: {
            throw new Error(`Unknown fetch method: ${fetchMethod}`);
        }
    }

    return final;
}
