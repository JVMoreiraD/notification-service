import { Content } from '../entities/content/content';
import { Notification } from '../entities/notification/notification';
import { NotificationsRepository } from '../repositories/notificationsRepository';

interface ISendNotificationRequest {
	recipientId: string;
	content: string;
	category: string;
}
interface ISendNotificationResponse {
	notification: Notification;
}

export class SendNotification {
	constructor(private notificationsRepository: NotificationsRepository) {}
	async execute(
		request: ISendNotificationRequest,
	): Promise<ISendNotificationResponse> {
		const { category, content, recipientId } = request;

		const notification = new Notification({
			category,
			content: new Content(content),
			recipientId,
		});
		await this.notificationsRepository.create(notification);
		return { notification };
	}
}
