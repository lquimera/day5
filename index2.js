// //objects
// let obj = {
//     fname: "Jon",
//     lname: "Doe",
//     age: 32,
//     status: 'single',
// //method: a function inside of a object
//     fullname:function(){
//         return `hi! ${this.fname} ${this.lname}`
// },
// isMarried:function (){
//     if (this.status == 'married'){
//         return 'yes'
//     }
//     else
//     {
//         return 'no'
//     }
// },
// Minor:function(){
//     if (this.age <18){
//         return "Yes"
//     }
//     else{
//         return "No"
//     }
// }
// }


// //function - putside the object
// function num1()
// {
// return 23
// }

// function num2()
// {
//     return 12
// }

// console.log(num1() + num2())

//ES6 class

class myclass{
  constructor(name,age, gender)
  {
      this.name = name
      this.age= age
      this.gender=gender
  }
  isMinor()
  {
      if (this.age <18)
  {
 
  return "yes"
}
else
{
    return "NO"
}
}
}

let myobj = new myclass('jon','23','male');
let myobj2 = new myclass('mark','1','x');