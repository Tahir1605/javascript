// foreach method 

// Example -> 1

// const array1 = [1,2,3,4,5,6,7,8,9,10];
// array1.forEach((element) => console.log(element*element));

// Example -> 2

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = []
// arr.forEach((val) => {
//     newArr.push(val*val)
// })

// console.log(newArr);

// Example -> 3

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = []
// arr.forEach((val) => {
//     if(val > 5)
//     {
//         newArr.push(val)
//     }
// })

// console.log(newArr);


// map method 

// Example -> 1

// const array2 = [1,2,3,4,5,6,7,8,9,10]
// const array3 = array2.map((element) => element*2)
// console.log(array3);

// Example -> 2

// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
  
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); 
//   console.log(kvArray);

// Example -> 3

//   const products = [
//     { name: "sports car" },
//     { name: "laptop" },
//     { name: "phone" },
//   ];
  
//   products.map((product) => {
//     product.price = 100;
//   });

//   console.log(products);


// filter method 

// Example -> 1

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = arr.filter((value) => {
//     if(value%2 == 0)
//     {
//         return value
//     }
// })
// console.log(newArr);

// Example -> 2

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = arr.filter((value) => value%2 == 0)
// console.log(newArr);


// array method chaining

// Example -> 1

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = arr
// .map((val) => val*val)
// .map((val) => val+5)
// .filter((val) => val > 50)
// console.log(newArr);


// reduce method

// Example -> 1

// const arr = [1,2,3,4]
// const newArr = arr.reduce((i,j) => {
//     console.log("acc : ",i," curr : ",j);
//     return i + j
// },3)


// Example -> 2

// const arr = [1,2,3,4]
// const newArr = arr.reduce((i,j) => (i+j),0)
// console.log(newArr);

// Example -> 3

const arr =[
    {
        course : "MERN",
        price : 599
    },
    {
        course : "Spring boot",
        price : 799
    },
    {
        course : "DSA using Python",
        price : 299
    },
    {
        course : "Android Development",
        price : 1299
    },
    {
        course : "data science",
        price : 899
    }
]

const newArr = arr.reduce((acc,item) => acc + item.price, 0)
console.log(newArr);






  
  

  



