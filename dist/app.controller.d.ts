import { AppService } from './app.service';
import { APIResponse, Author, Book, Tag } from './app.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBooks(page: number, size: number, search: string): APIResponse<Book[]>;
    getBookById(id: string): APIResponse<Book>;
    getAuthors(page: number, size: number, search: string): APIResponse<Author[]>;
    getAuthorById(id: string): APIResponse<Author>;
    getTags(page: number, size: number, search: string): APIResponse<Tag[]>;
    getTagByID(id: string): APIResponse<Tag>;
}
