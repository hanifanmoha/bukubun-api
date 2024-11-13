export declare function getByPagination<T>(data: T[], page: number, size: number): T[];
export declare function getFiltered<T>(array: T[], search: string, keys: (keyof T)[]): T[];
