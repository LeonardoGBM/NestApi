import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController{

    @ApiOperation({description: 'Descripcion del usuario', summary: 'Find users' })
    @Get('')
    find(){
    return ['Leonardo','Joselita','Santiaga','Marcela'];
    }

    @ApiOperation({description: 'Descripcion del usuario', summary: 'Find users' })
    @Get(':id')
    findOne(@Param('id') id:number){
    return id;
    }

    @ApiOperation({description: 'Agregar usuario', summary: 'Add User' })
    @Post('')
    create(@Body () payload: any){
    return payload;
    }

    
    @ApiOperation({description: 'Editar usuario', summary: 'Put Users' })
    @Put(':id')
    update(@Param('id') id:number, @Body() payload: any){
    return {id, body:payload};
    }

    @ApiOperation({description: 'Patch usuario', summary: 'Patch Users' })
    @Patch(':id')
    Patch(@Param('id') id:number, @Body() payload: any){
    return {id, body:payload};
    }

    @ApiOperation({description: 'Eliminar usuario', summary: ' Delete User' })
    @Delete(':id')
    delete(@Param('id')id:number){
    return 'Registro eliminado ${id}';
    }

}


