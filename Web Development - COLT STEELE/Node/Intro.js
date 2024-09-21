// for (let i = 0; i < 5; i++){
//     console.log("hello from first scipt");
// }

const args = process.argv.slice(2);

for (let arg of args) {
    console.log(`Hi there, ${arg}`);
}