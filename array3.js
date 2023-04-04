let arr=["ann","akech","atong","montana","wel","ayen"];
string(arr)
function string(arr){
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}

let arr1 = [12,34,54,76,86,87];
num1(arr1)

function num1(arr1){
    arr1.forEach(function(num){
        console.log(num*2);
        
    });
}
let arr2= [2,4,5,6,97,56]
manipulateArray(arr2)
function manipulateArray(arr2) {
    for(let i = 0; i < arr2.length; i++) {
      if(i < 4) {
        arr2[i] *= 8;
      } else if(i === arr2.length - 2) {
        arr2[i] += 5;
      }
       else if(i === arr2.length - 1) {
        arr2[i] += 5;
      }
    }
    console.log(arr2);
  }

  let arr3 = [1,2,3,4,5,6,7,8,9];
  iterate(arr3)
  function iterate(arr3) {
    let i = 0;
    while(i < arr3.length) {
      if(i === 4) {
        break;
      }
      console.log(arr3[i]);
      i++;
    }
  }


let fruits= ["apple","plum","banana","strawberries","kiwi"]
strings3(fruits)
  function strings3(fruits) {
    for(let i = 0; i < fruits.length; i++) {
      if(i === 2) {
        continue;
      }
      console.log(fruits[i]);
    }
  }
  
  
  
    
    
    
     
   







