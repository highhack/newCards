import React, {useEffect} from 'react';
import './App.css';
import Header from "./header/Header";
import Routes from "./routes/Routes";
import {initializeAppTC} from "../m2-bll/appReducer";
import {useDispatch} from "react-redux";
import HeaderTest from "./header/HeaderTest";




const App = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

  return (
    <div className="App">
      <Header />
      {/*<HeaderTest />*/}
      <Routes />
    </div>
  );
}

export default App;
