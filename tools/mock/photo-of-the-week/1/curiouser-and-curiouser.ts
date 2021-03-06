import { PhotoOfTheWeekDto } from '@dark-rush-photography/api/types';

export class CuriouserAndCuriouser extends PhotoOfTheWeekDto {
  group = 1;
  slug = 'curiouser-and-curiouser';
  title = 'Curiouser and Curiouser!';
  description = `Curious, What Do You See? I'm Getting Curiouser and Curiouser!`;
  keywords = [
    'Buena Vista',
    'Colorado',
    'Looking Glass',
    'Window Pane',
    'Another World',
    'Colorful',
  ];
  dateCreated = new Date(2019, 8, 18).toISOString().substring(0, 10);
  datePublished = new Date(2019, 8, 18).toISOString().substring(0, 10);
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
    return new CuriouserAndCuriouser();
  }
}
