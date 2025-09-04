export async function downloadFile() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log("Bai25: File downloaded successfully");
            resolve();
        }, 3000);
    });
}
