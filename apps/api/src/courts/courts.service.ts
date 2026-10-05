import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourtDto } from './dto/create-court.dto';

@Injectable()
export class CourtsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.court.findMany();
  }

  create(dto: CreateCourtDto) {
    return this.prisma.court.create({
      data: {
        name: dto.name,
        type: dto.type,
      },
    });
  }
}
