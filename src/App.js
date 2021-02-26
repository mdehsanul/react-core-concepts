import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

// main Component
function App() {
  // random user generate from API
  const [nayoks, setNayoks] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setNayoks(data))
  }, [])
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* custom element -> custom element not same as HTML elements*/}
      {/* accessing random user  from API */}
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} email={nk.email}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

// new component
function MovieCounter(){
  let [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count}></ MovieDisplay>
    </div>
  )
}

// new component
function MovieDisplay(props){
  return(
    <h4>Movies I have acted: {props.movies}</h4>
  )
}

// new component
function Nayok(props){
  const nayokStyle = {
    border: "3px solid purple",
    margin: "20px"
  }
  return <div style={nayokStyle}>
    <h1>Name: {props.name}</h1>
    <p>Email: {props.email}</p>
  </div>
}

export default App;
