const { findAccountById } = require("./accounts");

//===============================(New Function)===================================
function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

//===============================(New Function)===================================

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

//===============================(New Function)===================================

function partitionBooksByBorrowedStatus(books) {
  let outputArray = [];
  let booksCheckedOut = books.filter((book) => !book.borrows[0].returned);
  let booksInStock = books.filter((book) => book.borrows[0].returned);
  // for (let book of books){
  //   if (book.borrows[0].returned === false){
  //     booksCheckedOut.push(book)
  //   }
  //   else if(book.borrows[0].returned === true){
  //     booksInStock.push(book)
  // }

  outputArray.push(booksCheckedOut);

  outputArray.push(booksInStock);

  return outputArray;
}

//===============================(New Function)===================================

function getBorrowersForBook(book, accounts) {
//we are returning an array of objects where each object is an account object from accounts
//we need to put inside that array the object of the account matching the id of a borrows array in books
// we need to push inside the object for account the returned status of the book.
// let borrowersArray = [];
// let {borrows} = book
// for (let j = 0; j< accounts.length; j++){
//   let account = account[j]
//   let accountID = account[j].id
//     for (let i = 0;i < borrows.length; i++){
//       if (accountID === borrows[i].id){
//         account[returned] = borrows[i].returned;
//         borrowersArray.push(account);
//       }
//     }
// }
// console.log(borrowersArray)
// return borrowersArray;
// }
//
// let {borrows} = book
// let reduced = accounts.reduce((account) => {
//   for (let i = 0; i < borrows.length; i++){
//     if (borrows[i].id === account.id) {
//       account[returned] = borrows.returned;

//     }
//   }
// }, {});
// return reduced
// }


// we're probably going to use a helper function
// findAccountById
// we might be using .map here as well
return book.borrows.map ((borrow) => {
  let borrowAccount = findAccountById (accounts, borrow.id)
  return {...borrowAccount, returned: borrow.returned}
}).slice(0,10)
}

//===============================(End of Functions)===================================
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
