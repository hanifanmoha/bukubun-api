import { Injectable, NotFoundException } from '@nestjs/common';
import { Author, Book, Tag } from './app.entity';
import data from './app.data';
import { getByPagination, getFiltered } from './app.helper';
import { v4 as uuidv4 } from 'uuid';

const IS_MODIFY = true;

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
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const author = data.authors.find((a) => a.id === book.author_id);
    const tags = book.tag_ids.map((tag_id) =>
      data.tags.find((t) => t.id === tag_id),
    );
    return { ...book, author, tags };
  }

  createBook(book: Book): Book {
    const id = uuidv4();
    book.id = id;

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

    if (IS_MODIFY) {
      data.books.push(book);
    }

    return this.getBookByID(book.id);
  }

  updateBook(id: string, book: Book): Book {
    const index = data.books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    book.id = id;

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

    if (IS_MODIFY) {
      data.books[index] = book;
    }

    return this.getBookByID(id);
  }

  deleteBookByID(id: string): Book {
    const index = data.books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const book = this.getBookByID(id);
    if (IS_MODIFY) {
      data.books.splice(index, 1);
    }
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
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  createAuthor(author: Author): Author {
    const id = uuidv4();
    author.id = id;

    if (IS_MODIFY) {
      data.authors.push(author);
    }

    return this.getAuthorByID(id);
  }

  updateAuthor(id: string, author: Author): Author {
    const index = data.authors.findIndex((author) => author.id === id);

    if (index === -1) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }

    author.id = id;

    if (IS_MODIFY) {
      data.authors[index] = author;
    }

    return this.getAuthorByID(id);
  }

  deleteAuthorByID(id: string): Author {
    const index = data.authors.findIndex((author) => author.id === id);

    if (index === -1) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }

    const author = this.getAuthorByID(id);
    if (IS_MODIFY) {
      data.authors.splice(index, 1);
    }
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
    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
    return tag;
  }

  createTag(tag: Tag): Tag {
    const id = uuidv4();
    tag.id = id;

    if (IS_MODIFY) {
      data.tags.push(tag);
    }

    return this.getTagByID(id);
  }

  updateTag(id: string, tag: Tag): Tag {
    const index = data.tags.findIndex((tag) => tag.id === id);

    if (index === -1) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    tag.id = id;

    if (IS_MODIFY) {
      data.authors[index] = tag;
    }

    return this.getTagByID(id);
  }

  deleteTagByID(id: string): Author {
    const index = data.tags.findIndex((tag) => tag.id === id);

    if (index === -1) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    const tag = this.getTagByID(id);

    if (IS_MODIFY) {
      data.tags.splice(index, 1);
    }
    return tag;
  }
}
