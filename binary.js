function merge(left, right) {
    let sortedArr = []
        while (left.length && right.length){
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right);  
     console.log( merge(left, right));
  }
  let arr = [45,12,6,89,2,5];
  console.log(mergeSort(arr));


  function binary(arr, target){
    let leftIndex= 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex <= rightIndex){

        let middle = Math.floor((leftIndex+rightIndex)/2);
        if (arr[middle] === target){
            return middle;
        }
        else if(arr[middle]>target){
            rightIndex = middle-1
        }
        else{
            leftIndex=middle+1
        }
    }
    return null;
}
let num = arr;
let target = 6;
console.log(binary(num,target));



function merge(left, right) {
    let sortedArr1 = []
        while (left.length && right.length){
      if (left[0] > right[0]) {
        sortedArr1.push(left.shift())
      } else {
        sortedArr1.push(right.shift())
      }
    }
    return [...sortedArr1, ...left, ...right]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right);  
     console.log( merge(left, right));
  }
  let arrs = [[123,89,5,23,9,56]];
  console.log(mergeSort(arrs));



function merge(left, right) {
    let sortedArr2 = []
        while (left.length && right.length){
      if (left[0] < right[0]) {
        sortedArr2.push(left.shift())
      } else {
        sortedArr2.push(right.shift())
      }
    }
    return [...sortedArr2, ...left, ...right]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right);  
     console.log( merge(left, right));
  }
  let arr2 = [1,4,78,2,67,3];
  console.log(mergeSort(arr2));



  function binary(arr, target){
    let leftIndex= 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex <= rightIndex){

        let middle = Math.floor((leftIndex+rightIndex)/2);
        if (arr[middle] === target){
            return middle;
        }
        else if(arr[middle]>target){
            rightIndex = middle-1
        }
        else{
            leftIndex=middle+1
        }
    }
    return null;
}
let targett = 34;
console.log(binary(arr2,target));


