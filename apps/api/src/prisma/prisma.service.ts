import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient, prismaAdapter } from '@courseflow/database';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({ adapter: prismaAdapter });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Successfully connected to the PostgreSQL database!');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Database connection closed.');
  }
}
