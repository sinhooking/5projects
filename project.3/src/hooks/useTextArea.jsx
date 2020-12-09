import { useState } from "react";

const useTextArea = () => {
  const [value, setvalue] = useState("");

  const onText = (e) => setvalue(e.target.value);

  return [value, setvalue, onText];
};

export default useTextArea;
