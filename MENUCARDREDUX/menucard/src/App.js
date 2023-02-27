import { useEffect, useState } from 'react';
import './App.css';
import store from './store/configStore';
import Category from './components/Category';
import Header from './components/Header';
import Menu from './components/Menu';
import data from './Data'


function App() {
  const [arr, setArr] = useState(data);
  console.log(arr);
  useEffect(() => {
    console.log(store.getState())
  })
  
  return (
    <div className="App">
      <Header />
      <Category />
      <Menu arr={arr}/>
    </div>
  );
}

export default App;
