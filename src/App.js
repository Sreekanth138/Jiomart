import React, { useState } from 'react';
import './App.css';
import {
  TopCatBar,
  NavBar,
  SideNavBar,
  Routes
} from './Components';

function App() {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  return (
    <div className='App'>
      <header className='nav-container'>
        <NavBar setSideBarVisible={setSideBarVisible} />
        <section className='top-cat-bar'>
          <TopCatBar  />
        </section>
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
