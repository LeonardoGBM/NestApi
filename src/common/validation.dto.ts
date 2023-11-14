
import { ValidationOptions } from "class-validator";



export function isNumberValidationDto(
    validationDto?: ValidationOptions,
){
    return{
        message:'La propiedad $property debe ser un numero '
    };
}
