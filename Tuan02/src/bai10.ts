export function getResult(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Success");
            } else {
                reject("Something went wrong");
            }
        }, 1000);
    });
}