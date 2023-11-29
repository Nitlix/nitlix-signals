import { NextRequest } from "next/server";
import getAllClientSignals from "./getAllClientSignals";

export default function (): NextRequest {
    const request = new NextRequest("/")

    getAllClientSignals().forEach(({ name, value }) => {
        request.headers.set(name, value)
    })

    return request;
}