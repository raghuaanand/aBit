import React from "react";
import {DashboardStatus, Header, Navbar, NewRelease, Profile} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      {/* <Profile /> */}
      <NewRelease />
      <DashboardStatus />
    </>
  )
}

export default App
