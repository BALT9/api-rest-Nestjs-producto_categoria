import { IsString, IsNumber, IsOptional, Min, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ description: 'Nombre del producto', example: 'Laptop' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'Precio del producto', example: 1000 })
    @IsNumber()
    @Min(0)
    price: number;

    @ApiProperty({ description: 'Descripción del producto', example: 'Laptop de última generación', required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ description: 'ID de la categoría a la que pertenece el producto', example: 1 })
    @IsInt()
    categoryId: number;
}
