import { useEffect, useCallback, useState } from "react";

const useCallbackk = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  const callbackFunction = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={callbackFunction}>click</button>
    </div>
  );
};

export default useCallbackk;
