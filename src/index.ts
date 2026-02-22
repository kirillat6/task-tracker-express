import express from 'express';
import { ADMIN_LOGIN, ADMIN_PASSWORD, PORT } from './config';
import { cardsRouter } from './routers/cards.router';
import { createTables } from './database/create-tables';
import basicAuth from 'express-basic-auth';

async function run() {
	await createTables();

	const app = express();
	app.use(express.json());
	app.use(
		basicAuth({
			users: { [ADMIN_LOGIN]: ADMIN_PASSWORD },
			challenge: true,
		}),
	);
	app.get('/', (request, response) => {
		response.send('OK');
	});

	app.use('/cards', cardsRouter);

	app.listen(PORT);
}

run().catch((err) => console.log(err));
