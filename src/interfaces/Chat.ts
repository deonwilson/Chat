import { ObjectId } from 'mongoose';

import { IMessage } from './Message';

export interface IChat {
	_id?: ObjectId;

	messages: IMessage[];

	totalMessages: number;
}
