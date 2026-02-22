import express from 'express';
import { PORT } from './config';
import { cardsRouter } from './routers/cards.router';
const app = express();
app.get('/', (request, response) => {
	response.send('OK');
});

app.use('/cards', cardsRouter);

app.listen(PORT);
