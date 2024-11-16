import { Author, Book, Tag } from './app.entity';
export declare class AppService {
    getBooks(page?: number, size?: number, search?: string): Book[];
    getBookByID(id: string): Book | undefined;
    createBook(book: Book): Book;
    updateBook(id: string, book: Book): Book;
    deleteBookByID(id: string): Book;
    getAuthors(page?: number, size?: number, search?: string): Author[];
    getAuthorByID(id: string): Author | undefined;
    createAuthor(author: Author): Author;
    updateAuthor(id: string, author: Author): Author;
    deleteAuthorByID(id: string): Author;
    getTags(page?: number, size?: number, search?: string): Tag[];
    getTagByID(id: string): Tag | undefined;
    createTag(tag: Tag): Tag;
    updateTag(id: string, tag: Tag): Tag;
    deleteTagByID(id: string): Author;
}
