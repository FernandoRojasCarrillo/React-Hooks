import { useMemo, useState, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20_000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
};

const HookUseDeferredValue = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default HookUseDeferredValue;
