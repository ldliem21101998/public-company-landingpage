/** @format */
import UniverseTime from "./Section/UniverseTime";
import React from "react";
import Root from "./Section/Root";
import { Header } from "../../components";

const Landing = () => {

  return (
    <>
      <div className="relative overflow-hidden">
        <div key="universeTime" className="w-full h-[100vh]">
          <UniverseTime />
        </div>
        <Header />
        <Root key="root" id={"_root"} />
      </div>
    </>
  );
};

export default Landing;