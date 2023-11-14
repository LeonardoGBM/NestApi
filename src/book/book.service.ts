import { Injectable, NotFoundException } from "@nestjs/common";
import { BookEntity } from "./book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookDto } from "./dto/book.dto";



@Injectable()
export class BookService{
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
    ){}
    async find(){
        const books= await this.bookRepository.find();
        return books
    }

    async findOne(id:number){
        const book= await this.bookRepository.findOne({where:{id:id}});
        if(!book){
            throw new NotFoundException({message:'Estudiante no encontrado', error:'No se ha encontrado'});
        }
        return book
    }

    create(payload:BookDto){
        const newBook= this.bookRepository.create();
        newBook.bloodType = payload.bloodType;
        newBook.email = payload.email;
        newBook.name = payload.name;
        newBook.telephone = payload.telephone;
        newBook.state = payload.state;
        newBook.lastname = payload.lastname;
        newBook.age = payload.age;




        const response = this.bookRepository.save(newBook);

        return response
    }


    async update(id: number, payload: UpdateBookDto){
        const Book= await this.findOne(id);
        Book.bloodType = payload.bloodType;
        Book.email = payload.email;
        Book.name = payload.name;
        Book.telephone = payload.telephone;
        Book.state = payload.state;
        Book.lastname = payload.lastname;
        Book.age = payload.age;
        if(!Book){
            throw new NotFoundException({message:'Estudiante no encontrado', error:'No encontrado'});
        }
        const response = await this.bookRepository.update(id, Book);
        return response 
    }



    async delete(id: number){
        //const Book= await this.findOne(id)
        const Book= await this.findOne(id);
    if(!Book){
        throw new NotFoundException({message:'Estudiante no encontrado', error:'No encontrado'});
    }
        const response = await this.bookRepository.delete(id);
        
        return response
    }
}