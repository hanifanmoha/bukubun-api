export interface Author {
  id: string;
  name: string;
  bio: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  published_year: number;
  author_id: string;
  author?: Author;
  tag_ids: string[];
  tags?: Tag[];
}

export interface APIResponse<T> {
  data: T;
}
