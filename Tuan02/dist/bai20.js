"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserWithTimeout = fetchUserWithTimeout;
async function fetchUserWithTimeout(id) {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 3000); // giả lập API call lâu 3 giây
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout: API call took more than 2 seconds"));
        }, 2000);
    });
    return Promise.race([apiCall, timeout]);
}
