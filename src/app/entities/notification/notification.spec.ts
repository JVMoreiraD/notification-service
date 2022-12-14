import { randomUUID } from 'crypto';
import { Content } from '../content/content';
import { Notification } from './notification';
describe('Notification', () => {
	it('it should be able to create a notification', () => {
		const notification = new Notification({
			content: new Content('ola mundo'),
			category: 'none',
			recipientId: randomUUID(),
		});
		expect(notification).toBeTruthy();
	});
});
