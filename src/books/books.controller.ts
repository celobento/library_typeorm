import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { UpdateBookDto } from './dto/update-book.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('books')
export class BooksController {

    constructor(private readonly  bookService: BooksService
    ){}

    @Get()
    async getAllBooks() {
        return this.bookService.findAll()
    }

    @Post()
    async createBook(@Body() body: CreateBookDto): Promise<Book> {

        const user = {
            "id": "c0e181ad-5845-4378-a619-2343d1cca52f",
            "email": "bento@gmail.com",
            "password": "123456"
        }

        return this.bookService.create(body, user)

    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Book> {
        return this.bookService.findOne(id)
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() body:UpdateBookDto): Promise<Book> {
        return this.bookService.update(id, body)
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string){
        return this.bookService.delete(id)
    }

}
