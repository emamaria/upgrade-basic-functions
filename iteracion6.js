

 const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'pepinillos',
    'onion rings',
    'pasta',
    'pasta',
    'soda',
    'soda',
    'soda',
    'pepinillos',
    'helado'
   
  ];



 function removeDuplicates(list) {

    for(let i = 0; i < list.length; i++){

        for(let j = i + 1;  j < list.length; j++){
  
             if(list[i] == list[j]){
                 list.splice(i, 1);
                 i--
                  
              
             }

        }

    }
   
    return list;
  }

  console.log(removeDuplicates(duplicates));
  