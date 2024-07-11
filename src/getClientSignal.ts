export default function (name: string): string | undefined {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`signal-${name}=`));
    if (!cookie) return undefined;
    return cookie.split("=")[1];
}
