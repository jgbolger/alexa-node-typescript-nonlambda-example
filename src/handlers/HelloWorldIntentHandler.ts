import {  HandlerInput, RequestHandler } from 'ask-sdk-core';
import {  Response } from 'ask-sdk-model';

export const HelloWorldIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) : boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'Hello';
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
  };