import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourtsModule } from './courts/courts.module';

@Module({
  imports: [PrismaModule, CourtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
