//===============================(New Function)===================================

function findAccountById(accounts, id) {
//require accounts
//accounts.id (find might work here)
//return accounts[]
  let find = accounts.find(accountObject => accountObject.id === id);
  return find
}

//===============================(New Function)===================================

function sortAccountsByLastName(accounts) {
  //uses .sort
  //I'm gonna reference at some point accounts.name.last
  //I'm sorting and then returning the array
  // let lastNames = accounts.map(account => account.name.last)
let sorted = accounts.sort((firstAccount, secondAccount) => firstAccount.name.last < secondAccount.name.last ? -1 : 1 )
return sorted
}

//===============================(New Function)===================================

function getTotalNumberOfBorrows({id}, books) {
  let totalBorrows = 0;

  // we will loop through books and we will loop through book[i].id to check against id
for (let i = 0; i < books.length; i++){
  //let {borrows[i]} = books[i];
  for (let j = 0; j < books[i].borrows.length; j++){
    if (books[i].borrows[j].id === id){
      totalBorrows ++;
    };
  };
}
return totalBorrows
}

//===============================(New Function)===================================

function getBooksPossessedByAccount({id}, books, authors) {
const booksCheckedOut =[];
for (let book of books) {
  if(book.borrows[0].id === id && !book.borrows[0].returned){
    for (let author of authors){
      if (author.id === book.authorId) {
        let writerOfBook = author;
        book.author = writerOfBook;
        booksCheckedOut.push(book);
      }
    }
  }
}
return booksCheckedOut
// / let totalBorrows = 0;
  // let currentlyBorrowedBooks = []
  // let bookObjectWithAuthorInfo = book[i].push(authorstuff)
  // logically we have to also check in a loop the author stuff against the id of the author
  // .... there's an id from books and from authors that links it. We need to do a check to make
  // sure the author matches the book
  // // we're going to add to the totalBorrows++ for each time we loop through books and
  // // find the id of the account listed as returned is false
  // // at some point we need to reference books.borrows[0].returned books.borrows[0].id
  // // logic is then... we're gonna check books.borrows[0].id against id and we will say that as we loop
  // // for each time we loop through where the match is true (===) we totalBorrows++
  // // at the end we return totalBorrows
  // for (let book of books){
  //   if(book.borrows[0].id === id && !book.borrows[0].returned){
  //       currentlyBorrowedBooks.push(bookMan);
  //   }
  // }
  // return totalBorrows;
  // }
  // 

  }
//===============================(End of Functions)===================================

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
