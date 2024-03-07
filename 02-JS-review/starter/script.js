const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);

// const title = book.title;

// const pubDate = book.publicationDate;

// const author = book.author;

const genres = book.genres;

// // rest operator
// const { title, publicationDate, ...rest } = book;

// // spread operator
// const newGenres = [...genres, 'Epic Games'];

// // modification made after spread operation
// const newBook = { ...book, moviePubDate: '2024-03-06', translations: { spanish: "hola" } };

// // arrow function
// const getYear = (str) => str.split('-')[0];

// const duneSummary = `${title} was written by ${book.author} in ${getYear(publicationDate)}.`;

// const howLong = book.pages > 1000 ? "very long" : "not very long";

// // nullish coalescing operator
// // similar to ||(OR) but returns false iff null or undefined
// const count = book.reviews.librarything?.reviewsCount ?? 'no data';

// // optional chaining
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

const arr = [1, 2, 3, 4, 5].map((elem) => elem * 2);

const arr2 = [1, 2, 3, 4, 5].map(elem => {
  return elem / 2;
})

const books = getBooks();

const essentialData = getBooks().map(book => ({
  title: book.title,
  author: book.author,
  publishedDate: book.publicationDate.split('-')[0],
}));

const adventureBooks = books
  .filter(book => book.genres.includes('adventure'))
  .map(book => book.title);

const nums = [1, 2, 3, 4, 5];

// reduce(func, initVal)
// accumulation of elements in the array
const summation = nums.reduce(
  (acc, curr) => acc * curr,
);

const unsorted = [500, 3, 17, 9999, 2000];

// -1 if a < b
// +1 if a > b
// 0 else
const ascending = unsorted.toSorted((a, b) => a - b);
const descending = unsorted.toSorted((a, b) => b - a);

const sortedByPages = books.toSorted((book1, book2) => book1.pages - book2.pages);

const harry = {
  id: 6,
  title: 'Harry Cho',
  author: 'Cho Harry',
};

const newBooks = [...books, harry];

const updatedBooks = newBooks.map(book =>
  book.id === 1 ? { ...book, pages: 1978 } : book,
);

// promises with then
// const fake = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => data);

// async/await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  return data;
}
