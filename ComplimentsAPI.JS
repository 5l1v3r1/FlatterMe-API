//possible pull from common compliments website.
var https = require('https')

var compliments = [
    "Hey why are you so cute",
    "You look stunning today",
    "Not sure why I didn't notice this before, but you sexy",
    "I need a glass of water, cause your looking good"
];

var complimentsIndex = Math.floor(Math.random() * compliments.length);
var randomcompliment = compliments[complimentsIndex];
var complimentOutput = randomcompliment;

exports.handler = (event, context) => {
    

    try {
        
    if (event.session.new) {
    console.log("NEW SESSION")
    complimentsIndex = [];
    complimentIndex.length = 0;
    }
    
    switch (event.request.type) {
            case "LaunchRequest":
            console.log('LAUNCH REQUEST')
            context.succeed(
                initResponse(
                    speechletResponse(complimentOutput, true),
                    {}
                )
             )
            break;
             
            case "IntentRequest":
                console.log('INTENT REQUEST')

                switch(event.request.intent.name) {
                    case "TellMe":
                        context.succeed(
                            initResponse(
                                speechletResponse("You are just outrageously sexy.", true),
                                {}
                            )
                        )
                    break;
        
            case "SessionEndedRequest":
                console.log('SESSION ENDED REQUEST')
                break;
        
            default:
                context.fail('INVALID REQUEST TYPE: $event.request.type}')
        }
    }
    
    } catch(error) { context.fail('Exception: ${error}')}

}

speechletResponse = (outputText, shouldEndSession) => {
 
 return {
     outputSpeech: {
         type: "PlainText",
         text: outputText
     },
     shouldEndSession: shouldEndSession
     
 }
 
}

initResponse = (speechletResponse, sessionAttributes) => {
    
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}
