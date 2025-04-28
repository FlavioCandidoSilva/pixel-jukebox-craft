
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-spotify-darkGray">
      <Sidebar />
      
      <main className="md:ml-64 pt-4 pb-24 min-h-screen animate-fade-in">
        <div className="container px-4 md:px-6">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
