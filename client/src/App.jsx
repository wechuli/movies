import React from 'react';
import Hero from './components/layout/Hero';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home';
import Home2 from './components/home/Home2';


const App = ()=>{
  return(
<React.Fragment>
  <NavBar/>
  <Home2/>
  {/* <Home/> */}

</React.Fragment>
  )
}

export default App;