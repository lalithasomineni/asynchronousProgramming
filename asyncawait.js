//consider the previous get to do function 
//now we will be using new keywords ASYNC and AWAIT 
//await is to tells us that a function is returning a promise wait until its done i.e..,resolved
//create a fetchtodo

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

