import { ActivityType } from '../enums/activity-type.enum';
import { ActivityMedia } from './activity-media.interface';
import { ActivityConfig } from './activity-config.interface';

export interface Activity {
  readonly type: ActivityType;
  readonly media: ActivityMedia;
  readonly config: ActivityConfig;
}
