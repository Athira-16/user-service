import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { UserModule } from './user/user.module';
import { Repository } from 'typeorm';
import { PdfModule } from './pdf/pdf/pdf.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    Repository,
    PdfModule
  ],
})
export class AppModule {}
