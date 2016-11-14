//possible pull from common compliments website.
//Adding more compliments soon
var https = require('https');

var compliments = [
    "Hey why are you cuter then kittens!",
    "You look stunning today, I've been shocked.",
    "Not sure why I didn't notice this before, but you're sexier then a perfectly flipped pancake",
    "I need a glass of water, cause you're looking good and making me thirsty"
];

exports.handler = function (event, context) {

    try {
        
    if (event.session.new) {
    console.log("NEW SESSION")
    var complimentsIndex = ""
    
    }
    
    switch (event.request.type) {
            case "LaunchRequest":
            console.log('LAUNCH REQUEST')
            var complimentsIndex = compliments[Math.floor(Math.random()*compliments.length)];
            context.succeed(
                initResponse(
                    speechletResponse(complimentsIndex, true),
                    {}
                )
             )
            break;
             
            case "IntentRequest":
                console.log('INTENT REQUEST')

                switch(event.request.intent.name) {
                    case "forhelp":
                        context.succeed(
                            initResponse(
                                speechletResponse("Just say Alexa Flatter Me for a compliment, don't be shy.", true),
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
        response: speechletResponse,

    }
    
}




