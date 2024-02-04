import React from "react";
import {DashboardStatus, Header, Navbar, NewRelease, Profile, Released} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      {/* <Profile /> */}
      <DashboardStatus />
      <div className="flex items-center gap-16">
       <NewRelease />
       <Released />
      </div>
    </>
  )
}

export default App
