import { DynamicModule, Module } from "@nestjs/common";
import { RmqService } from "./rmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

@Module({
    providers: [RmqService],
    exports: [RmqService]
})

export class RmqModule {

    static register({ name } : { name : string }) : DynamicModule { 
        return { 
            module: RmqModule,
            imports : [
                ClientsModule.registerAsync([
                    {
                        name , 
                        useFactory: (configService: ConfigService) => ({
                            transport: Transport.RMQ, 
                            options : { 
                                queue : configService.get<string>(`RMQ_${name}_QUEUE`),
                                urls: [configService.get<string>("RMQ_URI")]
                            }
                        }),
                        inject: [ConfigService]
                    }
                ])
            ], 
            exports: [ClientsModule]
        }
    } 
}