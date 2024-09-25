import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    
    constructor(
        @InjectRepository(Book)
        private repo: Repository<Book>
    ){}

    async findAll(): Promise<Book[]> {
        return await this.repo.find()
    }

    async findOne(id: string): Promise<Book> {
        const book =  await this.repo.findOne({where: {id: id}})
        if(!book) {
            throw new NotFoundException('book not found')
        }
        return book
    }

    create(book: Book): Promise<Book> {
        const bookObj = this.repo.create({
            name: book.name,
            price: book.price,
            author: book.author
        })
        return this.repo.save(bookObj)
    }

}
