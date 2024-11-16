import { AppService } from './app.service';
import { APIResponse, Author, Book, Tag } from './app.entity';
import { CreateBookDTO } from './dto/create-book.dto';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { CreateTagDTO } from './dto/create-tag.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBooks(page: number, size: number, search: string): APIResponse<Book[]>;
    getBookById(id: string): APIResponse<Book>;
    postBook(reqBody: CreateBookDTO): APIResponse<Book>;
    deleteBook(id: string): APIResponse<Book>;
    getAuthors(page: number, size: number, search: string): APIResponse<Author[]>;
    getAuthorById(id: string): APIResponse<Author>;
    postAuthor(reqBody: CreateAuthorDTO): {
        data: Author;
    };
    deleteAuthor(id: string): APIResponse<Author>;
    getTags(page: number, size: number, search: string): APIResponse<Tag[]>;
    getTagByID(id: string): APIResponse<Tag>;
    postTag(reqBody: CreateTagDTO): {
        data: Tag;
    };
    deleteTag(id: string): APIResponse<Tag>;
}
