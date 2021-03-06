import { PhotoOfTheWeekDto } from '@dark-rush-photography/api/types';

export class StopLookListen extends PhotoOfTheWeekDto {
  group = 2;
  slug = 'stop-look-listen';
  title = 'Stop, Look, and Listen';
  description = `I should really stop to read my texts!`;
  keywords = [
    'Buena Vista',
    'Colorado',
    'Mountains',
    'Snow',
    'Railroad Crossing',
    'Cold Temperature',
    'Puffy Clouds',
  ];
  dateCreated = new Date(2020, 1, 4).toISOString().substring(0, 10);
  datePublished = new Date(2020, 1, 4).toISOString().substring(0, 10);
  location = {
    city: 'Buena Vista',
    stateOrProvince: 'Colorado',
    country: 'United States',
  };
  useTileImage = false;

  private constructor() {
    super();
  }

  static of(): PhotoOfTheWeekDto {
    return new StopLookListen();
  }
}
