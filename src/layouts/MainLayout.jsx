import { Outlet } from "react-router-dom";
import Banner from "../Components/banner/Banner";
import Navbar from "../Components/Shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <section className="bg-white shadow-lg">
        <section className="w-full lg:py-5 md:py-3 fixed z-10 bg-opacity-85 left-0 right-0">
          <Navbar></Navbar>
        </section>
        <Banner></Banner>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
