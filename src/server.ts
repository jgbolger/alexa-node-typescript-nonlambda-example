import * as Alexa from 'ask-sdk-core';
import { requestHandlers, errorHandlers } from './handlers';
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();
const port = process.env.PORT || 3000

let skill: Alexa.Skill;

app.use(bodyParser.json());
app.post('/api', (req: Request, res: Response) => {

  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(...requestHandlers)
      .addErrorHandlers(...errorHandlers)
      .create();
  }

  skill.invoke(req.body)
    .then(function(responseBody: any) {
      res.json(responseBody);
    })
    .catch(function(error:any) {
      console.log(error);
      res.status(500).send('Error during the request');
    });

});

app.listen(port, () => {
  console.log(`Development endpoint listening on port ${port}!`);
});