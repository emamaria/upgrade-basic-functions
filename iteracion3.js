const numbers = [1, 2, 3, 5, 45, 37, 58];


function sumNumbers(list){
 let sum = 0;

 for(let i = 0; i < list.length; i++ ){

    sum += list[i]
 }

 return sum;


}

console.log(sumNumbers(numbers));



