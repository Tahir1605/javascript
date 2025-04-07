//declarations -> 1

// const arr = ["apple","banana",10,"graphs"]
// for(let i = 0; i < arr.length; i++)
// {
//    console.log(arr[i]);
   
// }

// declaration -> 2

// const arr2 = new Array("a","b","c","d","e")
// for(let i = 0; i < arr2.length; i++)
// {
//     console.log(arr2[i]);
    
// }

// array with object

const arr3 = [
    {
        name : "Tahir",
        age : 23,
        course : "MBA"
    },
    {
        name : "Soumen",
        age : 22,
        course : "MCA"
    },
    {
        name : "Tanmoy",
        age : 23,
        course : "BBA"
    },
    {
        name : "Riju",
        age : 20,
        course : "MCA"
    }
]

const myname = "Tahir"

for(let i = 0; i < arr3.length; i++)
{
    if(arr3[i].name == myname)
    {
        console.log("Age of ",arr3[i].name," is ",arr3[i].age);
        
    }
}
// console.log(arr3[2].course);
