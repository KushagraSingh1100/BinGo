import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ReportPage from "./pages/ReportPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-page" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
