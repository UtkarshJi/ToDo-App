import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const API_BASE = 'http://localhost:8080/api/todos';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(API_BASE);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo, completed: false }),
    });

    setNewTodo('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await fetch(`${API_BASE}/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });
    fetchTodos();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>

      <input
        type="text"
        value={newTodo}
        placeholder="Enter a new task..."
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '8px 0' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '8px',
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
