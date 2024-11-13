import { Author, Book, Tag } from './app.entity';
interface Data {
    authors: Author[];
    tags: Tag[];
    books: Book[];
}
declare const data: Data;
export default data;
