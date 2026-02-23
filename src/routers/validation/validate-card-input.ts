import { Request, Response } from 'express';
import { IdParams } from '../../models/types/common';
import { Card } from '../../models/interfaces/cards';
import { CreateCardRequest } from '../../models/types/cards';

export const validateCardInput = (
	{ body }: Request<IdParams, Card, CreateCardRequest>,
	response: Response,
	next: () => void,
): void => {
	if (
		typeof body !== 'object' ||
		!body.text ||
		typeof body.text !== 'string'
	) {
		response.status(400).send({ error: 'Validation error' });
		return;
	}
	next();
};
