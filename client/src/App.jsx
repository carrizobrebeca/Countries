import {Routes, Route} from "react-router-dom";


import './App.css'
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Form from "./Views/Form/Form";
import Detail from "./Components/Detail/Detail";

function App() {

  return (
    <div>
        <>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/form"
              element={
                <>
                  <NavBar />
                  <Form />
                </>
              }
            />
            {/* <Route path="/detail/:id" element={<Detail />} /> */}
          </Routes>
       </>
      </div>
  )
}

export default App
