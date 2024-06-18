import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/get-start')
  getStart(): string {
    return this.appService.getStart();
  }
  @Post('/me')
  async createMe(
    @Body() requestBody: { name: string; gender: string; age: number },
  ): Promise<{
    message: string;
    data: { name: string; gender: string; age: number };
  }> {
    try {
      const appService = this.appService;
      const newMe = await appService.createMe(requestBody);

      return { message: 'Success Create me!', data: newMe.data };
    } catch (error: unknown) {
      throw error;
    }
  }
}
