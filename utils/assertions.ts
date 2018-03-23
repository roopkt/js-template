
export function isEmptyString(obj: string) {
    return obj == null || obj.trim() === '';
}

export function assertNotEmpty(obj: string, msg: string) {
    if (isEmptyString(obj)) {
        throw new Error(msg);
    }
}
