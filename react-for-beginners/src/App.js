import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);

  // deps(dependencyList) 없을 경우 component가 생성되는 첫 시작점
  useEffect(() => {
    console.log("Call the API");
  }, []);

  // deps(dependencyList)가 있을 경우 무언가가 update들 때 코드를 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
    console.log("I run when 'Keyword' changes"); 
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes"); 
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword &  counter changes"); 
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
