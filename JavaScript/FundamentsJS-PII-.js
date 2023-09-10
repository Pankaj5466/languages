'use strict'

//const testFunctionOne = testFunction(); //Forward Function Declaration

//Function Defination
function testFunction(name,age,hoobies)
{
    console.log("userName = %s, age = %d",name,age) //C style Printing
    
    let userInfo = `userName = ${name}, age = ${age}\n` //Or we can use template prining
    console.log(userInfo)

    console.log("Hobbies of user is\n")

    //for loop of array
    hoobies.forEach(ele => {
        console.log(ele)
    });
}

//Function Expression
let testFunctionTwo  = function(name)
{
    console.log("testFunctionTwo userName = ",name)
}

//Arrow Function 
const testFunctionThree = (name)=>{
    console.log("testFunctionThree userName = ",name);
}

//Shorted form of arrow function, 2037-birthYear will be returned
const testFunctionFour = (birthYear)  => 2037 - birthYear

function functionTest()
{
    testFunction("Pankaj",56,["chess","VitaminD"]);

    testFunctionTwo("Tree");
    testFunctionThree("Four");

    console.log(testFunctionTwo)

    testFunctionTwo = 56; /*Allowed type are associated with value */

    console.log(testFunctionTwo)
}

function arrayTest()
{
    const hobbies  = ["Chess","VitaminD", 67,89,true] /*Way1 Array Declaration */
    hobbies.forEach(elem =>{
        console.log(elem + " " )
    })

    let peoples = new Array("Sam","Tommy", "Kutta!", 68,90,false) /*Way2 Array Declaration */
    console.log("Printing peoples\n");
    peoples.forEach(elem =>{
        console.log(elem)
    })

    //Adding element to array
    peoples[0] = "Tina" //updating value 
    const arrayLenght = peoples.push("890") //inserting elements
    console.log("\n\t" + peoples,arrayLenght)

    //Methodes on array elements


}

function objectTest()
{
    const userData = {
        name:"Pankaj",
        age:26,
        hobbies : ["Chess","VitaminD",89],

        getName : function(){ /* a function as a object attribute!! */
            return this.name;
        },

        getAge : () => {
            return this.age;
        },
        getHobbies : () => hobbies
    }//object clousure
    


    console.log("userName = ", userData.getName(), "userAge = ",userData.getAge())
}

function loopTest()
{
    const hobbies = ["Chess","VitaminD",89,900,true,false];

    for(let i=0;i<hobbies.length;i++) /*NOTICE: in c++ it be hobbies.lenght() */
    {
        console.log( `i = ${i}, hobbies[i] = ${hobbies[i]}`)
    }

    console.log("\nPrinting via while loop")
    let i=0;
    while(i<hobbies.length)
    {
        console.log( `i = ${i}, hobbies[i] = ${hobbies[i]}`)
        i++;
    }

}

function main()
{
    //functionTest();
    //arrayTest();

   // objectTest()

   loopTest();
   
}

main();