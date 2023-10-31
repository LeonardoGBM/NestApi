import { Controller, Get } from "@nestjs/common";

@Controller('service')

export class ServiceController{
    @Get('services')
    service(){
        return 'Servicio';
    }
}
