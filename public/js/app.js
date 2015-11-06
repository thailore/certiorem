var http = require('http');
var nodemailer = require('nodemailer');
var url = "http://snoopy.rlc.manhattan.edu/~kowusuacheam.student/";
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "noreplycmpt467@gmail.com",
		pass: "networking"
		}
});
var email = "<!DOCTYPE html><html><body><p>Hello all,<br><br>Please be aware that a new assignment has been posted for: $ClassEntry.<br>Click <a href='http://home.manhattan.edu/~ankur.agrawal'>here</a> for further information.<br><br><br>Professor Agrawal</p></body></html> "
var sendObj = {
	from: "noreplycmpt <ahhhaha0@gmail.com>",
	to: "koajunior92@gmail.com",
	subject: "New Assignment posted",
	html: email
};

function ares(response){
	var newtag = response.headers.etag;
	return newtag;
}

function res(response){
	var etag = response.headers.etag;
	return etag;
}

function check(ot){
 http.get(url,ares);
	 if(ot === nt){
	 	console.log("No new homework posted");
	 }else{
	 	 smtpTransport.sendMail(sendObj, function(error, response){
	 		 if(error){
	 			 console.log(error);
	 		 }else{
	 			 console.log("Message sent: " + response.message);
	 		 }
	 	 });
		 ot = nt;
	}
};

http.get(url,res);
setInterval(function(){check(etag);},5000);


/*if(oldtag === newtag){
	console.log("No new homework posted");
}else{
	 smtpTransport.sendMail(sendObj, function(error, response){
		 if(error){
			 console.log(error);
		 }else{
			 console.log("Message sent: " + response.message);
		 }
	 });
 }*/
