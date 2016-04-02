var config = require('./config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

// Basic Authentication
hellosign.account.get()
    .then(function(response){
    	console.log('\n Succesfully communicated with HelloSign !!!! \n');
        console.log(" Account Id :" + response.account.account_id);
        console.log(" Emails Address :" + response.account.email_address);
        console.log(" Callback Url :" + response.account.callback_url);
        console.log(" Statuc Code :" + response.statusCode);
        console.log(" Status Message :" + response.statusMessage);
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });


// Get the list of templates
hellosign.template.list()
    .then(function(response){
        //parse response
        console.log("\n Gets the list of templates !!\n");

        for(var i= 0; i<response.templates.length; i++){
        	console.log(" Template Id_"+i + " is " + response.templates[i].template_id)
        }
    })
    .catch(function(err){
        //catch error
        console.log(err);
    });