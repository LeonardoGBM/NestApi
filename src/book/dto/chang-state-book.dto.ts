import { PickType } from "@nestjs/swagger";
import { BookDto } from "./book.dto";
import { UpdateBookDto } from "./update-book.dto";


//export class ChangStateBookDto extends PickType(BookDto, 'name','email','lastname','telephone',]){}
export class ChangStateBookDto extends BookDto{}