import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import AdminLayout from './components/layout/AdminLayout';
import AdminUser from './pages/AdminUser';
import AdminContact from './pages/AdminContact';
import AdminServices from './pages/AdminServices';
import AdminUpdate from './pages/AdminUpdate';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
           <Route path="user" element={<AdminUser />}/>
           <Route path="contact" element={<AdminContact />}/>
           <Route path="services" element={<AdminServices />}/>
           <Route path="users/:id/edit" element={<AdminUpdate />}/>


        </Route>
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
