document.getElementById('bucket').style.border= '2px solid red'
document.getElementById("drum").style.border='3px solid yellow'
arr=[3,6,9,2]
console.log(arr)
console.log(typeof(arr))

console.log(arr.unshift(55))
console.log(arr)
console.log(arr.shift())
console.log(arr)
delete arr[1]
console.log(arr)
console.log(arr.length)
arr[1]='filled'
console.log(arr)
let arr2=[3,4,5,6]
console.log(arr2)
let arr3=[7,8,9]
console.log(arr3)
let ct=arr.concat(arr2,arr3)
console.log(ct)
const a=[4,5,67,74,86,48,99]
a.splice(2,4,5,63,7)
// in splice the first two a.splice(this,this,---than-added-ones----) first 'this' will be used to place new elements in serial(---than-added-ones----) and second 'this' is for deleting elements from first 'this' to ttal no. written in method
//means a.splice(1[means start adding elements from a[2]],4 [means delete 4 elements in series from a[2] to next 4, where a[2 will be deleted too], 5,63,7[ here these 3 will be added in the array from first'this' position])
console.log(a)
console.log(a.reverse())
console.log(document.getElementById('drum').innerText)