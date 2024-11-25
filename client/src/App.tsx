import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  return (
    <div className="max-w-screen min-h-dvh overflow-hidden flex flex-col justify-start items-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
