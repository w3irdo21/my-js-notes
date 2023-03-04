// for Loop
// var arr=[1,3,5,7,'gft',5,'sh'];
// console.log(arr)
// for (var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
/*
//for each loop
arr=[4,6,9,1,'jdf','uwe']
arr.forEach(function(a){
    console.log(a)
})
// hint is showing foreach but real syntax is forEach
*/
/*
// while loop
arr=[4,6,9,1,'jdf','uwe']
let j=0;
while(j<arr.length){
    console.log(j);
    j++;
}
*/
/*
//do while loop
arr=[4,6,9,1,'jdf','uwe']
let k=0;
do{
    console.log(k)
    k++
}while(k<arr.length)
*/

//Array methods 
// POP removes last element from array and shift removes first element from array
arr=[3,5,2,'dtr',54,'4']
console.log(arr.length)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
// console.log(arr.shift())
// toString converts array to string
console.log(arr.toString())
// sort() sorts an array (sorts alphabatically means 99 will come after 101 as frist no. 1 is greater than 9 in 101 and 99)
ary=[4,8,0,1,'4','54','0','fc',7]
console.log(ary.sort());
// console.log(ary.sort); --> here this is wrong


//String methods
str1='hello there, we are revising javaScript, here'
console.log(str1.length)
// console.log(str1.length()) --> this is wrong
console.log(str1.indexOf('here'))
console.log(str1.lastIndexOf('here'))
console.log(str1.slice(4,35))
console.log(str1.replace('revising','learning'))
console.log(str1)