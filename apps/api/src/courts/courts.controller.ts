import { Controller, Get, Post, Body } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CreateCourtDto } from './dto/create-court.dto';

@Controller('courts')
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Get()
  findAll() {
    return this.courtsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateCourtDto) {
    return this.courtsService.create(dto);
  }
}
