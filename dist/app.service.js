"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_data_1 = require("./app.data");
const app_helper_1 = require("./app.helper");
const uuid_1 = require("uuid");
const IS_MODIFY = true;
let AppService = class AppService {
    getBooks(page = 1, size = 10, search = '') {
        const books = app_data_1.default.books;
        let filtered = books;
        if (search) {
            filtered = (0, app_helper_1.getFiltered)(books, search, ['title']);
        }
        const paginated = (0, app_helper_1.getByPagination)(filtered, page, size);
        const results = paginated.map((book) => {
            const author = app_data_1.default.authors.find((a) => a.id === book.author_id);
            const tags = book.tag_ids.map((tag_id) => app_data_1.default.tags.find((t) => t.id === tag_id));
            return { ...book, author, tags };
        });
        return results;
    }
    getBookByID(id) {
        const book = app_data_1.default.books.find((book) => book.id === id);
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        const author = app_data_1.default.authors.find((a) => a.id === book.author_id);
        const tags = book.tag_ids.map((tag_id) => app_data_1.default.tags.find((t) => t.id === tag_id));
        return { ...book, author, tags };
    }
    createBook(book) {
        const id = (0, uuid_1.v4)();
        book.id = id;
        const { author_id, tag_ids } = book;
        const author = app_data_1.default.authors.find((a) => a.id === author_id);
        if (!author) {
            throw new common_1.NotFoundException(`Author with ID ${author_id} not found`);
        }
        const tags = tag_ids.map((tagId) => {
            const tag = app_data_1.default.tags.find((t) => t.id === tagId);
            if (!tag) {
                throw new common_1.NotFoundException(`Tag with ID ${tagId} not found`);
            }
            return tag;
        });
        if (IS_MODIFY) {
            app_data_1.default.books.push(book);
        }
        return this.getBookByID(book.id);
    }
    updateBook(id, book) {
        const index = app_data_1.default.books.findIndex((book) => book.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        book.id = id;
        const { author_id, tag_ids } = book;
        const author = app_data_1.default.authors.find((a) => a.id === author_id);
        if (!author) {
            throw new common_1.NotFoundException(`Author with ID ${author_id} not found`);
        }
        const tags = tag_ids.map((tagId) => {
            const tag = app_data_1.default.tags.find((t) => t.id === tagId);
            if (!tag) {
                throw new common_1.NotFoundException(`Tag with ID ${tagId} not found`);
            }
            return tag;
        });
        if (IS_MODIFY) {
            app_data_1.default.books[index] = book;
        }
        return this.getBookByID(id);
    }
    deleteBookByID(id) {
        const index = app_data_1.default.books.findIndex((book) => book.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        const book = this.getBookByID(id);
        if (IS_MODIFY) {
            app_data_1.default.books.splice(index, 1);
        }
        return book;
    }
    getAuthors(page = 1, size = 10, search = '') {
        const author = app_data_1.default.authors;
        let filtered = author;
        if (search) {
            filtered = (0, app_helper_1.getFiltered)(author, search, ['name']);
        }
        const paginated = (0, app_helper_1.getByPagination)(filtered, page, size);
        return paginated;
    }
    getAuthorByID(id) {
        const author = app_data_1.default.authors.find((a) => a.id === id);
        if (!author) {
            throw new common_1.NotFoundException(`Author with ID ${id} not found`);
        }
        return author;
    }
    createAuthor(author) {
        const id = (0, uuid_1.v4)();
        author.id = id;
        if (IS_MODIFY) {
            app_data_1.default.authors.push(author);
        }
        return this.getAuthorByID(id);
    }
    updateAuthor(id, author) {
        const index = app_data_1.default.authors.findIndex((author) => author.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Author with ID ${id} not found`);
        }
        author.id = id;
        if (IS_MODIFY) {
            app_data_1.default.authors[index] = author;
        }
        return this.getAuthorByID(id);
    }
    deleteAuthorByID(id) {
        const index = app_data_1.default.authors.findIndex((author) => author.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Author with ID ${id} not found`);
        }
        const author = this.getAuthorByID(id);
        if (IS_MODIFY) {
            app_data_1.default.authors.splice(index, 1);
        }
        return author;
    }
    getTags(page = 1, size = 10, search = '') {
        const tags = app_data_1.default.tags;
        let filtered = tags;
        if (search) {
            filtered = (0, app_helper_1.getFiltered)(tags, search, ['name']);
        }
        const paginated = (0, app_helper_1.getByPagination)(filtered, page, size);
        return paginated;
    }
    getTagByID(id) {
        const tag = app_data_1.default.tags.find((t) => t.id === id);
        if (!tag) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        return tag;
    }
    createTag(tag) {
        const id = (0, uuid_1.v4)();
        tag.id = id;
        if (IS_MODIFY) {
            app_data_1.default.tags.push(tag);
        }
        return this.getTagByID(id);
    }
    updateTag(id, tag) {
        const index = app_data_1.default.tags.findIndex((tag) => tag.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        tag.id = id;
        if (IS_MODIFY) {
            app_data_1.default.authors[index] = tag;
        }
        return this.getTagByID(id);
    }
    deleteTagByID(id) {
        const index = app_data_1.default.tags.findIndex((tag) => tag.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        const tag = this.getTagByID(id);
        if (IS_MODIFY) {
            app_data_1.default.tags.splice(index, 1);
        }
        return tag;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map