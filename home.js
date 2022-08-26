//===============================(New Function)===================================
function getTotalBooksCount(books) {
  return books.length;
}

//===============================(New Function)===================================

function getTotalAccountsCount(accounts) {
  return accounts.reduce((total) => {
    total++;
    return total;
  }, 0);
}

//===============================(New Function)===================================
function getBooksBorrowedCount(books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      totalBorrows++;
    }
  }
  return totalBorrows;
}

//===============================(HELPER FUNCTION)===================================
const firstFiveInArray = (array) => {
  return array.slice(0, 5);
};

//===============================(New Function)===================================
function getMostCommonGenres(books) {
  // first lets make an array with objects that contain with key and value pairs
  let arrayGenres = [];
  // where each key is a genreName and each value is the number of books from books array that fit the genre
  // to make the objects within the array, we need to loop through books
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let found = arrayGenres.find(
      (genreObject) => genreObject.name === book.genre
    );
    if (found === undefined) {
      arrayGenres.push({ name: book.genre, count: 1 });
    } else {
      found.count++;
    }
  }
  // and add to the array an object with a key of  `name` which refers to the genre name and the
  // starting number is 1, NOT SURE HOW TO DO THIS PART
  //                        ^^^^^^^^^^^^^^^^^^^^^^^^^
  // [{ name: sciencefiction, count: 1 }];

  // and add to that number which is expressed as count each time the loop
  // encounters a book with that genre

  let sorted = arrayGenres.sort(
    (genre1, genre2) => genre2.count - genre1.count
  );
  return firstFiveInArray(sorted);
  // then we need to sort the array to arrange the order of the objects
  // such that the value for number of each object is sorted from greatest to least
  // then we need to return the first 5 objects within the array.

  // const funTest = [1,2,3,4,5,6]
  // console.log ([`${funTest[0]}`, `${funTest[1]}`])
}

// const booksIntoGenreObject = books.reduce((genreObject, book) =>{
//   // if(arrayGenres.GenreObject[name]??){
//   //   arrayGenres
//   // }
//   // genreObject[name]= book.genre;
//   // genreObject.count++;
//   // if (genreObject.count??){
//   //   genreObject[count]= 1
//   // }
//   // return genreObject
// }, {})
//===============================(New Function)===================================
function getMostPopularBooks(books) {
  // will look similar to the previous function except we are dealing with books.borrows.length
  // where books.borrows.length will determine each book's "count"
  let arrayBooks = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let found = arrayBooks.find((bookObject) => bookObject.name === book.title);
    if (found === undefined) {
      arrayBooks.push({ name: book.title, count: book.borrows.length });
    }
  }
  let sorted = arrayBooks.sort((book1, book2) => book2.count - book1.count);
  return firstFiveInArray(sorted);
}

//===============================(New Function)===================================
function getMostPopularAuthors(books, authors) {
  let mappedBooks = books.map((book) => ({
    id: book.authorId,
    count: book.borrows.length,
  }));
  let reducedObject = mappedBooks.reduce(
    (accumulatorObject, objectBookWithCount) => {
      if (
        accumulatorObject[objectBookWithCount.id] === undefined ||
        accumulatorObject[objectBookWithCount.id] === null
      ) {
        accumulatorObject[objectBookWithCount.id] = objectBookWithCount.count;
      } else {
        accumulatorObject[objectBookWithCount.id] += objectBookWithCount.count;
      }
      // {
      //   3: 99,
      //   2: 35
      // }
      return accumulatorObject;
    },
    {}
  );
  let authorsAndCounts = [];
  for (let key in reducedObject) {
    for (let author of authors) {
      if (key === `${author.id}`) {
        authorsAndCounts.push({
          name: `${author.name.first} ${author.name.last}`,
          count: reducedObject[key],
        });
      }
    }
  }
  let sortedAuthorsAndCounts = authorsAndCounts.sort(
    (author1, author2) => author2.count - author1.count
  );

  return firstFiveInArray(sortedAuthorsAndCounts);
}

// potentially reduce first, then map using findAuthorsById
// let reducedObject = books.reduce((accumulatorObject, book) => {
// if (acculatorObject[book.authorId] )
// }, {})

// in all of these last three functions the main problem I'm struggling with is
// not knowing or understanding how to create an array with objects inside it
// both using and without using .reduce
// I'm pretty sure it is reduce... but I could be wrong.
// let arrayAuthors = [];
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   for (let j = 0; j < authors.length; j++) {
//     const author = authors[j];
//     let reduceAccumulator = arrayAuthors.reduce(
//       (authorObject, authorBookCombo) => authorBookCombo.id === book.authorId,
//       {}
//     );
//     if (arrayAuthors.name === undefined) {
//     // name the object being pushed in so I can reference it???
//     // could use find here
//     //maybe 2 filters and a map
//       arrayAuthors.push({
//         name: `${author.name.first} ${author.name.last}`,
//         count: book.borrows.length,
//       });
//     }

//     // else (author.id === book.authorId) {
//     //   authorBookCombo.count += book.borrows.length;
//     // }
//   }
// }
// let sorted = arrayAuthors.sort(
//   (author1, author2) => author2.count - author1.count
// );
// return sorted.slice(0, 5);
// }

//===============================(End of Functions)===================================

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
