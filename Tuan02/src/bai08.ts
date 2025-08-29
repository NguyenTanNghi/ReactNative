export async function processNumber() {
  const result = await Promise.resolve(2)
    .then((num) => {
      return num * num; // square
    })
    .then((num) => {
      return num * 2;   // double
    })
    .then((num) => {
      return num + 5;   // add 5
    });

  console.log("Final result:", result); 
}