import React, {useEffect} from 'react';
import './App.css';
import Header from "./header/Header";
import Routes from "./routes/Routes";
import {initializeAppTC} from "../m2-bll/appReducer";
import {useDispatch} from "react-redux";




const App = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
