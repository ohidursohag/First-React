// import { useState } from "react";

import "./App.css";
import Todo from "./Todo.jsx";
import Actor from "./Actor";
import Singers from "./Singer";
import BookStore from "./BookStore";

function App() {
  // const [count, setCount] = useState(0);
  const actors = [
    "Rajjak",
    "Harpik Khan",
    "Ananta Jolil",
    "Soriful Raj",
    "Dip Jol",
  ];

  const books = [
    {id:1,bookName:'Physics', price:250},
    {id:2,bookName:'Chemistry', price:200},
    {id:3,bookName:'Business Studies', price:150},
    {id:4,bookName:'Math', price:300},
    {id:5,bookName:'Biology', price:200},
  ]
  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Hero Alom", age: 35 },
    { id: 4, name: "Shuvro Dev", age: 58 },
    { id: 5, name: "Pritom Hasan", age: 28 },
  ];


  return (
    <div>

        <BookStore books={books} />

      {actors.map((actor) => 
        <Actor name={actor} />
      )}
      {singers.map((singer) => 
        <Singers key={singer.id} singer={singer} />
      )}

      {/* <Todo task="Learn React" isDone={false}/>
      <Todo task="Core Concept" isDone={true}/>
      <Todo task="Try JSX" isDone={true}/> */}
      {/* <Person name="Sohag" age="29" />
      <Person name="Russel" /> */}
    </div>
  );
}
const Person = ({ name, age = "28" }) => {
  // console.log(name, age);
  // const age = 29;
  const ageStyle = {
    border: "2px solid red",
    padding: "10px 20px",
    borderRadius: "50%",
  };
  return (
    <div style={ageStyle}>
      <h3
        style={{
          border: "2px solid red",
          padding: "10px 20px",
          borderRadius: "50%",
        }}>
        I am {name}
      </h3>
      <p style={ageStyle}>I am {age} </p>
    </div>
  );
};

export default App;
