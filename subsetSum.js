function combos(num){
  if(num < 0 || num > 29){
    console.log("Please provide a number between 0 and 29")
    return;
  }
  else{
    let array = new Array(num)
    let comboArray = []
    recursiveSum(array,0,num,num,comboArray);
    console.log("Array that has all combinations",comboArray)
  } 
}

function recursiveSum(arr=[],index,num,sum,comboArray){
  let subArray = [] ;
  if(sum < 0)
    return ;
    
  if(sum === 0){
    for(var i = 0; i< index;i++)
      subArray.push(arr[i])
    comboArray.push(subArray)  
  return comboArray;
  }

  let prevItem = (index === 0)? 1 : arr[index-1];
  
  for(var j = prevItem; j<= num; j++){
    arr[index] = j;
    recursiveSum(arr,index+1,num,sum-j,comboArray)
    }
}

combos(3)
