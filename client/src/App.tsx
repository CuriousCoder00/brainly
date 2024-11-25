import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col justify-start items-center bg-black text-white pt-12">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={"Hey"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
