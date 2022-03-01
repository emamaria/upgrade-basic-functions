const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(list) {

   let longestString = "";

   for(let i = 0; i < list.length; i++){

     if(list[i].length > longestString.length){
        longestString = list[i]
     }


   }

   return longestString;

}
console.log(findLongestWord(avengers));



