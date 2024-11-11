import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateProductDto) {
    await this.prismaService.produto.create({
      data: {
        ...data,
      },
    });
  }
}
