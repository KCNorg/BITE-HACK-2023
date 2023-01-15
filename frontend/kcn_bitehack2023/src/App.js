import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/LoginForm/Auth"
import CreateCourseTask from "./components/CreateCourseTask/CreateCourseTask"
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/createCourse" element={<CreateCourseTask />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
