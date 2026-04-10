import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";

import HomeScreen from "../../containers/HomeScreen";

import CafeScreen from "../../containers/CafeScreen";

import ExperienceScreen from "../../containers/ExperienceScreen";
import TrekkingScreen from "../../containers/TrekkingScreen";
import PilgrimageScreen from "../../containers/PilgrimageScreen";

import StayScreen from "../../containers/StayScreen";
import PrivateDeluxeRoom from "../../containers/PrivateDeluxeRoom";
import HostelRoom from "../../containers/HostelRoom";
import FamilyRoom from "../../containers/FamilyRoom";

import Error404 from "../../containers/Error404";
import AboutUsScreen from "../../containers/AboutUsScreen";
import KedarnathHome from "../../containers/KedarnathHome";
import TungnathHome from "../../containers/TungnathHome";
import HomePage from "../../containers/HomePage";
import WhatsApp from "../../components/WhatsApp";
import Call from "../../components/Call";

const DefaultLayout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <div className="top-0 z-50 sticky">
          <Navbar />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chopta" element={<Outlet />}>
              <Route path="/chopta" element={<HomeScreen />} />
              <Route path="the-bunker-house" element={<AboutUsScreen />} />
              <Route path="cafe" element={<CafeScreen />} />
              <Route path="experience" element={<Outlet />}>
                <Route index element={<ExperienceScreen />} />
                <Route path="trekking" element={<TrekkingScreen />} />
                <Route path="pilgrimage" element={<PilgrimageScreen />} />
              </Route>
              <Route path="stay" element={<Outlet />}>
                <Route index element={<StayScreen />} />
                <Route
                  path="privatedeluxeroom"
                  element={<PrivateDeluxeRoom />}
                />
                <Route path="bunkroom" element={<HostelRoom />} />
                <Route path="familyroom" element={<FamilyRoom />} />
              </Route>
            </Route>
            <Route path="/kedarnath" element={<Outlet />}>
              <Route path="/kedarnath" element={<KedarnathHome />} />
            </Route>
            <Route path="/tungnath" element={<Outlet />}>
              <Route path="/tungnath" element={<TungnathHome />} />
            </Route>
            {/* <Route path="/policies" element={<Outlet />}>
              <Route path="/policies" element={<Policies />} />
            </Route> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>

        <div className="shadow">
          <Footer />
        </div>
        <WhatsApp />
        <Call />
      </BrowserRouter>
    </div>
  );
};

export default DefaultLayout;
