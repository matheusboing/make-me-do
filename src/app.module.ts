import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from '@modules/todo/todo.module';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

/**
 * Módulo principal
 * 
 * Módulo responsável por importar e definir os submódulos e entidades
 * de toda a aplicação
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TodoModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
