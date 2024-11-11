import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service'; // Certifique-se de que o ProductService está sendo importado corretamente

@Module({
  controllers: [ProductController],
  providers: [ProductService], // Registre o ProductService aqui
})
export class ProductModule {}
