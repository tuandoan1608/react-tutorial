import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersComponent from "./components/UsersComponent"
import AddUserComponent from './components/customers/AddUserComponent';
import Login from "./components/logins/login";
 
function App() {
  return (


    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<UsersComponent/>}/>
          <Route path="/add" element={<AddUserComponent/>} />
          <Route  path="/login" element={<Login/>} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;
