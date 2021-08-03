var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i ==5) {
//         break;
//     }
//     i++;
// }

// same work for for loop 
// for (let i = 0; i < 20; i++) {
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
    
// }


var numbers = [1, 3, 5, 4, 6, 7, 12, 14, 16, 17, 19, 22, 30]

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 20) {
//         break;
//     }
// }
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 20) {
        continue; // skip something 
    }
    console.log(number);
}