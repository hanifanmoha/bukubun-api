import { Author, Book, Tag } from './app.entity';

interface Data {
  authors: Author[];
  tags: Tag[];
  books: Book[];
}

const data: Data = {
  authors: [
    {
      id: 1,
      name: 'Jane Austen',
      bio: 'English novelist known for her six major novels.',
    },
    {
      id: 2,
      name: 'Mark Twain',
      bio: 'American writer, humorist, entrepreneur, and lecturer.',
    },
    {
      id: 3,
      name: 'J.K. Rowling',
      bio: 'British author, best known for the Harry Potter series.',
    },
    {
      id: 4,
      name: 'George Orwell',
      bio: 'English novelist and essayist, journalist, and critic.',
    },
    {
      id: 5,
      name: 'Virginia Woolf',
      bio: 'English writer and one of the foremost modernists.',
    },
  ],
  tags: [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Romance' },
    { id: 4, name: 'Fantasy' },
    { id: 5, name: 'Classics' },
  ],
  books: [
    {
      id: 1,
      title: 'Pride and Prejudice',
      author_id: 1,
      published_year: 1813,
      tag_ids: [3, 5],
    },
    {
      id: 2,
      title: 'Adventures of Huckleberry Finn',
      author_id: 2,
      published_year: 1884,
      tag_ids: [2, 5],
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer's Stone",
      author_id: 3,
      published_year: 1997,
      tag_ids: [4, 1],
    },
    {
      id: 4,
      title: '1984',
      author_id: 4,
      published_year: 1949,
      tag_ids: [1, 5],
    },
    {
      id: 5,
      title: 'To the Lighthouse',
      author_id: 5,
      published_year: 1927,
      tag_ids: [1, 5],
    },
    {
      id: 6,
      title: 'Emma',
      author_id: 1,
      published_year: 1815,
      tag_ids: [3, 5],
    },
    {
      id: 7,
      title: 'The Prince and the Pauper',
      author_id: 2,
      published_year: 1881,
      tag_ids: [2, 5],
    },
    {
      id: 8,
      title: 'Harry Potter and the Chamber of Secrets',
      author_id: 3,
      published_year: 1998,
      tag_ids: [4, 1],
    },
    {
      id: 9,
      title: 'Animal Farm',
      author_id: 4,
      published_year: 1945,
      tag_ids: [1, 5],
    },
    {
      id: 10,
      title: 'Mrs Dalloway',
      author_id: 5,
      published_year: 1925,
      tag_ids: [1, 5],
    },
  ],
};

export default data;
