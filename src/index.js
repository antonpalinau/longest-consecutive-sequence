module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if(array.length === 0 ){
    return 0;
  } else if(array.length === 1){
    return 1;
  }
  
  let result = 0;
  let count = 1;

  array.sort(function(x,y){
     return x-y;
    }
  ); 
  
  for(let i = 1;i < array.length; i++){
    if(array[i]-array[i-1] === 1){
      count++;
    }
    if(array[i]-array[i-1] === 0){
      continue;
    }
    if(array[i]-array[i-1] > 1){
      result = count > result ? count : result ;
      count = 1;
    }
  }
  return result;
}
