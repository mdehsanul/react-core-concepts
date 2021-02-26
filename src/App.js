import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// main Component
function App() {
  // array
  const nayoks=['jashim', 'sakib khan', 'bapparaj', 'omor sani', 'alomgir']
  // object
  const nayoksObject=[{name:'Iron Man', age:56}, {name:'The Hulk', age:65}, {name:'Doctor Strange', age: 15}, {name:'Storm', age:25}, {name:'Professor X', age:20}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* custom element -> custom element not same as HTML elements*/}
      {/* accessing array */}
      {
        nayoks.map(nk => <Nayok name={nk}></Nayok>)
      }

      {/* accessing object */}
      {
        nayoksObject.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
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
    <h1>Ami: {props.name}</h1>
    <p>I have done 5 movies in {props.age || 24} years old.</p>
  </div>
}

export default App;
