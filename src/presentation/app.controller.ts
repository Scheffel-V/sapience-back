import { Controller, Get } from '@nestjs/common';
import path from 'path';
import { AppService } from '../application/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHello(): string {
    return this.appService.getHello();
  }
}
