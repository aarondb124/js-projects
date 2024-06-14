//spread oparator and desructuring
arr = [1, 2, 4, 46]

function avg(a, b, c, d){
    return (a+b+c+d)/3
}

// let a = avg(...arr)
// let a = [4, 5, ...arr, 67]

// let arr1 = [7,2,9]
// let a = [...arr, ...arr1]
// console.log(a)

let obj1 = {
    name1: "Aaron Debakor",
    class1: "5b",
    favLang: "JavaScript"
}

let {name1, class1, favLang} = obj1;
console.log(name1, class1, favLang)