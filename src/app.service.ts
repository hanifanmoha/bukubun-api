import { Injectable } from '@nestjs/common';
import { Author, Book, Tag } from './app.entity';
import data from './app.data';
import { getByPagination, getFiltered } from './app.helper';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

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
}
