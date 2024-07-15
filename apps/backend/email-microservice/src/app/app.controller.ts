import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get-data' })
  getData() {
    return this.appService.getData();
  }

  @EventPattern('log-data')
  async logData(data: string) {
    this.appService.logData(data);
  }
}
