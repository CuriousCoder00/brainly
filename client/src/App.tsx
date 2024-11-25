import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col justify-start items-center pt-16">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={"Hey"} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
