import { EventDto } from '@dark-rush-photography/api/types';

export class TasteOfAtlanta2018 extends EventDto {
  group = 2018;
  slug = 'taste-of-atlanta-2018';
  title = 'Taste of Atlanta 2018';
  description = '';
  keywords = [];
  dateCreated = new Date(2018, 1, 7).toISOString().substring(0, 10);
  datePublished = new Date(2018, 1, 7).toISOString().substring(0, 10);
  location = {
    city: 'Sandy Springs',
    stateOrProvince: 'Georgia',
    country: 'United States',
  };
  useTileImage = false;

  private constructor() {
    super();
  }

  static of(): EventDto {
    return new TasteOfAtlanta2018();
  }
}
