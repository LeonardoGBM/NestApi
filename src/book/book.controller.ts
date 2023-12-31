import { BookService } from './book.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateBookDto } from "./dto/create-book.dto";
import { ChangStateBookDto } from "./dto/chang-state-book.dto";
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@ApiTags('books')
@Controller('books')
export class BookController{
      constructor(private readonly bookService:BookService){
      }
    @ApiOperation({description:'Buscar Libros', summary:'Find Books'})
    @Get()
    async find(@Query() query:any ){
        const response = await this.bookService.find();
        return response
    }

    @ApiOperation({description:'Buscar un Libro', summary:'Find One Book'})
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number){
        const response = await this.bookService.findOne(id);

        return response;
    }

    @ApiOperation({description:'Agregar Libro', summary:'Add Book'})
    @Post()
    async create(@Body() payload: CreateBookDto){
        const response = await this.bookService.create(payload);
        return response;
    }

    @ApiOperation({description:'Editar Libros', summary:'Update Books'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateBookDto){
        const response = await this.bookService.update(id, payload);
        return {id, body:payload}
    }

    @ApiOperation({description:'Buscar Libros', summary:'Change Books Static'})
    @Patch(':id')
    patch(@Param('id') id:number){
        return id
    }

    @ApiOperation({description:'Buscar Libros', summary:'Delete Books'})
    @Delete(':id')
    async delete(@Param('id') id:number){
        const response = await this.bookService.delete(id);

        return response;
    }
}