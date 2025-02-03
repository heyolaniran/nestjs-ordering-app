import { IsNotEmpty, IsNumber, IsPhoneNumber, IsPositive, IsString } from "class-validator";

export class CreateOrderDTO { 

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsPositive()
    price :  number

    @IsString()
    @IsPhoneNumber()
    phoneNumber : string 

}