import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql', // or 'mysql', 'sqlite', etc.
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'qbh',
  entities: [User],
  synchronize: true,
};

export default config;
