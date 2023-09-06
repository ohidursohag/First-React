import "./Book.css";

export default function Singers({ singer }) {
  // console.log(singer);
  // const { name, age } = singer;
  return (
    <div className="singer">
      <h3>Name : {singer.name} </h3>
      <p>Age : {singer.age}</p>
    </div>
  );
}
