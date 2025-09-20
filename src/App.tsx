import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import ReportPage from "./pages/ReportPage";
import Courses from "./pages/Courses";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-page" element={<ReportPage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Toaster richColors position="bottom-right" />
    </Router>
  );
}

export default App;
