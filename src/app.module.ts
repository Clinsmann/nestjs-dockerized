import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

console.log({ ssss: process.env.DATABASE_URL });
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL as string,
      autoLoadEntities: true,
      synchronize: true,

      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/**/*.migration{.ts,.js}'],
      subscribers: ['dist/**/*.subscriber{.ts,.js}'],
      cli: {
        entitiesDir: 'src/app/models',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
