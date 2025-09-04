import { multiplyAfterDelay } from "./bai14";

export async function runForAwait() {
    const promises = [2, 3, 4].map((n) => multiplyAfterDelay(n));

    for await (const result of promises) {
        console.log("Result from for-await-of:", result);
    }
}
