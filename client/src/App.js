import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Benefits from './pages/Benefits/Benefits';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contact';
import EnrollForm from './pages/Enroll/EnrollForm';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Error from './pages/Error/Error';
import Logout from './components/Login/Logout';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './admin/AdminLayout';
import AdminUsers from './admin/AdminUsers';
import AdminContact from './admin/AdminContact';
import AdminEnquiry from './admin/AdminEnquiry';
import AdminReview from './admin/AdminReview';
import AdminUpdate from './admin/Admin-Update';
import AdminView from './admin/Admin-View';
import AdminImpMessage from './admin/AdminImpMessage';
import QuickLinks from './pages/QuickLinks/QuickLinks';
import ImpLinks from './admin/Imp-Links';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/enroll' element={<EnrollForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/quickLinks' element={<QuickLinks />} />
          <Route path='*' element={<Error />} />
          <Route path="/admin" element={<AdminLayout />} >
            <Route path = "users" element={<AdminUsers />} />
            <Route path = "review" element={<AdminReview />} />
            <Route path = "contacts" element={<AdminContact />} />
            <Route path = "enquiry" element={<AdminEnquiry />} />
            <Route path = "impmessage" element={<AdminImpMessage />} />
            <Route path = "implinks" element={<ImpLinks />} />
            <Route path = "users/:id/edit" element ={<AdminUpdate />} />
            <Route path = "enquiry/:id/view" element ={<AdminView />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App