const arr = [1,1,3,3,4,5,69]
const result = arr.some((value , index , thisArray) =>{ 
                  //console.log(`Number : ${value} index : ${index} ${thisArray}`);
                  console.log(value);
                  return value === 4;
})

//This method take three argument at the same time 1 . Value 2 . Value index 3 . Array index

console.log(result);