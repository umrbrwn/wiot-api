import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config.js');

const configurations = config()();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('WIOT Vehicle Operations API')
    .setDescription('WIOT API to schedule operational hours and routes for it\'s vehicles')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configurations.httpPort, '0.0.0.0');
}
bootstrap();
