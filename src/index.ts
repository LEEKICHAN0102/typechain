type Last={
  <T>(arr:T[]):T
}

const last:Last=(arr)=>{
  return arr[arr.length-1];
}

last([1,2,3,4,5]);

type Prepend={
  <T,F extends T>(arr:T[],item:F):T[]
}

const prepend:Prepend=<T,F extends T>(arr:T[],item:F)=>{
  return [item ,...arr ];
}

const arr=([1,2,3,4]);
const arrPrepend=prepend(arr,5);

type Mix={
  <T,F>(arr1:T[],arr2:F[]):(T | F)[]
}

const mix:Mix=<T,F>(arr1:T[],arr2:F[])=>{
  return [...arr1 , ... arr2];   
}

mix([1,2,3],["a","b","c"]);

type Count={
  <T>(arr:T[]):number
}

const count:Count= (arr) => {
  return arr.length
}

count([1,2,3,4,5]);

type FindIndex={
  <T,F extends T>(arr:T[],item:F):number|null
}

// const findIndex: FindIndex = <T, F extends T>(arr: T[], item: F) => {
// if (arr.includes(item)) {
//   return arr.indexOf(item);
// } else {
//   return null;
// }
// };

type Slice={
  <T>(arr:T[],startIndex:number,endIndex?:number):T[]
}

function slice<T>(arr:T[],startIndex:number,endIndex?:number){
  if(!endIndex){
      return arr.slice(startIndex);
  }else{
      return arr.slice(startIndex,endIndex);
  }
}

//When writing an arrow function, an error such as "react is not found" occurs. Why is that? 😂 
//It's just a playground error, right?


slice([1,2,3,4,5,6,7,8,9,10],3);
slice([1,2,3,4,5,6,7,8,9,10],4,7);