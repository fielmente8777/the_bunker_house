import React from "react";
import { appTitleOne, appTitleTwo } from "../csconfig";

const LoadingScreen = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"/logo.png"}
          className="App-logo animate-pulse mb-20"
          alt="logo"
        />
        <p className="text-3xl">
          <span className="text-app-primary">{appTitleOne}</span>
          <span className="text-app-secondary">{appTitleTwo}</span>
        </p>
        {/* <p className="animate-pulse">
                    <span className="text-app-primary">[ COMING </span>
                    <span className="text-app-secondary">SOON ]</span>
                </p> */}
      </header>
    </div>
  );
};

export default LoadingScreen;
