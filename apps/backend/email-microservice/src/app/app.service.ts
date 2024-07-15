import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello from the message pattern!' };
  }

  logData(data: string) {
    console.log(data);
  }
}
