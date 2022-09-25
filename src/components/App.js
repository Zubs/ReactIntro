import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewBlog from "./NewBlog";
import Blog from "./Blog";
import NotFound from "./NotFound";
import { ThemeProvider } from "styled-components";
import { ContentDiv } from "./styles/Main.styles";

const defaultTheme = {
  error: 'red',
  secondary: '#f2f2f2',
};

const theme = {
  dark: {
    ...defaultTheme,
    primary: '#121212'
  },
  light: {
    ...defaultTheme,
    primary: '#f1356d'
  }
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Navbar />
        <ContentDiv>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <NewBlog /> } />
            <Route path="/blog/:id" element={ <Blog /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </ContentDiv>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
