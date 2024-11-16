"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const create_book_dto_1 = require("./dto/create-book.dto");
const create_author_dto_1 = require("./dto/create-author.dto");
const create_tag_dto_1 = require("./dto/create-tag.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getBooks(page, size, search) {
        return {
            data: this.appService.getBooks(page, size, search),
        };
    }
    getBookById(id) {
        return { data: this.appService.getBookByID(id) };
    }
    postBook(reqBody) {
        return {
            data: this.appService.createBook(create_book_dto_1.CreateBookDTO.generate(reqBody)),
        };
    }
    deleteBook(id) {
        return {
            data: this.appService.deleteBookByID(id),
        };
    }
    getAuthors(page, size, search) {
        return { data: this.appService.getAuthors(page, size, search) };
    }
    getAuthorById(id) {
        return { data: this.appService.getAuthorByID(id) };
    }
    postAuthor(reqBody) {
        return {
            data: this.appService.createAuthor(create_author_dto_1.CreateAuthorDTO.generate(reqBody)),
        };
    }
    deleteAuthor(id) {
        return {
            data: this.appService.deleteAuthorByID(id),
        };
    }
    getTags(page, size, search) {
        return { data: this.appService.getTags(page, size, search) };
    }
    getTagByID(id) {
        return { data: this.appService.getTagByID(id) };
    }
    postTag(reqBody) {
        return {
            data: this.appService.createTag(create_tag_dto_1.CreateTagDTO.generate(reqBody)),
        };
    }
    deleteTag(id) {
        return {
            data: this.appService.deleteTagByID(id),
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('books'),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        type: Number,
        description: 'Default 0',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'size',
        required: false,
        type: Number,
        description: 'Default 10',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)('books/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Post)('books'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postBook", null);
__decorate([
    (0, common_1.Delete)('books/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Get)('authors'),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        type: Number,
        description: 'Default 0',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'size',
        required: false,
        type: Number,
        description: 'Default 10',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getAuthors", null);
__decorate([
    (0, common_1.Get)('authors/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getAuthorById", null);
__decorate([
    (0, common_1.Post)('authors'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "postAuthor", null);
__decorate([
    (0, common_1.Delete)('authors/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Get)('tags'),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        type: Number,
        description: 'Default 0',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'size',
        required: false,
        type: Number,
        description: 'Default 10',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getTags", null);
__decorate([
    (0, common_1.Get)('tags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getTagByID", null);
__decorate([
    (0, common_1.Post)('tags'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "postTag", null);
__decorate([
    (0, common_1.Delete)('tags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteTag", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map