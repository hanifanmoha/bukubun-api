export function getByPagination<T>(data: T[], page: number, size: number): T[] {
  const start = size * (page - 1);
  const end = size * page;
  return data.slice(start, end);
}

export function getFiltered<T>(
  array: T[],
  search: string,
  keys: (keyof T)[],
): T[] {
  const filtered: T[] = [];

  for (let data of array) {
    for (let key of keys) {
      const str = (data[key] || '') as string;
      if (str.toLowerCase().includes(search.toLowerCase())) {
        filtered.push(data);
        break;
      }
    }
  }

  return filtered;
}
