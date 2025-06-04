import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World!',
      id: 1, 
      timestamp: new Date().toISOString(),
      status: 'success',
    };
  }
}
