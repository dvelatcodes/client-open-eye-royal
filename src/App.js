import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PioneerRegPage from "./components/pioneer/PioneerRegPage";
import StudentRegPage from "./components/student/StudentRegPage";
import NonStudentRegPage from "./components/nonStudent/NonStudentRegPage";
import TeacherRegPage from "./components/teacher/TeacherRegPage";
import TestStudent from "./components/TestStudent";
import SchoolSetup from "./components/SchoolSetup";
import {
  Calendar,
  EditTeachers,
  SetupClass,
  SetTeachers,
  Customers,
  Kanban,
  ColorPicker,
  AllClasses,
  Editor,
} from "./pages";
import { PioneerSchool } from "./components/pioneer/index";
import "./app.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/schoolsetup" element={<SchoolSetup />} />
          <Route path="/studentRegPage" element={<StudentRegPage />} />
          <Route path="/TestStudent" exact element={<TestStudent />} />
          <Route path="/nonStudentRegPage" element={<NonStudentRegPage />} />
          <Route path="/teacherRegPage" element={<TeacherRegPage />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/pioneerReg" exact element={<PioneerRegPage />} />
          {/* pioneer dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/school" element={<PioneerSchool />} />
          {/* pioneer pages */}
          <Route path="/allclasses" element={<AllClasses />} />
          <Route path="/edit-teachers" element={<EditTeachers />} />
          <Route path="/edit-students" element={<Customers />} />
          <Route path="/setup-class" element={<SetupClass />} />
          <Route path="/set-teachers" element={<SetTeachers />} />
          {/* apps */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/color-picker" element={<ColorPicker />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
