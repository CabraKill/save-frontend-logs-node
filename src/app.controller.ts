import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostLogsRequestDto } from './models/postLogsRequest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postLog(@Body() request: PostLogsRequestDto) {
    this.appService.postLog(request);
  }
}
