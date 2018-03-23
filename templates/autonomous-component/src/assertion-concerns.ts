export function assertNotNullorUndefined(obj: any, msg: string): void {
    if (obj == null) { throw new Error(msg); }
}
