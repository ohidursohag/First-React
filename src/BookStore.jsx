import Book from "./Book";
import "./Book.css";

export default function BookStore({ books }) {
  console.log(books);
  return (
    <div className="bookStore">
      <h4>Total Books: {books.length}</h4>

      {books.map((book) => 
        <Book key={book.id} book={book} />
      )}
    </div>
  );
}
