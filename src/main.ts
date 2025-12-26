import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // habilitar CORS
  app.enableCors({
    origin: '*', // permite todos los dominios (puedes reemplazarlo por un array de URLs)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // prefijo global
  app.setGlobalPrefix('api');

  // configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Productos y Categorías')
    .setDescription('CRUD de productos y categorías')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // documentación en /api-docs

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
