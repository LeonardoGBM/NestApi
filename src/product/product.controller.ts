import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Products')
@Controller('products')
export class ProductController{

    
    @ApiOperation({description: 'Editar producto', summary: 'Put Product' })
    @Get('product')
    actualizarproduct():string{
    return 'productos';
    }

    @ApiOperation({description: 'Agregar producto', summary: 'Post Product' })
    @Post('product')
    agregarproduct():string{
    return 'Producto ingresado';
    }
}