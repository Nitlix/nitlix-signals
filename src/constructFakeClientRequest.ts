import { NextRequest } from "next/server";
import { SignalCookie } from "./types";
import getClientSignal from "./getClientSignal";
import getAllClientSignals from "./getAllClientSignals";

export default function(): NextRequest {
    const url = getClientSignal("url") as (SignalCookie | undefined);
    if (!url) throw new Error("No URL signal found. Seems like you're not using signalsInjector() in your middleware.")

    const request = new NextRequest(url.value)

    getAllClientSignals().forEach(({name, value})=>{
        request.headers.set(name, value)
    })

    return request;
}