import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./header/Header";
import Routes from "./routes/Routes";
// import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "../m2-bll/store";
// import {initializeAppTC, RequestStatusType} from "../m2-bll/appReducer";


const App = () => {

  // const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
  // const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
  // let dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(initializeAppTC())}, [])
  //
  // if (!isInitialized) {
  //   return <div>
  //      Loading...
  //   </div>
  // }

  return (
      <BrowserRouter>
    <div className="App">
      {/*// hashrouter //  provider*/}
      <Header />
      <Routes />
    </div>
      </BrowserRouter>
  );
}

export default App;
