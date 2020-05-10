# asynchronousProgramming
learning asynchronous programming

## where we need asynchronous programming
 - The main reason why we need asynchronous programming is to avoid blocking of i/o(provides cocurrency i.e..,multiple threading ).
 - it also decreases the code and makes it readable
      i.e.., in general terms lets consider a synchronous code 
      ```
     console.log("hey");
    function Name(name){
    	return name;
                       }
   console.log(Name("lalli"))
    console.log("i am");//Output is hey lalli i am
    ```
   - i want my output to hey i am lalli but i don't want to change the order i call them THIS IS WHERE ASYNCHRONOUS PROGRAMMING COMES HANDY
   - same code in async way
   ```
   console.log("hey");
    setTimeout(()=>{
     console.log("lalli");
     },2000)//setTimerout wil always take a callBack*****
     console.log("i am");
   ```
  - Because JavaScript is executed in that non-blocking way you have to take additional measures to deal with that code if you need to have the result available before further code is being executed.  ```
  const getTodo = () => {
    setTimeout(() => {
        return { text: 'Complete Code Example' }
    }, 2000)
}
const todo = getTodo()
console.log(todo.text) // throws error we have not waited until the function loaded 
```
## how to get out of that?!
- js has severaal ways for that
- CALLBACK
- promises
- async await
### callBack
Callbacks are simple functions which are used to notify the calling instance when an asynchronous code block has been executed and the result is available.
- using callbacks is simple ,the above code can be return as 
```
function getTodo(name,callback){
     setTimeout(()=>{
     console.log("wait")
     callback({text: "hey"})
     },2000)
  }
  
 getTodo("lalli",todo => {
 	console.log(todo);
 })
```
# Promises
callbacks makes code longer,not readabe(callback hell) so to Avoid these we will go with promises.
- Promises which is a built-in language feature of JavaScript and makes handling asynchronous code easier and more readable.
- RESOLVE AND REJECT are the to callback functions used in promises.
- if its resolved we will proceed forward i.e.., use ".then".
- if its rejected we will show an error messeage . i.e..,".catch".

```
function getTodo(){
   return new Promise((resolve,reject)=>{
   	let error = false;
   	if(!error){
   		resolve({text:"you should work on this"})
   	}
   	else{
   		reject()
   	}
   },1000);
}
const message = getTodo().then(todo => {
	console.log(todo);
})
```
lets see the same code by making error true
```
function getTodo(){
   return new Promise((resolve,reject)=>{
   	let error = true;
   	if(!error){
   		resolve({text:"you should work on this"})
   	}
   	else{
   		reject()
   	}
   },1000);
}
const message = getTodo().then(todo => {console.log(todo)}).catch(error=>{console.log("error!")})
           
           
```
### Async Await
- By using async and await the handling of promises is becoming more easier.
```
function getTodo(){
   return new Promise((resolve,reject)=>{
   	let error = false;
   	if(!error){
   		resolve({text:"you should work on this"})
   	}
   	else{
   		reject()
   	}
   },1000);
}
//const message = getTodo().then(todo => {console.log(todo)}).catch(error=>{console.log("error!")})
//func fetchtodo

async function fetchtodo() {
	const todo = await getTodo()
	return todo
}
//remaining is same as all
fetchtodo().then(todo =>{
	console.log(todo);
})


```

The implementation of the getTodo function has not changed at all. Still the Promise is created and depending on the value of the error variable it is resolved or rejected like seen before.
What has changed is the way the getTodo function is called. A new function fetchTodo is being implemented and the async keyword is used to indicate that this function is executing asynchronous code based on a Promise.
Inside of fetchTodo we’re calling the getTodo method by using the keyword await. This indicates that getTodo is returning a Promise and we have to wait for the Promise to be resolved (or rejected). The result of what is being returned from the promise is stored in todo. In the next line of code the todo object is being returned. This is possible because by using the keyword await we’re making sure that the next line of code is being executed after the Promise (returned from getTodo) has been resolved.
  
  

    
 
