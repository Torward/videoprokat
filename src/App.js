import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App(props) {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            {/*<Route path={'/*'} element={<Home*/}

            {/*/>}/>*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}


export default App;
