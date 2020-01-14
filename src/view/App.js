import React from 'react';
import Header from './Header'
import './App.css';
import getRandomColorString from './DefaultReducer'
//homepage
//support
//about
//later: products
class App extends React.Component{
  componentWillMount(){
    const red="rgb(236, 77, 61)"
    document.body.style.backgroundColor = getRandomColorString();
  }
  render(){
  return (
    <div className='main-div'>
      <Header/>
      <br></br><br></br><br></br><br></br>
    </div>
  );
  }
}

export default App;
