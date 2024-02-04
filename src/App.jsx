import React from "react";
import {DashboardStatus, Header, Navbar, NewRelease, Profile} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      {/* <Profile /> */}
      <DashboardStatus />
      <div>
       <NewRelease />
      </div>
    </>
  )
}

export default App
