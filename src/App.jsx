import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import BlogDetails from "./pages/BlogDetails";
import Elements from "./pages/Elements";


function App() {
  
  return ( 
    
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage/>} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Service />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blogdetails" element={<BlogDetails />} />
    <Route path="/elements" element={<Elements />} />
    <Route path="/contact" element={<Contact />} />
    </Route>

   
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
