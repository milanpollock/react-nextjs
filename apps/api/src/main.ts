import { NestFactory } from '@nestjs/core';
import {
  InternalServerErrorException,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {
  AUTH0_AUDIENCE,
  AUTH0_ISSUER,
} from '@dark-rush-photography/shared-server/types';
import { LogzioLogger } from '@dark-rush-photography/shared-server/util';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const configService = app.get(ConfigService);
  const logzioToken = configService.get('logzioToken');
  if (!logzioToken) {
    throw new InternalServerErrorException('Logzio token is undefined');
  }
  app.useLogger(new LogzioLogger(logzioToken));

  if (!environment.production) {
    const config = new DocumentBuilder()
      .addBearerAuth({
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: `${AUTH0_ISSUER}authorize?audience=${AUTH0_AUDIENCE}`,
            scopes: {},
          },
        },
      })
      .setTitle('Dark Rush Photography API')
      .setDescription('API for Dark Rush Photography')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      operationIdFactory: (_controllerKey: string, methodKey: string) =>
        methodKey,
    });
    SwaggerModule.setup('', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'Dark Rush Photography API',
    });
  }

  const port = process.env.PORT || 1111;
  await app.listen(port, () => {
    Logger.log(`API listening on port ${port}`, bootstrap.name);
  });
}

bootstrap();
