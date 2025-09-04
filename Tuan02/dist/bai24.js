"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = postData;
async function postData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1,
            }),
        });
        const data = await res.json();
        console.log("Bai24 POST Response:", data);
    }
    catch (error) {
        console.error("Error posting data:", error);
    }
}
