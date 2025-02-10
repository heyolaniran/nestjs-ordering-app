import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDTO } from './dto/create-order.dto';
import { BILLING_SERVICE } from 'constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  
  constructor(private readonly ordersRepository : OrdersRepository,
    @Inject(BILLING_SERVICE) private readonly billingClient : ClientProxy
  ) {}

  async getAll() { 
    return this.ordersRepository.find({});
  }

  async create(order : CreateOrderDTO) { 
    
    const session = await this.ordersRepository.startTransaction();

    try { 
      const createdOrder = await this.ordersRepository.create(order ,  { session })
      await lastValueFrom(
        this.billingClient.emit('order_created', order)
      )

      session.commitTransaction()
      return createdOrder
    }catch (error) {
      throw new HttpException(error.message , HttpStatus.BAD_GATEWAY)
    }
  }
}
