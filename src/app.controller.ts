import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { APIResponse, Author, Book, Tag } from './app.entity';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

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
    console.log(page, size, search);
    return {
      data: this.appService.getBooks(page, size, search),
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
  ): Author[] {
    return this.appService.getAuthors(page, size, search);
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
  ): Tag[] {
    return this.appService.getTags(page, size, search);
  }
}
