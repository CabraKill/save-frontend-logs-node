import { Injectable } from '@nestjs/common';
import { PostLogsRequestDto } from './models/postLogsRequest.dto';

@Injectable()
export class AppService {
  getHello(): string {
    // return txt content
    const fs = require('fs');
    const filePath = 'logs.txt';
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    } else {
      return 'No logs found.';
    }
  }

  postLog(body: PostLogsRequestDto): void {
    console.log(body);
    this.saveLogsToTxt(body);
  }

  private saveLogsToTxt(body: PostLogsRequestDto) {
    const fs = require('fs');
    fs.appendFile('logs.txt', body.log.join('\n') + '\n', (err: any) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log('Logs saved');
    });
  }

  deleteLogs() {
    const fs = require('fs');
    fs.unlink('logs.txt', (err: any) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log('Logs deleted');
    });
  }
}
