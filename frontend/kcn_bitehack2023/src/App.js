import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/LoginForm/Auth"
import CreateCourseTask from "./components/CreateCourseTask/CreateCourseTask"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dupa" element={<CreateCourseTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
