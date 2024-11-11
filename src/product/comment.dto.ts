import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment description',
    example: 'Amazing product!',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Rating of the product', example: 5 })
  @IsInt()
  rating: number;

  @ApiProperty({
    description: 'ID of the user who created the comment',
    example: 1,
  })
  @IsInt()
  userId: number;

  @ApiProperty({
    description: 'ID of the product being commented on',
    example: 1,
  })
  @IsInt()
  produtoId: number;
}

export class UpdateCommentDto {
  @ApiPropertyOptional({
    description: 'Comment description',
    example: 'Updated comment text',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Rating of the product', example: 4 })
  @IsOptional()
  @IsInt()
  rating?: number;
}
