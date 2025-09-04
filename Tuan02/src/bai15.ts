import { multiplyAfterDelay } from "./bai14";

export async function runSequential() {
    const result1 = await multiplyAfterDelay(2);
    console.log("Result 1:", result1);

    const result2 = await multiplyAfterDelay(3);
    console.log("Result 2:", result2);

    const result3 = await multiplyAfterDelay(4);
    console.log("Result 3:", result3);
}
