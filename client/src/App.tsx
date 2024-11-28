import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import MainPage from "./pages/main";
import { AuthenticatedRoute } from "./hooks/use-private-route";
import ArticlesPage from "./pages/articles";
import TweetsPage from "./pages/tweets";
import VideosPage from "./pages/videos";

function App() {
  return (
    <div className="max-w-screen min-h-dvh overflow-hidden flex flex-col justify-start items-center">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/" element={<AuthenticatedRoute />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route path="/" element={<AuthenticatedRoute />}>
            <Route path="/articles" element={<ArticlesPage />} />
          </Route>
          <Route path="/" element={<AuthenticatedRoute />}>
            <Route path="/tweets" element={<TweetsPage />} />
          </Route>
          <Route path="/" element={<AuthenticatedRoute />}>
            <Route path="/videos" element={<VideosPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
