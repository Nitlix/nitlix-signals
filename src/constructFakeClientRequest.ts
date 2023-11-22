import { NextRequest } from "next/server";
import getAllSignals from "./getAllSignals";
import getSignal from "./getSignal";
import { SignalCookie } from "./types";

export default function(): NextRequest {
    const url = getSignal("url") as (SignalCookie | undefined);
    if (!url) throw new Error("No URL signal found. Seems like you're not using signalsInjector() in your middleware.")

    const request = new NextRequest(url.value)

    getAllSignals().forEach(({name, value})=>{
        request.headers.set(name, value)
    })

    return request;
}