import { randomUUID } from 'crypto';
import { Notification } from '../entities/notification/notification';
import { SendNotification } from './sendNotificationUseCase';

const notificationsRepository = {
	async create(notification: Notification): Promise<void> {
		console.log(notification);
	},
};
describe('Send notification use case', () => {
	it('should be able to send a notification', async () => {
		const sendNotification = new SendNotification(notificationsRepository);

		const { notification } = await sendNotification.execute({
			content: 'This is a notification',
			category: 'social',
			recipientId: randomUUID(),
		});

		expect(notification).toBeTruthy();
	});
});
