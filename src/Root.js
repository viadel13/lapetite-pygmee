import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content/Index";
import Hero from "./components/Hero/Index";
import Apropos from "./components/Apropos/Index";
import Menu from "./components/Menu/Index";
import Services from "./components/Services/Index";
import Galerie from "./components/Galerie/Index";
import Contact from "./components/Contact/Index";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Content />} >
          <Route index path='/' element={<Hero />} />
          <Route path='about' element={<Apropos />} />
          <Route path='menu' element={<Menu />} />
          <Route path='services' element={<Services />} />
          <Route path='galerie' element={<Galerie />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Root
