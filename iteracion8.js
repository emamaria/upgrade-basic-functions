
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code' 
];



function repeatCounter(lists) {

   let counts = {}

   let result;
   
   for(let list of lists ){
   
    result =  lists.filter( item => {
   
        return list == item
   
       })
   
   
   
       counts[list] = result.length
   }
   
   
   return counts;
   
    }




console.log(repeatCounter(counterWords));


