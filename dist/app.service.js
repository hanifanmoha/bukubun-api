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
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
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
        const author = app_data_1.default.authors.find((a) => a.id === book.author_id);
        const tags = book.tag_ids.map((tag_id) => app_data_1.default.tags.find((t) => t.id === tag_id));
        return { ...book, author, tags };
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
        return tag;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map