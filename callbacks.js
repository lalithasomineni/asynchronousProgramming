//get user emailid ***********

function getMail(email,password,callback){
	setTimeout(()=>{
		console.log("wait")
     callback({useremail: email});
	},5000)

}

function getPictures(email,callback){
	setTimeout(()=>{
		console.log("hey,we have your pictures");
		callback(["pic1","pic2","pic3"]);
	},3000)
}

	const user = getMail("lsomineni@gmail.com","123",user =>{
		console.log(user);
		getPictures(user.useremail,pictures => {
			console.log(pictures)
		})
	})
