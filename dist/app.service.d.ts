import { Author, Book, Tag } from './app.entity';
export declare class AppService {
    getHello(): string;
    getBooks(page?: number, size?: number, search?: string): Book[];
    getBookByID(id: string): Book | undefined;
    getAuthors(page?: number, size?: number, search?: string): Author[];
    getAuthorByID(id: string): Author | undefined;
    getTags(page?: number, size?: number, search?: string): Tag[];
    getTagByID(id: string): Tag | undefined;
}
