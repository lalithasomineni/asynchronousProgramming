//basic way of creating promise
//A promise include a Promise keyword
       //resolve Keyword //executes if everthing correct or got all the data
       //reject //catch errors
       //then //executes resolve
       //catch //executes reject

       //A BASIC PROMISE USING RESOLVE**********//
const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
         resolve({user:"ed"})
	},2000)
})
promise.then((user)=>{
	console.log(user)
})

//ABASIC ONE USING REJECT**********//
//create a promise
const prom = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject(new Error);
	},2000)
})
.catch((err)=>{
	console.log("oh, error!!!")
})

//refacoring our callbacks.js with promises.js
//remove callback funcs and add promise
//takeoff callback place resolve
function getMail(email,password){
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
     resolve({useremail: email});
	},5000)
	})	
}

function getPictures(email){
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
		console.log("hey,we have your pictures");
		resolve({["pic1","pic2","pic3"]});
	},3000)
	})
	
}
function pictureDetails(picture){
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({console.log("hey this is your chikdhood pic")});
		})
	})
}
getMail("lall","123")
   .then(user => getPictures(user.email))
   .then(pictures => pictureDetails(pictures[0]))


	const user = getMail("lsomineni@gmail.com","123",user =>{
		console.log(user);
		getPictures(user.useremail,pictures => {
			console.log(pictures)
		})
	})


//make all promises run at a time*******

const youtube = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("gtting youtube activity")
         resolve({videos:[1,2,3,4,5]});
	},4000)
})
const facebook = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("gtting facebook activity")
         resolve({userName:"lalli"});
	},3000)
})
Promise.all([youtube,facebook]).then(result=>console.log(result));

//using both resolve and reject in a single case

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

 