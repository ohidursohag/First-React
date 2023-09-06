import "./Book.css";

export default function Book({ book }) {
  console.log(book);
  const { bookName, price } = book;
  return (
    <div className="book">
      <h4>Book Name: {bookName}</h4>
      <h4>Price: {price}</h4>
    </div>
  );
}
