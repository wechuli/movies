import React from 'react';
import Hero from './components/layout/Hero';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home';


const App = ()=>{
  return(
<React.Fragment>
  <NavBar/>
  <Home/>

</React.Fragment>
  )
}

export default App;