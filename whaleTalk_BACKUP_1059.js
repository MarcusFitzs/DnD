<<<<<<< HEAD
let input = "Hello mr. whale";

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i=0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i])
    }
    for (let j=0; j < vowels.length; j++) {
        // console.log("j is " + j);
        if (input[i] === vowels[j]) {
            console.log(vowels[j]);
            resultArray.push(vowels[j]);
        }
    }
    // console.log(`${i} ` + input[i]);
}

resultString = resultArray.join().toUpperCase();

=======
let input = "Hello mr. whale";

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i=0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i])
    }
    for (let j=0; j < vowels.length; j++) {
        // console.log("j is " + j);
        if (input[i] === vowels[j]) {
            console.log(vowels[j]);
            resultArray.push(vowels[j]);
        }
    }
    // console.log(`${i} ` + input[i]);
}

resultString = resultArray.join().toUpperCase();

>>>>>>> 05d3423b0016ab29af302f16ae0097a537d039ea
console.log(resultString);