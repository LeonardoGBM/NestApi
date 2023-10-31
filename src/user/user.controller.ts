import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UserController{

    @Get('hello-world')
    helloWorld():string{
    return 'Hello world';
    }
}