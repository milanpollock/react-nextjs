import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Document,
  DocumentModelProvider,
  DocumentSchema,
  ServerlessProvider,
  VideoProvider,
} from '@dark-rush-photography/api/data';
import { AdminVideosController } from './admin-videos.controller';
import { AdminVideosService } from './admin-videos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Document.name, schema: DocumentSchema },
    ]),
    HttpModule,
  ],
  controllers: [AdminVideosController],
  providers: [
    ServerlessProvider,
    DocumentModelProvider,
    VideoProvider,
    AdminVideosService,
  ],
})
export class AdminVideosModule {}