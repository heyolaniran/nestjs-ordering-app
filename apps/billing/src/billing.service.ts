import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger  = new Logger('BILLING')


  async bill(order : any ) {
    console.log(order) ;
   return this.logger.log(`Billing service is called with order ${order}`)
  }
}
