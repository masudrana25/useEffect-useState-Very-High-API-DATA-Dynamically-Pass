import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [Details2, setDetails2] = useState([]) 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    .then( data => setDetails2(data))
    },[])
  return (
    <div className='App'>

      <div>
        {
          Details2.map(data => <Person2 name={data.name} email={data.email}></Person2>)
        }
      </div>
    </div>
  );
}

function Person2(props) {
  
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h5> email : {props.email}</h5>
    </div>
  )
}



export default App;
