import Logo from "./components/Logo.js";
import Landing from "./pages/Landing";
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
