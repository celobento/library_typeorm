import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';

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

}
