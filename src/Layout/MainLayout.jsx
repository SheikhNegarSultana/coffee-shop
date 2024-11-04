import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
    return (
        <div>

            {/* NavBar */}
            <NavBar></NavBar>

            <div className=" min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                 {/* Dynamic Section */}
                 <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;