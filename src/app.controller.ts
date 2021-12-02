import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Resource, Roles, Unprotected } from 'nest-keycloak-connect';

@Controller()
@Resource('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Unprotected()
  getPublic(): string {
    return `${this.appService.getHello()} from public`;
  }

  @Get('/user')
  @Roles({ roles: ['user'] })
  getUser(): string {
    return `${this.appService.getHello()} from user`;
  }

  @Get('/admin')
  @Roles({ roles: ['admin'] })
  getAdmin(): string {
    return `${this.appService.getHello()} from admin`;
  }

  @Get('/all')
  getAll(): string {
    return `${this.appService.getHello()} from all`;
  }
}
