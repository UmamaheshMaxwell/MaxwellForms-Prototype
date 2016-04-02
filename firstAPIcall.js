// Create a signature request from back end.
var config = require('./config/config.js')
var hellosign = require('hellosign-sdk')({key: config.HELLOSIGN_APIKEY});

var options = {
    test_mode : 1,
    clientId : 'ad00a6dc8ff93743a45ad90c150d1453',
    subject : 'Maxwell embedded signature request',
    message : 'Awesome, right?',
    signers : [
        {
            email_address : 'maheshmeka16@gmail.com',
            name : 'UmaMahesh Meka'
        }
    ],
    files : ['Forms/MasterForm.pdf']
};

// Get Embedded Signature Url
hellosign.signatureRequest.createEmbedded(options)
    .then(function(response){
        var signatureId = response.signature_request.signatures[0].signature_id;
        return hellosign.embedded.getSignUrl(signatureId);
    })
    .then(function(response){
        console.log('Embedded_Sign_Url = ' + response.embedded.sign_url);
    })
    .catch(function(err){
        //catch error
    });