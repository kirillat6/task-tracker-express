import express, { Response, Request } from 'express';
import { CreateCardRequest, GetCardsResponse } from '../models/types/cards';
import { Card } from '../models/interfaces/cards';
import { IdParams } from '../models/types/common';

export const cardsRouter = express.Router();

cardsRouter.get(
	'/',
	(request: Request<{}, {}>, response: Response<GetCardsResponse>) => {
		// TODO Return cards
	},
);

cardsRouter.get(
	'/:id',
	(request: Request<IdParams, {}>, response: Response<Card>) => {
		// TODO Return card
	},
);

cardsRouter.post(
	'/',
	(request: Request<{}, CreateCardRequest>, response: Response<Card>) => {
		// TODO Create cards
	},
);

cardsRouter.put(
	'/:id',
	(request: Request<IdParams, Card>, response: Response<Card>) => {
		// TODO Change card
	},
);

cardsRouter.delete(
	'/:id',
	(request: Request<IdParams>, response: Response<void>) => {
		// TODO Delete card
	},
);
