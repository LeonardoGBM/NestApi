import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('books')
@Controller('books')
export class BookController{
  
    @ApiOperation({description:'Buscar Libros', summary:'Find Books'})
    @Get()
    find(){
        return ['Edgar Alan Poe', 'Harry Potter','Bleach','Don quijote de la Mancha']
    }

    @ApiOperation({description:'Buscar un Libro', summary:'Find One Book'})
    @Get(':id')
    findOne(@Param('id') id:number){
        return id;
    }

    @ApiOperation({description:'Agregar Libro', summary:'Add Book'})
    @Post()
    create(@Body() payload:any){
        return payload;
    }

    @ApiOperation({description:'Editar Libros', summary:'Update Books'})
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
        return {id, body:payload}
    }

    @ApiOperation({description:'Buscar Libros', summary:'Change Books Static'})
    @Patch(':id')
    patch(@Param('id') id:number){
        return id
    }

    @ApiOperation({description:'Buscar Libros', summary:'Delete Books'})
    @Delete(':id')
    delete(@Param('id') id:number){
        return 'Libro Eliminado ${id}';
    }
}