import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { map, Observable, toArray } from 'rxjs';

import { EntityType, FavoritesDto } from '@dark-rush-photography/shared/types';
import {
  DocumentModel,
  Document,
  EntityProvider,
  FavoritesProvider,
} from '@dark-rush-photography/api/data';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Document.name)
    private readonly favoritesModel: Model<DocumentModel>,
    private readonly favoritesProvider: FavoritesProvider,
    private readonly entityProvider: EntityProvider
  ) {}

  findOne$(): Observable<FavoritesDto> {
    return this.entityProvider
      .findAllPublic$(EntityType.Favorites, this.favoritesModel)
      .pipe(
        toArray<DocumentModel>(),
        map(this.entityProvider.validateOneEntity),
        map(this.favoritesProvider.loadFavoritesPublic)
      );
  }
}
