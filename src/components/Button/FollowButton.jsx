// import  Button  from "./Button";
// import css from './Button.module.css'
import { useState } from 'react';

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    // console.log(counter);
  };
  return <button onClick={handleClick}>Current: {counter}</button>;
};
export default ClickCounter;
