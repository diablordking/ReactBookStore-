export const selectbook = (book) => {
  console.log("You clicked on user:", book.author)
  return {
    type: "BOOK_SELECTED",
    payload:book
  }
};
