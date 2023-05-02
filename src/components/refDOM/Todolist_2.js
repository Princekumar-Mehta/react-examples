import { useRef, useState } from "react";
import { flushSync } from "react-dom";
export function Todolist_2() {
  let [todos, setTodos] = useState(initialTodos);
  let refTodos = useRef(null);
  let [newTask, setNewTask] = useState("");
  function handleAdd() {
    flushSync(() => {
      setTodos([...todos, { id: nextId++, todoName: newTask }]);
      setNewTask("");
    });
    refTodos.current.lastChild.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  }
  return (
    <>
      <button onClick={handleAdd}>add</button>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <ul ref={refTodos}>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.todoName}</li>;
        })}
      </ul>
    </>
  );
}

let initialTodos = [];

for (let i = 0; i < 40; i++) {
  initialTodos.push({ id: i, todoName: `todo#${i}` });
}
let nextId = initialTodos.length;
