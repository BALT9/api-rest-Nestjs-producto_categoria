// src/product/dto/create-product.dto.ts
import { IsString, IsNumber, IsOptional, Min, IsInt } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsInt()
    categoryId: number; // ID de la categoría a la que pertenece el producto
}
