export async function runAllSettled() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/invalid-url", // lỗi 404
        "https://jsonplaceholder.typicode.com/todos/3"
    ];

    const fetchWithCheck = async (url: string) => {
        const res = await fetch(url); 
        if (!res.ok) {
            throw new Error(`Failed to fetch ${url} (status: ${res.status})`);
        }
        return res.json();
    };

    const results = await Promise.allSettled(urls.map(url => fetchWithCheck(url)));

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Bai30 Success ${index + 1}:`, result.value);
        } else {
            console.error(`Bai30 Failure ${index + 1}:`, result.reason.message);
        }
    });
}
