var http = require('http');
var nodemailer = require('nodemailer');
var url = "http://snoopy.rlc.manhattan.edu/~kowusuacheam.student/";
var newTag;
var etag;
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "noreplycmpt467@gmail.com",
		pass: "**********"
		}
});
var email = "<!DOCTYPE html><html><body><p>Hello all,<br><br>Please be aware that a new assignment has been posted for: $ClassEntry.<br>Click <a href='http://home.manhattan.edu/~ankur.agrawal'>here</a> for further information.<br><br><br>Professor Agrawal</p></body></html> "
var sendObj = {
	from: "noreplycmpt <ahhhaha0@gmail.com>",
	to: "koajunior92@gmail.com",
	subject: "New Assignment posted",
	html: email
};

function check(oldtag){
 http.get(url,function(res){
   newtag = res.headers.etag;
   if(oldtag === newtag){
     console.log("No new homework posted");
   }else{
	    smtpTransport.sendMail(sendObj, function(error, response){
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
          newtag = oldtag;
        }
      });
    }
})};

http.get(url,function(res){
 etag = res.headers.etag;
 function check1(){
	check(etag);
 };
 setInterval(check1,3000);
});
