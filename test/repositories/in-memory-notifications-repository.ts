import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { Notification } from 'src/app/entities/notification/notification';

class InMemoryNotificationsRepository implements NotificationsRepository {
	public notifications: Notification[] = [];

	async create(notification: Notification): Promise<void> {
		this.notifications.push(notification);
	}
}

export { InMemoryNotificationsRepository };
