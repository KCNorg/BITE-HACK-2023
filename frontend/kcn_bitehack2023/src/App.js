import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/LoginForm/Auth"
import ShowCourse from './ShowCourseForm/ShowCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/showCourse" element={<ShowCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
