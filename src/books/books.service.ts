import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

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

    async create(book: Book, user): Promise<Book> {

        //const user = await this.repoUser.findOne({where: {id: 'c0e181ad-5845-4378-a619-2343d1cca52f'}})

        const bookObj = this.repo.create({
            name: book.name,
            price: book.price,
            author: book.author,
            user: user
        })
        return this.repo.save(bookObj)
    }

    async update (id: string, body: Book): Promise<Book> {
        const book = await this.repo.findOne({where: {id: id }})
        if(!book) {
            throw new NotFoundException('book not found')
        }
        Object.assign(book, body)
        return this.repo.save(book)
    }

    async delete(id: string) {
        const book =  await this.repo.findOne({where: {id: id}})
        if(!book) {
            throw new NotFoundException('book not found')
        }
        return this.repo.remove(book)
    }

}
