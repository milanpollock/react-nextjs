import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Document,
  DocumentSchema,
  EntityProvider,
  EventProvider,
} from '@dark-rush-photography/api/data';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Document.name, schema: DocumentSchema },
    ]),
  ],
  controllers: [EventsController],
  providers: [EventsService, EventProvider, EntityProvider],
})
export class EventsModule {}
