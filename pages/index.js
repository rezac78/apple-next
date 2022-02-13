import { useState } from "react";
export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const handleInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodolist([userInput, ...todolist]);
    setUserInput("")
  };
  return (
    <div>
      <h3>Next js todo List</h3>
      <from>
        <input type="text" value={userInput} onChange={handleInput} />
        <button onClick={handleSubmit}>submit</button>
      </from>
      <ul>
        {todolist.length >= 1
          ? todolist.map((todo, idx) => {
              return <li key={idx}>{todo}</li>;
            })
          : "Enter a todo item"}
      </ul>
    </div>
  );
}
