import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name', example: 'Laptop' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Product description',
    example: 'A high-performance laptop',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Price of the product', example: 1200.99 })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({
    description: 'Feedback rating of the product',
    example: 4.5,
  })
  @IsNumber()
  feedback: number;

  @ApiProperty({
    description: 'List of image URLs for the product',
    type: [String],
    example: ['https://example.com/image1.jpg'],
  })
  @IsArray()
  @IsString({ each: true })
  imageUrls: string[];
}

export class UpdateProductDto {
  @ApiPropertyOptional({ description: 'Product name', example: 'Laptop' })
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Product description',
    example: 'A high-performance laptop',
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Price of the product',
    example: 1200.99,
  })
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    description: 'Feedback rating of the product',
    example: 4.5,
  })
  @IsNumber()
  feedback?: number;

  @ApiPropertyOptional({
    description: 'List of image URLs for the product',
    type: [String],
    example: ['https://example.com/image1.jpg'],
  })
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];
}
