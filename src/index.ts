import express from 'express';
import { PORT } from './config';
import { cardsRouter } from './routers/cards.router';
import { createTables } from './database/create-tables';

async function run() {
	await createTables();

	const app = express();
	app.use(express.json());
	app.get('/', (request, response) => {
		response.send('OK');
	});

	app.use('/cards', cardsRouter);

	app.listen(PORT);
}

run().catch((err) => console.log(err));
