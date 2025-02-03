import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { RmqOptions, Transport } from "@nestjs/microservices";

@Injectable()

export class RmqService {

    constructor(private readonly configService: ConfigService) {}

    getOptions(queue: string, noAck : boolean = false) : RmqOptions {

        return {
            transport : Transport.RMQ,
            options: {
                urls: [ this.configService.get<string>("RQM_URI") ], 
                queue : this.configService.get<string>(`RMQ_${queue}_QUEUE`),
                noAck, 
                persistent: true
            }
        }
    }
}