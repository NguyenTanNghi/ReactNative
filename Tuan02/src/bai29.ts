function simulateTask(id: number, delay: number) {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} finished`);
        }, delay);
    });
}

export async function queueProcess() {
    const tasks = [
        () => simulateTask(1, 1000),
        () => simulateTask(2, 1500),
        () => simulateTask(3, 2000),
    ];

    for (const task of tasks) {
        const result = await task();
        console.log("Bai29 Queue Result:", result);
    }
}
