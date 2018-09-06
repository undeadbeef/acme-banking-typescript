import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';

import { WelcomeController } from './controllers';

const app: express.Application = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

/* Set up application-wide winston logger */
app.locals.logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
});

/* Set up express request logging via express-winston */
app.use(expressWinston.logger({
  winstonInstance: app.locals.logger,
}));

app.use('/welcome', WelcomeController);

app.listen(port, () => {
  // tslint:disable-next-line no-console
  console.log(`Listening at http://localhost:${port}/`);
});
