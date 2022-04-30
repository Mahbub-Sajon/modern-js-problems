/* const names = ['babul', 'kabul', 'sabul', 'mabul', 'babul', 'sabul', 'habul'];
function removeDuplicate (names){
    const unique = [];
    // for(i=0; i<names.length; i++){
    //     let element = names[i];
    //     console.log(element);
    // }
    for( const element of names){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }

    }
    return unique;
 
}
const oneTimeNames = removeDuplicate(names);
console.log(oneTimeNames); */

const numbers = [12, 20, 13, 16, 7, 89, 12, 16, 55, 20, 24, 13, 7];
function duplicateNumber(sajon){
    unique=[];
    for(const element of numbers){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const oneTimeNumber = duplicateNumber(numbers);
console.log(oneTimeNumber);