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
const update_book_dto_1 = require("./dto/update-book.dto");
const update_author_dto_1 = require("./dto/update-author.dto");
const update_tag_dto_1 = require("./dto/update-tag.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getBooks(page, size, search) {
        return {
            data: this.appService.getBooks(page, size, search),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    getBookById(id) {
        return { data: this.appService.getBookByID(id), statusCode: common_1.HttpStatus.OK };
    }
    postBook(reqBody) {
        return {
            data: this.appService.createBook(create_book_dto_1.CreateBookDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.CREATED,
        };
    }
    updateBook(id, reqBody) {
        return {
            data: this.appService.updateBook(id, update_book_dto_1.UpdateBookDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    deleteBook(id) {
        return {
            data: this.appService.deleteBookByID(id),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    getAuthors(page, size, search) {
        return {
            data: this.appService.getAuthors(page, size, search),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    getAuthorById(id) {
        return {
            data: this.appService.getAuthorByID(id),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    postAuthor(reqBody) {
        return {
            data: this.appService.createAuthor(create_author_dto_1.CreateAuthorDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.CREATED,
        };
    }
    updateAuthor(id, reqBody) {
        return {
            data: this.appService.updateAuthor(id, update_author_dto_1.UpdateAuthorDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    deleteAuthor(id) {
        return {
            data: this.appService.deleteAuthorByID(id),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    getTags(page, size, search) {
        return {
            data: this.appService.getTags(page, size, search),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    getTagByID(id) {
        return { data: this.appService.getTagByID(id), statusCode: common_1.HttpStatus.OK };
    }
    postTag(reqBody) {
        return {
            data: this.appService.createTag(create_tag_dto_1.CreateTagDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.CREATED,
        };
    }
    updateTag(id, reqBody) {
        return {
            data: this.appService.updateTag(id, update_tag_dto_1.UpdateTagDTO.generate(reqBody)),
            statusCode: common_1.HttpStatus.OK,
        };
    }
    deleteTag(id) {
        return {
            data: this.appService.deleteTagByID(id),
            statusCode: common_1.HttpStatus.OK,
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
    (0, swagger_1.ApiBody)({ type: create_book_dto_1.CreateBookDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postBook", null);
__decorate([
    (0, common_1.Put)('books/:id'),
    (0, swagger_1.ApiBody)({ type: update_book_dto_1.UpdateBookDTO }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateBook", null);
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
    (0, swagger_1.ApiBody)({ type: create_author_dto_1.CreateAuthorDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postAuthor", null);
__decorate([
    (0, common_1.Put)('authors/:id'),
    (0, swagger_1.ApiBody)({ type: update_author_dto_1.UpdateAuthorDTO }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_author_dto_1.UpdateAuthorDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateAuthor", null);
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
    (0, swagger_1.ApiBody)({ type: create_tag_dto_1.CreateTagDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "postTag", null);
__decorate([
    (0, common_1.Put)('tags/:id'),
    (0, swagger_1.ApiBody)({ type: update_tag_dto_1.UpdateTagDTO }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tag_dto_1.UpdateTagDTO]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateTag", null);
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