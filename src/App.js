import "./App.css";
import Dashboard from "./pages/DashboardHome/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PatientList from "./pages/DashboardHome/PatientsList/PatientList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/patient" element={<PatientList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
