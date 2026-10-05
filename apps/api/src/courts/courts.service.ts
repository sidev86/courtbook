import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string) {
    const court = await this.prisma.court.findUnique({ where: { id } });
    if (!court) {
      throw new NotFoundException(`Court ${id} not found`);
    }
    return court;
  }
}
