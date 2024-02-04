import React from "react";
import './App.css'
import {DashboardStatus, Footer, Header, Navbar, NewRelease, Profile, Released} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Profile />
      <DashboardStatus />
      <div className="flex items-center gap-16 border-b-2 pb-52">
       <NewRelease />
       <Released />
      </div>
      <Footer />
    </>
  )
}

export default App
