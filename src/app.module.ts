import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',        // Servidor MySQL
      port: 3306,               // Puerto por defecto
      username: 'root',         // Usuario MySQL
      password: '',  // Tu contraseña
      database: 'bdproductocat',
      entities: [Category, Product],
      synchronize: true,
      // logging: true,
    }),
    CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
