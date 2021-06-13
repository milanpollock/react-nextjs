import { Image } from './image.interface';
import { ImageDimension } from './image-dimension.interface';

export interface Review {
  readonly id?: string;
  readonly title?: string;
  readonly text: ReadonlyArray<string>;
  readonly images: ReadonlyArray<Image>;
  readonly imageDimensions: ReadonlyArray<ImageDimension>;
}
