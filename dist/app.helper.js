"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPagination = getByPagination;
exports.getFiltered = getFiltered;
function getByPagination(data, page, size) {
    const start = size * (page - 1);
    const end = size * page;
    return data.slice(start, end);
}
function getFiltered(array, search, keys) {
    const filtered = [];
    for (let data of array) {
        for (let key of keys) {
            const str = (data[key] || '');
            if (str.toLowerCase().includes(search.toLowerCase())) {
                filtered.push(data);
                break;
            }
        }
    }
    return filtered;
}
//# sourceMappingURL=app.helper.js.map