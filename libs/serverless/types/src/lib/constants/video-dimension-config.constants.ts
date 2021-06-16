import { VideoDimensionType } from '@dark-rush-photography/shared-types';
import { VideoDimensionConfig } from '../interfaces/video-dimension-config.interface';

export const VIDEO_DIMENSION_CONFIG: VideoDimensionConfig[] = [
  {
    type: VideoDimensionType.Thumbnail,
  },
  {
    type: VideoDimensionType.Small,
  },
  {
    type: VideoDimensionType.Medium,
  },
  {
    type: VideoDimensionType.Large,
  },
  {
    type: VideoDimensionType.Facebook,
  },
  {
    type: VideoDimensionType.GoogleBusiness,
  },
  {
    type: VideoDimensionType.Instagram,
  },
  {
    type: VideoDimensionType.LinkedIn,
  },
];