export async function fetchUserWithTimeout(
    id: number
): Promise<{ id: number; name: string }> {
    const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 3000);
    });

    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout: API call took more than 2 seconds"));
        }, 2000);
    });

    return Promise.race([apiCall, timeout]);
}
