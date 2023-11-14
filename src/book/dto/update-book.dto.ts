import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength, IsNumber, IsBoolean, IsString } from 'class-validator';
import { isNumberValidationDto } from "../../common/validation.dto";


export class UpdateBookDto{

    @MinLength(10, {message:'El nombre debe tener minimo 10 caracteres'})
    @MaxLength(20, {message:'El nombre debe tener maximo 20 caracteres'})
    @IsNotEmpty({message:'El nombre es obligatorio'})
    name:string;

    @MinLength(10, {message:'El lastname debe tener minimo 10 caracteres'})
    @MaxLength(20, {message:'El lastname debe tener maximo 20 caracteres'})
    @IsNotEmpty({message:'El lastname es obligatorio'})
    lastname:string;

    @IsEmail({},{message:'El email es obligatorio'})
    @MinLength(10,{message:'El email debe tener minimo 10 caracteres'})
    @MaxLength(20,{message:'El email debe tener maximo 20 caracteres'})
    email:string;

    @MinLength(8,{message:'El telefono debe tener minimo 8 caracteres'})
    @MaxLength(10,{message:'El telefono debe tener minimo 10 caracteres'})
    @IsOptional()
    telephone:string;


    @IsOptional()
    @IsNumber({},isNumberValidationDto())
    age:number;

    @IsBoolean()
    state:boolean;

    
    @IsString()
    bloodType: string;
}


