type FetchMethod = "cookies" | "headers";

import { cookies, headers } from "next/headers";

export default function (
    signalName: string,
    method: FetchMethod = "headers"
): string | undefined {
    switch (method) {
        case "cookies": {
            const cookieData = cookies();
            return cookieData.get(`signal-${signalName}`)?.value || undefined;
        }
        case "headers": {
            const headerData = headers();
            return headerData.get(`signal-${signalName}`) || undefined;
        }
        default: {
            throw new Error(`Unknown fetch method: ${method}`);
        }
    }
}
