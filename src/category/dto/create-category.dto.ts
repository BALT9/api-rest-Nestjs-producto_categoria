import { IsOptional, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({ description: 'Nombre de la categoría', example: 'Electrónica' })
    @IsString()
    @Length(2, 50)
    name: string;

    @ApiProperty({ description: 'Descripción de la categoría', example: 'Productos electrónicos y gadgets', required: false })
    @IsOptional()
    @IsString()
    description?: string;
}
