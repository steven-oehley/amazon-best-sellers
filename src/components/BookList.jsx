import { topSellingBooks } from "../data";
import Book from "./Book";

const BookList = () => {
  const handleClick = (index) => {
    topSellingBooks.find((book, i) => {
      if (i === index) {
        console.log(book.title);
      }
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-12 max-w-6xl py-10 px-8 md:px-12 md:py-20">
      {topSellingBooks.map((book, index) => (
        <Book key={index} index={index} {...book} onClickBook={handleClick} />
      ))}
    </section>
  );
};
export default BookList;
