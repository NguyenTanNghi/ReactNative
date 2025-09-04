import { multiplyAfterDelay } from "./bai14";

export async function runParallel() {
    const [r1, r2, r3] = await Promise.all([
        multiplyAfterDelay(2),
        multiplyAfterDelay(3),
        multiplyAfterDelay(4),
    ]);

    console.log("Results in parallel:", r1, r2, r3);
}
