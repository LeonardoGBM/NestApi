import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [UserModule,
  ProductModule,
  BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
