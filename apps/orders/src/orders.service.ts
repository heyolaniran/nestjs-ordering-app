import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  
  constructor(private readonly ordersRepository : OrdersRepository) {}

  async getAll() { 
    return this.ordersRepository.find({});
  }

  async create(order : CreateOrderDTO) { 
    
    return this.ordersRepository.create(order);
  }
}
