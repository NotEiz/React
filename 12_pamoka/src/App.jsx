import { useEffect, useCallback, useState } from "react";
import Form from "./assets/components/Form";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  const callbackFunction = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={callbackFunction}>click</button>

      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
