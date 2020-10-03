let names = ["Alice", "Bob", "Charlie", "Denise"];
//a
let filteredNames = names.filter(name => name.includes("A") || name.includes("a"));
console.log(filteredNames);
//b
let mappedNames = names.map(name => reverseStr(name));

function reverseStr(str){
    let reversed = "";
    for(let char of str){
      reversed = char + reversed;
    }
    return reversed;
}
console.log(mappedNames);