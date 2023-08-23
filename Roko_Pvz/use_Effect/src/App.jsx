import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (name) {
      setAge(name.length > 5 ? 50 : 35);
    }
  }, [name]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div>
      {name} {age}
      <br />
      <button onClick={() => setName("Default")}>Set default name</button>
      {data.map((item) => (
        <div key={item.id}>
          <h2 style={{ backgroundColor: item.completed ? "green" : "yellow" }}>
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default App;