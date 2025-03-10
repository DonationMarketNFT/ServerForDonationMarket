import {
  ValidationPipe,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(
  '45ebfb6f3ccf08d5f06d',
  '5dbc48b2f862e552f77df7c732acd0122bdc69541e59b2b459352b626b3dc924',
);

const fs = require('fs');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '../public')));
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
    }),
  );
  await app.listen(3000);
}

pinata
  .testAuthentication()
  .then((result) => {
    //handle successful authentication here
    console.log('authentication sucess');
    console.log(result);
  })
  .catch((err) => {
    //handle error here
    console.log('authentication failed');
    console.log(err);
  });
/*
pinata
  .pinFileToIPFS(readableStreamForFile)
  .then((result) => {
    //handle results here
    console.log(result);
  })
  .catch((err) => {
    //handle error here
    console.log(err);
  });
  */

bootstrap();
