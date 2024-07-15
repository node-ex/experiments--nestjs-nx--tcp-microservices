import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    @Inject('EMAIL_MICROSERVICE') private client: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    // Delay application bootstrap until the client is connected
    // Not mandatory, just for demonstration purposes
    await this.client.connect();
  }

  getData() {
    const pattern = { cmd: 'get-data' };
    const payload = {};

    type ResponseType = { message: string };
    // Returns a hot Observable, must be subscribed to before it sends the message
    return this.client.send<ResponseType>(pattern, payload).pipe(timeout(5000));
  }

  logData() {
    const pattern = 'log-data';
    const payload = 'Hello from the event pattern!';

    // Returns a hot Observable, no need to subscribe to it - event is emitted immediately
    this.client.emit(pattern, payload);
  }
}
