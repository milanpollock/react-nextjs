import {
  Controller,
  Body,
  Param,
  Post,
  HttpCode,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Observable } from 'rxjs';

import { Event } from '@dark-rush-photography/shared/types';
import {
  EventCreateDto,
  EventDto,
  EventUpdateDto,
} from '@dark-rush-photography/api/types';
import { ParseObjectIdPipe } from '@dark-rush-photography/api/util';
import { AdminEventsService } from './admin-events.service';

@Controller({ path: 'admin/events', version: '1' })
@ApiBearerAuth()
@ApiTags('Admin Events')
export class AdminEventsController {
  constructor(private readonly adminEventsService: AdminEventsService) {}

  @Post()
  @ApiCreatedResponse({ type: EventDto })
  create$(@Body() eventCreate: EventCreateDto): Observable<Event> {
    return this.adminEventsService.create$(eventCreate);
  }

  @Put(':id')
  @ApiOkResponse({ type: EventDto })
  update$(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() eventUpdate: EventUpdateDto
  ): Observable<Event> {
    return this.adminEventsService.update$(id, eventUpdate);
  }

  @Post(':id/post')
  @HttpCode(204)
  post$(@Param('id', ParseObjectIdPipe) id: string): Observable<void> {
    return this.adminEventsService.post$(id);
  }

  @Get()
  @ApiOkResponse({ type: [EventDto] })
  findAll$(): Observable<Event[]> {
    return this.adminEventsService.findAll$();
  }

  @Get(':id')
  @ApiOkResponse({ type: EventDto })
  findOne$(@Param('id', ParseObjectIdPipe) id: string): Observable<Event> {
    return this.adminEventsService.findOne$(id);
  }

  @Delete(':id')
  @HttpCode(204)
  delete$(@Param('id', ParseObjectIdPipe) id: string): Observable<void> {
    return this.adminEventsService.delete$(id);
  }
}
