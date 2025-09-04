import { sayHelloAsync } from "./bai01";

export async function runSayHello() {
    try {
        const message = await sayHelloAsync;
        console.log(message);
    } catch (error) {
        console.error("Error:", error);
    }
}
