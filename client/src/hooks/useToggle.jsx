import { useState } from "react";

const useToggle = (value) => {
  const [state, setState] = useState(value);
  const changeState = () => {
    setState(!state);
  };

  return [state, changeState];
};

export default useToggle;
