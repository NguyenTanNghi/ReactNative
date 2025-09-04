"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithRetry = fetchWithRetry;
async function fetchWithRetry(url, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error("Network response not ok");
            const data = await res.json();
            console.log(`Bai27: Success on attempt ${i + 1}`, data);
            return data;
        }
        catch (err) {
            console.error(`Bai27: Attempt ${i + 1} failed`);
            if (i === retries - 1)
                throw err;
        }
    }
}
