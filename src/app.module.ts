import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ScheduleModule } from '@nestjs/schedule'
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CustomersModule,
  ],
})
export class AppModule {}
