import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('')
  async getAll() { 
    return await this.ordersService.getAll()
  }

  @Post('/create')
  async create (@Body() order: CreateOrderDTO) { 
    return await this.ordersService.create(order); 
  }
}
