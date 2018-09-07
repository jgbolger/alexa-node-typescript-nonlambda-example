import {  ErrorHandler as ASKErrorHandler, HandlerInput } from 'ask-sdk-core';
import {  Response } from 'ask-sdk-model';

export const ErrorHandler : ASKErrorHandler = {
    canHandle(handlerInput : HandlerInput, error : Error ) : boolean {
      return true;
    },
    handle(handlerInput : HandlerInput, error : Error) : Response {
      console.error(`Error handled :: ${error.message}`);
      console.error(error);
  
      return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I can\'t understand the command. Please say again.')
        .getResponse();
    },
};