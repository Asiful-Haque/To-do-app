//1
function calculateSum(a,b){
    return a+b;
}
//2
function isEven(val){
    if(val % 2 == 0)return true;
    else return false;
}
//3
function findMax(arr){
    let maximum = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maximum)maximum=arr[i];
    }
    console.log(maximum);
}
//4
function reverseString(str){
    let reversed = "";
    for (let i=str.length-1;i>=0;i--) {
        reversed+=str[i];
    }
    return reversed;
}
//5
function filterOddNumbers(arr){
    let newarray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            newarray.push(arr[i]);
        }
    }
    return newarray;
}
//6
function sumArray(arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
//7
function sortArray(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  return sortedArray;
}
//8
function capitalizeFirstLetter(str){
    let str1 = "";
    if(str.length==0){
        return '';
    }
    for(let i=0;i<str.length;i++){
        if(i==0){
            str1 += str[i].toUpperCase();
        }
        else{
            str1 += str[i];
        }
    }
    return str1;
}


//1
console.log(calculateSum(5,4));
//2
console.log(isEven(8));
//3
const arr = [2,4,8,5,1,10,3];
findMax(arr);
//4
console.log(reverseString("JavaScript"));
//5
const arr2 = [2,4,8,5,1,10,3];
returnedArray = filterOddNumbers(arr2);
console.log(returnedArray);
//6
const numbers = [1,2,3,4,5];
console.log(sumArray(numbers));
//7
const values = [5,3,9,1,5,6];
console.log(sortArray(values));
//8
console.log(capitalizeFirstLetter("hello"));

