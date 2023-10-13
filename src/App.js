import './App.css';
import { useState} from 'react'
import Age from './components/Age';
import Result from './components/Result';
import {differenceInYears} from 'date-fns';

function App() {

  const [age , setAge] = useState(null);

  const calculateAge = (birthday) =>{
    const today = new Date();
    const obj = new Date(birthday);
    const years = differenceInYears(today , obj);

    setAge({
      year : years
    })
  }


  return (
    <div className="App">
     <h1 style={{marginTop : "100px"}}>Age Calculator</h1> 
     <h3>Enter Your Date of Birth</h3>
     <Age calculateAge={calculateAge} />
     {age && <Result age={age} />}
    </div>
  );
}

export default App;
