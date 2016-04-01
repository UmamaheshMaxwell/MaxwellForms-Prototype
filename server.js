var hellosign = require('hellosign-sdk')({key: 'c98f09c4617ff75700ed68abe46ab5d4cd4fa7a1cc63feb33c1af25707a75fc5'});

// Basic Authentication

hellosign.account.get()
    .then(function(response){
    	console.log('Basic Authentication Succeded');
        console.log(response);
    })
    .catch(function(err){
        //catch error
    });

