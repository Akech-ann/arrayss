let arr1 = [3,7,34,90,12];
let lastelement= arr1[arr1.length-1]
console.log(lastelement);

let arr2 = ["true","green","where",12,56];
let last = arr2[arr2.length-1];
console.log(last);

let mypets = ["Cow","Bird","Snake","Dog"]
console.log(mypets.join())

let arr3 = [-5,9,5,2,-3,6,8,4,1];
let sorted = arr3.sort((a,b)=>a-b);
console.log(sorted);

let arr = ["apple","mango","apple","orange","mango","mango"]
let double = [];
arr.forEach((y)=>{
    if(!double.includes(y)){
        double.push(y)
    }
});
console.log(double);
console.log();

let arr5 = ["the","way","x",4];
let finnd = "we";
if (arr5.includes(finnd)){
    console.log(finnd);
}else{
    console.log("the search was not found");
}






