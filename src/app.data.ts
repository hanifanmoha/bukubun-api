import { Author, Book, Tag } from './app.entity';

interface Data {
  authors: Author[];
  tags: Tag[];
  books: Book[];
}

const data: Data = {
  authors: [
    {
      id: '53d3453a-a896-420b-a786-cc738a23fd68',
      name: 'Jane Austen',
      bio: 'English novelist known for her six major novels.',
    },
    {
      id: '76664d9c-d2e9-4716-ac94-dfa64bb17c69',
      name: 'Mark Twain',
      bio: 'American writer, humorist, entrepreneur, and lecturer.',
    },
    {
      id: '83f63004-ed5f-49b6-acda-e57b0404f3a3',
      name: 'J.K. Rowling',
      bio: 'British author, best known for the Harry Potter series.',
    },
    {
      id: '583221b9-65a7-4110-926d-f6119c2df7f5',
      name: 'George Orwell',
      bio: 'English novelist and essayist, journalist, and critic.',
    },
    {
      id: '3b740210-1880-4a9b-afcd-889df6328b4f',
      name: 'Virginia Woolf',
      bio: 'English writer and one of the foremost modernists.',
    },
  ],
  tags: [
    {
      id: '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
      name: 'Fiction',
    },
    {
      id: 'fe96c635-b3a0-409c-bfed-9e50ee33e22d',
      name: 'Adventure',
    },
    {
      id: 'beadadfc-5e07-41fa-8a06-8b674ce58e34',
      name: 'Romance',
    },
    {
      id: 'efb883cb-b48d-4e05-bb8a-a799e60ccbb8',
      name: 'Fantasy',
    },
    {
      id: '394f04db-2516-461e-969e-ecf9bb6af378',
      name: 'Classics',
    },
  ],
  books: [
    {
      id: '1426d174-93e4-45f8-b62f-d34578085cc6',
      title: 'Pride and Prejudice',
      author_id: '53d3453a-a896-420b-a786-cc738a23fd68',
      published_year: 1813,
      tag_ids: [
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: 'c49be9e6-7e64-4aa4-a631-94c9dbbf8814',
      title: 'Adventures of Huckleberry Finn',
      author_id: '76664d9c-d2e9-4716-ac94-dfa64bb17c69',
      published_year: 1884,
      tag_ids: [
        'fe96c635-b3a0-409c-bfed-9e50ee33e22d',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: '36006826-f4b5-4eac-9ded-65b4be0897ed',
      title: "Harry Potter and the Sorcerer's Stone",
      author_id: '83f63004-ed5f-49b6-acda-e57b0404f3a3',
      published_year: 1997,
      tag_ids: [
        'efb883cb-b48d-4e05-bb8a-a799e60ccbb8',
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
      ],
    },
    {
      id: '635c973f-a109-488c-b302-2952708dc7a6',
      title: '1984',
      author_id: '583221b9-65a7-4110-926d-f6119c2df7f5',
      published_year: 1949,
      tag_ids: [
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: 'fd237695-887f-47b9-a60a-d7fc9d8e2fcb',
      title: 'To the Lighthouse',
      author_id: '3b740210-1880-4a9b-afcd-889df6328b4f',
      published_year: 1927,
      tag_ids: [
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: '57a745d6-0b44-4adf-806e-b854288b73e8',
      title: 'Emma',
      author_id: '53d3453a-a896-420b-a786-cc738a23fd68',
      published_year: 1815,
      tag_ids: [
        'beadadfc-5e07-41fa-8a06-8b674ce58e34',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: 'a7db64d3-415b-4088-a4b1-9c351cf659ec',
      title: 'The Prince and the Pauper',
      author_id: '76664d9c-d2e9-4716-ac94-dfa64bb17c69',
      published_year: 1881,
      tag_ids: [
        'fe96c635-b3a0-409c-bfed-9e50ee33e22d',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: 'e667556f-882f-417b-9e9b-95b6d8fd8de4',
      title: 'Harry Potter and the Chamber of Secrets',
      author_id: '83f63004-ed5f-49b6-acda-e57b0404f3a3',
      published_year: 1998,
      tag_ids: [
        'efb883cb-b48d-4e05-bb8a-a799e60ccbb8',
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
      ],
    },
    {
      id: 'f503e985-5c1d-4f53-942c-38dabdc0e4ad',
      title: 'Animal Farm',
      author_id: '583221b9-65a7-4110-926d-f6119c2df7f5',
      published_year: 1945,
      tag_ids: [
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
    {
      id: '8fdca305-ead7-4cea-92a3-2a30d5b3245a',
      title: 'Mrs Dalloway',
      author_id: '3b740210-1880-4a9b-afcd-889df6328b4f',
      published_year: 1925,
      tag_ids: [
        '6c0a5d9e-b3f3-42e5-9981-f1c3b4725b4a',
        '394f04db-2516-461e-969e-ecf9bb6af378',
      ],
    },
  ],
};

export default data;
