import { Injectable } from '@nestjs/common';
import { PostLogsRequestDto } from './models/postLogsRequest.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postLog(body: PostLogsRequestDto): void {
    console.log(body);
    this.saveLogsToTxt(body);
  }

  private saveLogsToTxt(body: PostLogsRequestDto) {
    const fs = require('fs');
    fs.writeFile('logs.txt', body.log.join('\n'), (err: any) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log('Logs saved');
    });
  }
}
