export interface Author {
  id: number;
  name: string;
  bio: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  published_year: number;
  author_id: number;
  author?: Author;
  tag_ids: number[];
  tags?: Tag[];
}

export interface APIResponse<T> {
  data: T;
}
