import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const addSSl =
  process.env.NODE_ENV === 'production'
    ? { ssl: { rejectUnauthorized: false } }
    : '';

const ORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  autoLoadEntities: true,
  url: String(process.env.DATABASE_URL),
  logging: process.env.NODE_ENV === 'development',
  synchronize: process.env.NODE_ENV === 'development',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/*.migration{.ts,.js}'],
  subscribers: ['dist/**/*.subscriber{.ts,.js}'],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  ...addSSl,
};

module.exports = ORMConfig;
