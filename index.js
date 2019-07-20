//let persons = ['jon','tony','paul','mark','lucas'];

// let output = "";
// for (let x = 0 ; x < persons.length; x++){
// output += `<li> ${persons[x]} </li>`
// }

// document.getElementById('container').innerHTML = `<ul> ${output} <ul>`

//objects

// let person = {
// fname: "jon", 
// lname: "doe",
// age: 32    
// }

//array of objects

let persons = [
    {
        fname: "jon",
        lname: "doe",
        age:23
    },
    {
        fname: "pewee",
        lname: "cat",
        age:3
    },
    {
        fname: "tony",
        lname: "stark",
        age: 1
    }
]

let output = "";
persons.forEach (function(item){
    //console.log(item.lname)
   output += `<p> your name is ${item.fname} ${item.lname} </p>`;
})

document.getElementById('container').innerHTML = `<ul> ${output} <ul>`

