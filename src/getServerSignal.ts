type FetchMethod = "cookies" | "headers";

import { cookies, headers } from "next/headers";

export default async function (
    signalName: string,
    method: FetchMethod = "headers"
): Promise<string | undefined> {
    switch (method) {
        case "cookies": {
            const cookieData = await cookies();
            return cookieData.get(`signal-${signalName}`)?.value || undefined;
        }
        case "headers": {
            const headerData = await headers();
            return headerData.get(`signal-${signalName}`) || undefined;
        }
        default: {
            throw new Error(`Unknown fetch method: ${method}`);
        }
    }
}
