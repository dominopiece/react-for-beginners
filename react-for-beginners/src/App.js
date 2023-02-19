// import styles from "./App.module.css";
import { useState, useEffect } from "react";
// import { array, func } from "prop-types";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setCounter((prev) => prev + 1);
//   const onChange = (event) => {
//     // console.log(event.target.value);
//     setKeyword(event.target.value);
//   };
//   console.log("i run all the time");
//   const iRunOnlyOnce = () => {
//     console.log("i run only once");
//   };
//   useEffect(iRunOnlyOnce, []);

//   // deps(dependencyList) 없을 경우 component가 생성되는 첫 시작점
//   useEffect(() => {
//     console.log("Call the API");
//   }, []);

//   // deps(dependencyList)가 있을 경우 무언가가 update들 때 코드를 실행
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("search for", keyword);
//     }
//     console.log("I run when 'Keyword' changes");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword &  counter changes");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here"
//       />
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// // # cleanup
// function Hello() {
//   // const byeFn = () => {
//   //   console.log("bye");
//   // };
//   // const hiFn = () => {
//   //   console.log("hi");
//   //   return byeFn;
//   // };
//   // useEffect(hiFn, []);

//   useEffect(() => {
//     console.log("hi");
//     return () => {
//       console.log("bye");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("created");
//     return () => console.log("destroyed");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => {
//     setShowing((prev) => !prev);
//   };
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChagne = (event) => {
//     setToDo(event.target.value);
//     console.log(toDo);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log(toDo);
//     if (toDo === "") {
//       return;
//     } else {
//       // setToDos(currentArray => {
//       //  const newArray = [toDo, ...currentArray]
//       //  console.log("inside", newArray);
//       //  return newArray;
//       // })
//       setToDos((currentArray) => [toDo, ...currentArray]);
//       // console.log(toDos);
//       setToDo("");
//     }
//     // console.log("outside", toDos);
//   };
//   // console.log("outside Fn", toDos);
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChagne}
//           value={toDo}
//           type="text"
//           placeholder="Write your todo"
//         />
//         <button>Add To DO</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// # Coin Traker
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `${coins.length}`}</h1>
      {loading ? (
        <strong>Loading..</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : USD ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
