import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
