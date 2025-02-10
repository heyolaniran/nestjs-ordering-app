import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService, private readonly rmqService : RmqService) {}

 

  @EventPattern('order_created')
  async handleEvent(@Payload() order : any , @Ctx() context :  RmqContext) { 
    console.log(order);
    await this.billingService.bill(order)
    await this.rmqService.ack(context)
  }
}
