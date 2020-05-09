// Synchronous ****************************//
console.log("hey");
function Name(name){
	return name;
}
console.log(Name("lalli"))
console.log("i am");
//OUTPUT is hey lalli i am ohhhh isn't that bad i want it in proper way :(
//lets see this code heren i want to get i am before lalli assume it in a browser you want somethings to happen first another way to say is we don't want delay we want to load somethingn as fast as possible there where ASYCHRONOUS COMES TO USE




//ASYNCHRONOUS*******************//

console.log("hey");
setTimeout(()=>{
     console.log("lalli");
},2000)//setTimerout wil always take a callBack*****
console.log("i am");
//now see the magic
//OUTPUT is hey i am lalli!!!!!!!
//asynchronous is sweet actually.



//lets go somemore deeper into it!!!!wooh exciting***//
const items = [1,2,3,4,5];
items.forEach((item)=>{
	   console.log(item + 5);
     }) //making callBack functions clear myself!!!!







