import {
  Controller,
  Body,
  Param,
  Post,
  HttpCode,
  UseGuards,
  Get,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Observable } from 'rxjs';

import { ADMIN, Review } from '@dark-rush-photography/shared/types';
import { ReviewDto, ReviewUpdateDto } from '@dark-rush-photography/api/types';
import { Roles, RolesGuard } from '@dark-rush-photography/api/util';
import { AdminReviewsService } from './admin-reviews.service';

@Controller('admin/v1/reviews')
@UseGuards(RolesGuard)
@ApiBearerAuth()
@ApiTags('Admin Reviews')
export class AdminReviewsController {
  constructor(private readonly adminReviewsService: AdminReviewsService) {}

  @Roles(ADMIN)
  @Post(':slug')
  @ApiCreatedResponse({ type: ReviewDto })
  create$(@Param('slug') slug: string): Observable<Review> {
    return this.adminReviewsService.create$(slug);
  }

  @Roles(ADMIN)
  @Post(':id/update')
  @HttpCode(204)
  updateProcess$(
    @Param('id') id: string,
    @Body() reviewUpdate: ReviewUpdateDto
  ): Observable<void> {
    return this.adminReviewsService.updateProcess$(id, reviewUpdate);
  }

  @Roles(ADMIN)
  @Post(':id/post')
  @HttpCode(204)
  postProcess$(@Param('id') id: string): Observable<void> {
    return this.adminReviewsService.postProcess$(id);
  }

  @Roles(ADMIN)
  @Get()
  @ApiOkResponse({ type: [ReviewDto] })
  findAll$(): Observable<Review[]> {
    return this.adminReviewsService.findAll$();
  }

  @Roles(ADMIN)
  @Get(':id')
  @ApiOkResponse({ type: ReviewDto })
  findOne$(@Param('id') id: string): Observable<Review> {
    return this.adminReviewsService.findOne$(id);
  }

  @Roles(ADMIN)
  @Post(':id/delete')
  @HttpCode(204)
  deleteProcess$(@Param('id') id: string): Observable<void> {
    return this.adminReviewsService.deleteProcess$(id);
  }
}
