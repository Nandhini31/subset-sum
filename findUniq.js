function findUniq(array){

for (var i = 0; i < array.length; i++) {
   if(array[i] - array[i+1] !== 0){
     if(array[i+1] - array[i+2] !==0){
       return array[i+1];
     }
     else {
      return array[i];
     }
    }
   }
  }


console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
//console.log(findUniq([1,0,0,0,0,0,0])
//console.log(findUniq([-0.55,0,0,0,0,0,1])
//console.log(findUniq([1,1,1,1,2,1,1])
