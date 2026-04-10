import { Outlet, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Footer from "../../containers/Footer";
import Navbar from "../../containers/Navbar";

import HomeScreen from "../../containers/HomeScreen";

import CafeScreen from "../../containers/CafeScreen";

import ExperienceScreen from "../../containers/ExperienceScreen";
import PilgrimageScreen from "../../containers/PilgrimageScreen";
import TrekkingScreen from "../../containers/TrekkingScreen";

import FamilyRoom from "../../containers/FamilyRoom";
import HostelRoom from "../../containers/HostelRoom";
import PrivateDeluxeRoom from "../../containers/PrivateDeluxeRoom";
import StayScreen from "../../containers/StayScreen";

import Call from "../../components/Call";
import WhatsApp from "../../components/WhatsApp";
import AboutUsScreen from "../../containers/AboutUsScreen";
import Error404 from "../../containers/Error404";
import HomePage from "../../containers/HomePage";
import KedarnathHome from "../../containers/KedarnathHome";
import TungnathHome from "../../containers/TungnathHome";

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
