import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { BookDto } from "./book.dto";

export class CreateBookDto extends BookDto{

}