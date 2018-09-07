//Import standard Alexa handlers
import { LaunchRequestHandler } from './LaunchRequestHandler';
import { HelpIntentHandler } from './HelpIntentHandler';
import { CancelAndStopIntentHandler } from './CancelAndStopIntentHandler';
import { SessionEndedRequestHandler } from './SessionEndedRequestHandler';
import { ErrorHandler } from './ErrorHandler';

//Import app specific Alexa handlers
import { HelloWorldIntentHandler } from './HelloWorldIntentHandler';

export const requestHandlers = [
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    HelloWorldIntentHandler
];

export const errorHandlers = [
    ErrorHandler
];