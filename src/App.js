import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';

import React, {useEffect} from 'react';
// Redux
import {useCookies} from 'react-cookie';
import {useDispatch}  from 'react-redux';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import AddMenu from './pages/host/Kithen/AddMenu';

import Loader from './pages/Loader';
import LandingPage from './pages/LandingPage';
const Login=React.lazy(()=>import("./pages/auth/Login"));
const Signup=React.lazy(()=>import("./pages/auth/Signup"));
const Error404=React.lazy(()=>import("./pages/Error404"));
const Dashboard=React.lazy(()=>import("./pages/Dashboard"));
const Profile=React.lazy(()=>import("./pages/Profile"));
const Protected=React.lazy(()=>import("./pages/Protected"));



function App() {
  const [cookies] = useCookies(['userDetails']);  
  const dispatch=useDispatch();
  useEffect(()=>{
    // console.log(cookies);
    if(cookies?.userDetails?.id && cookies?.userDetails?.token)
    { 
      dispatch({type:"LOG_IN",userType:cookies?.userDetails?.userType});
    }
  },[cookies,dispatch]);

  return (
      <div className="app">
      <Router>
        <Routes>
          <Route path="login" element={
            <React.Suspense fallback={<Loader/>}>
               <Login/>
            </React.Suspense>
          }></Route>

          <Route path="landing" element={
            <React.Suspense fallback={<Loader/>}>
               <LandingPage/>
            </React.Suspense>
          }></Route>

          <Route path="signup" element={
            <React.Suspense fallback={<Loader/>}>
               <Signup/>
            </React.Suspense>
          }></Route>


          {/* Nested Starts*/}
          <Route path="/" element={
              <React.Suspense fallback={<Loader/>}>
                <Protected/>
              </React.Suspense>
          } >
            
            <Route index element={
              <React.Suspense fallback={<Loader/>}>
                <Dashboard/>
              </React.Suspense>
            }></Route>

            <Route path="/profile" element={
              <React.Suspense fallback={<Loader/>}>
                <Profile/>
              </React.Suspense>
            }></Route>

            <Route path="/addMenus" element={
              <React.Suspense fallback={<Loader/>}>
                <AddMenu/>
              </React.Suspense>
            }></Route>




          </Route>
          {/* Nested Ends */}

          <Route path="*" element={
            <React.Suspense fallback={<Loader/>}>
                <Error404/>
            </React.Suspense>
          }>
          </Route>

        </Routes>

      </Router>
      <ToastContainer/>

      </div>
  );
}

export default App;
