

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function searchNames(list, value){


    if(list.indexOf(value) >= 0){

        let index = list.indexOf(value)
        return true +  " the index is " + index
    }else{
         return false;
    }
}


console.log(searchNames(nameFinder, 'Natasha'));

