import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService){}

    @Get()
    async getAllBooks() {
        return this.bookService.findAll()
    }

    @Post()
    createBook(@Body() body: CreateBookDto) {
        return this.bookService.create(body)
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
