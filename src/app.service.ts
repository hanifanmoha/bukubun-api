import { Injectable, NotFoundException } from '@nestjs/common';
import { Author, Book, Tag } from './app.entity';
import data from './app.data';
import { getByPagination, getFiltered } from './app.helper';
import { v4 as uuidv4 } from 'uuid';

const IS_REAL_INSERT = true;

@Injectable()
export class AppService {
  getBooks(page: number = 1, size: number = 10, search: string = ''): Book[] {
    const books = data.books;

    // Filter by search
    let filtered = books;
    if (search) {
      filtered = getFiltered(books, search, ['title']);
    }

    // Get paginated
    const paginated = getByPagination(filtered, page, size);

    // Add additional data
    const results = paginated.map((book) => {
      const author = data.authors.find((a) => a.id === book.author_id);
      const tags = book.tag_ids.map((tag_id) =>
        data.tags.find((t) => t.id === tag_id),
      );
      return { ...book, author, tags };
    });

    return results;
  }

  getBookByID(id: string): Book | undefined {
    const book = data.books.find((book) => book.id === id);
    const author = data.authors.find((a) => a.id === book.author_id);
    const tags = book.tag_ids.map((tag_id) =>
      data.tags.find((t) => t.id === tag_id),
    );
    return { ...book, author, tags };
  }

  createBook(book: Book): Book {
    book.id = uuidv4();

    const { author_id, tag_ids } = book;

    const author = data.authors.find((a) => a.id === author_id);
    if (!author) {
      throw new NotFoundException(`Author with ID ${author_id} not found`);
    }

    const tags = tag_ids.map((tagId) => {
      const tag = data.tags.find((t) => t.id === tagId);
      if (!tag) {
        throw new NotFoundException(`Tag with ID ${tagId} not found`);
      }
      return tag;
    });

    if (IS_REAL_INSERT) {
      data.books.push(book);
    }

    return book;
  }

  deleteBookByID(id: string): Book {
    const index = data.books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const book = data.books[index];
    data.books.splice(index, 1);
    console.log(data.books.length);
    return book;
  }

  getAuthors(
    page: number = 1,
    size: number = 10,
    search: string = '',
  ): Author[] {
    const author = data.authors;

    // Filter by search
    let filtered = author;
    if (search) {
      filtered = getFiltered(author, search, ['name']);
    }

    // Get paginated
    const paginated = getByPagination(filtered, page, size);

    return paginated;
  }

  getAuthorByID(id: string): Author | undefined {
    const author = data.authors.find((a) => a.id === id);
    return author;
  }

  createAuthor(author: Author): Author {
    author.id = uuidv4();

    if (IS_REAL_INSERT) {
      data.authors.push(author);
    }

    return author;
  }

  deleteAuthorByID(id: string): Author {
    const index = data.authors.findIndex((author) => author.id === id);

    if (index === -1) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }

    const author = data.authors[index];
    data.authors.splice(index, 1);
    return author;
  }

  getTags(page: number = 1, size: number = 10, search: string = ''): Tag[] {
    const tags = data.tags;

    // Filter by search
    let filtered = tags;
    if (search) {
      filtered = getFiltered(tags, search, ['name']);
    }

    // Get paginated
    const paginated = getByPagination(filtered, page, size);

    return paginated;
  }

  getTagByID(id: string): Tag | undefined {
    const tag = data.tags.find((t) => t.id === id);
    return tag;
  }

  createTag(tag: Tag): Tag {
    tag.id = uuidv4();

    if (IS_REAL_INSERT) {
      data.tags.push(tag);
    }

    return tag;
  }

  deleteTagByID(id: string): Author {
    const index = data.tags.findIndex((tag) => tag.id === id);

    if (index === -1) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    const tag = data.tags[index];
    data.tags.splice(index, 1);
    return tag;
  }
}
