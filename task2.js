const prompt = require("prompt-sync")();

let isOk = new Boolean(true)

let min = prompt("Введите нижнюю границу диапазона: ")
let max = prompt("Введите верхнюю границу диапазона ")
let inp = prompt(`Вам нужно отгадать число в диапазоне от ${min} до ${max}. Введите число: `)
let a = Math.floor(Math.random() * (+max - +min + 1)) + +min


do {
    if (+inp != a) {
        if (+inp < a) {
            inp = prompt("Больше ")
        } else {
            inp = prompt("Меньше ")
        }
    } else {
        console.log(`Вы угадали, это число ${a}`)
        isOk = false
    }
} while (isOk)


// const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

// //const a = Math.floor(Math.random() * 11)
// const a = 5
// let isOk = new Boolean(false)

// rl.setPrompt(`Введите число от 1 до 10 \n`);
// rl.prompt();

// while (!isOk) {
//     console.log('dsfsdf')
//     rl.on('line', (inp) => {
//         if (+inp != a) {
//             if (+inp < a) {
//                 rl.setPrompt('Больше');
//                 rl.prompt();
//             } else {
//                 rl.setPrompt('Меньше');
//                 rl.prompt();
//             }
//         } else {
//             console.log(`Вы угадали, это число ${a}`)
//             isOk = true
//         }
//     })
// }




// rl.on('line', (inp) => {
//     // console.log(`Вы ввели: ${age}`);
//     if (+inp >= 1 && inp <= 10) {

//     } 
//     else {
//         // to do
//     }
    
    
//     rl.close();
// });

// rl.question('Введите нижнюю границу диапазона: ', (answer) => {
//     min = answer
//     // rl.close();
// });

// rl.question('Введите нижнюю границу диапазона: ', (answer) => {
//     max = answer
//     rl.close();
// })

// console.log(min, max)

// console.log(`${Math.floor(Math.random() * 11)}`)

// rl.on('history', (history) => {
//     console.log(`Received: ${history}`);
// });