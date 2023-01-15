import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/LoginForm/Auth"
import ShowCourse from './components/ShowCourseForm/ShowCourse';
import CreateCourseTask from "./components/CreateCourseTask/CreateCourseTask"
import HomePage from "./components/HomePage/HomePage"
import QuestionForm from "./components/QuestionPage/Question";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/showCourse" element={<ShowCourse />} />
        <Route path="/createCourse" element={<CreateCourseTask />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/question" element={<QuestionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
