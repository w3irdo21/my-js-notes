arr=[2,3,54,6,5,7,899]
let i=0;
while(i<arr.lenght){
    console.log(arr[i])
    i++;
}
let mdate = new Date
console.log(mdate)
console.log(mdate.getTime())
console.log(mdate.getFullYear())
console.log(mdate.getDay())

function clicked(){
    console.log("Button Was Clicked")
}
window.onload=function(){
    console.log("Window Reloaded")
}
con.addEventListener("clicked",function(){
    console.log("Clicked here")
})
con.addEventListener('mouseover',function(){
    console.log("Moouse get there")
})