import React from 'react';
// import Axios from "axios";
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';  
import Bridal from './components/Bridal';
import Vendor from './components/Vendor';
import Host from './components/Host';
import Navbar from './components/Navbar';
import HomeNav from './components/HomeNav';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import ContactHome from './components/ContactHome';
import AboutHome from './components/AboutHome';
import JohnDoePhotography from './components/vendors/john-doe-photography';
import GourmetDelights from './components/vendors/gourmet-delights';
import JaneSmithStudios from './components/vendors/jane-smith-studios';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import Gallery from './components/Gallery';
import GalleryHome from './components/GalleryHome';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Welcome />}></Route>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      {/* <Route path="/navbar" element={<Navbar />}></Route> */}
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/bridal" element={<Bridal />}></Route>
      <Route path="/vendor" element={<Vendor />}></Route>
      <Route path="/host" element={<Host />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/abouthome" element={<AboutHome />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/homenav" element={<HomeNav />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/contacthome" element={<ContactHome />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/galleryhome" element={<GalleryHome />}></Route>
      <Route path="/john-doe-photography" element={<JohnDoePhotography />}></Route>
      <Route path="/gourmet-delights" element={<GourmetDelights />}></Route>
      <Route path="/jane-smith-studios" element={<JaneSmithStudios />}></Route>
      <Route path="/userlist" element={<UserList />}></Route>
      <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/edit/:id" element={<UserEdit />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
