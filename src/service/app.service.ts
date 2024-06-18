import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStart(): string {
    return 'this is me Smeoury Sognvat';
  }

  async createMe(requestBody: {
    name: string;
    gender: string;
    age: number;
  }): Promise<{ data: { name: string; gender: string; age: number } }> {
    try {
      const objectMe = { ...requestBody };

      return { data: objectMe };
    } catch (error: unknown) {
      throw error;
    }
  }
}
