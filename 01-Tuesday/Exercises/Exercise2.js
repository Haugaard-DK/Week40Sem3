let arrayy = [1, 2, 3, 4]
let newArray = myFilter(arrayy, isEven);
let newArray2 = myFilter(names, isA);
console.log(newArray);
console.log(newArray2);

function myFilter(array, callback){
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        if(newItem){
            arrayCopy.push(newItem);
        }
    })
    return arrayCopy;
}

function isEven(n1){
    if(n1 % 2 == 0){
        return n1;
    }
}

function isA(str){
    if(str.includes("a") || str.includes("A")){
        return str;
    }
}



//b
var numbers = [1, 3, 5, 10, 11];

function changeSign(number) {
  return number * -1;
}

function myMap(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
      const newItem = callback(element)
      arrayCopy.push(newItem)
    });
    return arrayCopy;
}

let listItems2 = myMap(changeSign, numbers).join("");
console.log(listItems2)