import { Controller, Get, Post } from "@nestjs/common";

@Controller('products')
export class ProductController{

    @Get('product')
    product():string{
    return 'Productos en descuento';
    }
    
    @Post('product')
    producto():string{
    return 'Producto ingresado';
    }
}