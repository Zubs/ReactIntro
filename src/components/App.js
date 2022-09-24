import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewBlog from "./NewBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <NewBlog /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
