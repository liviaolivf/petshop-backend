import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from './product.dto';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  @ApiOperation({
    summary: 'Create a new product',
    description: 'Creates a new product in the system.',
  })
  @ApiBody({ type: CreateProductDto, description: 'Product data' })
  @ApiAcceptedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createProductDto: CreateProductDto) {
    return {
      message: 'This action adds a new product',
      product: this.productService.create(createProductDto),
    };
  }
}
