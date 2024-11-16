import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { APIResponse, Author, Book, Tag } from './app.entity';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateBookDTO } from './dto/create-book.dto';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { CreateTagDTO } from './dto/create-tag.dto';
import { UpdateBookDTO } from './dto/update-book.dto';
import { UpdateAuthorDTO } from './dto/update-author.dto';
import { UpdateTagDTO } from './dto/update-tag.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Default 0',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Default 10',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
  })
  getBooks(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('search') search: string,
  ): APIResponse<Book[]> {
    return {
      data: this.appService.getBooks(page, size, search),
      statusCode: HttpStatus.OK,
    };
  }

  @Get('books/:id')
  getBookById(@Param('id') id: string): APIResponse<Book> {
    return { data: this.appService.getBookByID(id), statusCode: HttpStatus.OK };
  }

  @Post('books')
  @ApiBody({ type: CreateBookDTO })
  postBook(@Body() reqBody: CreateBookDTO): APIResponse<Book> {
    return {
      data: this.appService.createBook(CreateBookDTO.generate(reqBody)),
      statusCode: HttpStatus.CREATED,
    };
  }

  @Put('books/:id')
  @ApiBody({ type: UpdateBookDTO })
  updateBook(
    @Param('id') id: string,
    @Body() reqBody: UpdateBookDTO,
  ): APIResponse<Book> {
    return {
      data: this.appService.updateBook(id, UpdateBookDTO.generate(reqBody)),
      statusCode: HttpStatus.OK,
    };
  }

  @Delete('books/:id')
  deleteBook(@Param('id') id: string): APIResponse<Book> {
    return {
      data: this.appService.deleteBookByID(id),
      statusCode: HttpStatus.OK,
    };
  }

  @Get('authors')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Default 0',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Default 10',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
  })
  getAuthors(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('search') search: string,
  ): APIResponse<Author[]> {
    return {
      data: this.appService.getAuthors(page, size, search),
      statusCode: HttpStatus.OK,
    };
  }

  @Get('authors/:id')
  getAuthorById(@Param('id') id: string): APIResponse<Author> {
    return {
      data: this.appService.getAuthorByID(id),
      statusCode: HttpStatus.OK,
    };
  }

  @Post('authors')
  @ApiBody({ type: CreateAuthorDTO })
  postAuthor(@Body() reqBody: CreateAuthorDTO): APIResponse<Author> {
    return {
      data: this.appService.createAuthor(CreateAuthorDTO.generate(reqBody)),
      statusCode: HttpStatus.CREATED,
    };
  }

  @Put('authors/:id')
  @ApiBody({ type: UpdateAuthorDTO })
  updateAuthor(
    @Param('id') id: string,
    @Body() reqBody: UpdateAuthorDTO,
  ): APIResponse<Author> {
    return {
      data: this.appService.updateAuthor(id, UpdateAuthorDTO.generate(reqBody)),
      statusCode: HttpStatus.OK,
    };
  }

  @Delete('authors/:id')
  deleteAuthor(@Param('id') id: string): APIResponse<Author> {
    return {
      data: this.appService.deleteAuthorByID(id),
      statusCode: HttpStatus.OK,
    };
  }

  @Get('tags')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Default 0',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Default 10',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
  })
  getTags(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('search') search: string,
  ): APIResponse<Tag[]> {
    return {
      data: this.appService.getTags(page, size, search),
      statusCode: HttpStatus.OK,
    };
  }

  @Get('tags/:id')
  getTagByID(@Param('id') id: string): APIResponse<Tag> {
    return { data: this.appService.getTagByID(id), statusCode: HttpStatus.OK };
  }

  @Post('tags')
  @ApiBody({ type: CreateTagDTO })
  postTag(@Body() reqBody: CreateTagDTO): APIResponse<Tag> {
    return {
      data: this.appService.createTag(CreateTagDTO.generate(reqBody)),
      statusCode: HttpStatus.CREATED,
    };
  }

  @Put('tags/:id')
  @ApiBody({ type: UpdateTagDTO })
  updateTag(
    @Param('id') id: string,
    @Body() reqBody: UpdateTagDTO,
  ): APIResponse<Tag> {
    return {
      data: this.appService.updateTag(id, UpdateTagDTO.generate(reqBody)),
      statusCode: HttpStatus.OK,
    };
  }

  @Delete('tags/:id')
  deleteTag(@Param('id') id: string): APIResponse<Tag> {
    return {
      data: this.appService.deleteTagByID(id),
      statusCode: HttpStatus.OK,
    };
  }
}
