import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nestjs_mysql_crud_app',
    autoLoadEntities: true,
    synchronize: true,
    entities: [join(__dirname, '/**/*.entity.{js,ts}')],
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
