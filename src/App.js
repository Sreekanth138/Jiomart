import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { TopCatBar, NavBar, SideNavBar, Routes } from './Components';
import { Context } from './Components/Context/ContextProvider';
import NavigationBar from './Components/Navigation/NavigationBar';
import { NavBar } from './Components/Navbar/Navbar';



import { TopCatBar } from './Components';
// import Routes from './Routes';
import Routes from "./Components/Routes"

<<<<<<< HEAD
import {

 
  SideNavBar,
  
} from './Components';
import {Footer1} from "./Components/Footer/Footer"
import LandingPage from './Components/landingPage/LandingPage';

import { NavBar } from './Components/Navbar/Navbar';


=======
>>>>>>> 7a0ff35bb45a5502d5797289b3daa86901f366c8
function App() {

  const [sideBarVisible, setSideBarVisible] = useState(false);
  const { setcartPopUpVisible } = useContext(Context);

useEffect(() => {
  setcartPopUpVisible(true)
}, [setcartPopUpVisible])

  return (
    <div className='App'>
  
        <header className='nav-container'>
          <div className='sticky-nav'>
            <NavigationBar setSideBarVisible={setSideBarVisible}  />
            <section className='top-cat-bar'>
              <TopCatBar />
            </section>
          </div>
          <SideNavBar
            sideBarVisible={sideBarVisible}
            setSideBarVisible={setSideBarVisible}
          />
        </header>
        <main>
          <Routes />
        </main>
        <footer className='footer-container'>footer</footer>



    </div>
  );

}
export default App;
