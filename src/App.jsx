import logo from "./logo.svg";
import "./App.css";
import Login from "./views/SignIn/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard/dashboard";
import CaseStudy from "./views/CaseStudy";
import CaseStudy_Form from "./components/Forms/casestudyForm";
import Portfolio from "./views/Porfolio";
import Portfolio_Form from "./components/Forms/portfolioForm";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./views/ForgetPassword/forget";
import MyProfile from "./views/MyProfile/profile";
import Banner_Mobile from "./views/BannerImage/mobile";
import Mobile_Banner_Form from "./components/Forms/mobileBannerForm";
import Banner_Desktop from "./views/BannerImage/laptop";
import Desktop_Banner_Form from "./components/Forms/desktopBannerForm";
import ChooseUs from "./views/ChooseUs";
import ChooseUs_Form from "./components/Forms/chooseusForm";
import Services from "./views/Services";
import Service_Form from "./components/Forms/serviceForm";
import OurClients from "./views/OurClients";
import OurTeam_List from "./components/Lists/ourteamList";
import KeyPlayers_OurTeam from "./views/OurTeam/team";
import OurTeamPlayers_Form from "./components/Forms/ourTeamForm";
import HappyMoments from "./views/OurTeam/happymoments";
import ManageImage_Casestudy from "./components/Drag & Drop/casestudyGallery";
import ContactUs from "./views/ContactUs";
import LeaderShip_List from "./components/Lists/leadershipList";
import LeaderShip_Form from "./components/Forms/leadershipForm";
import LeaderShip from "./views/OurTeam/leadership";
import PortfolioCategory from "./views/Porfolio/category";
import PortfolioCategory_Form from "./components/Forms/categoryPortfolio";
import PageNotFound from "./components/404";
import CasestudyCategory from "./components/Lists/casestudyCategory";
import CaseStudyCate from "./views/CaseStudy/category";
import CaseStudyCategoryForm from "./components/Forms/casestudyCategoryForm";
import Product_List from "./components/Lists/productList";
import Product_Form from "./components/Forms/productForm";
import Products from "./views/Product";
import ManageImage_Product from "./components/Drag & Drop/productGallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/account/my-profile" element={<MyProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/casestudy-list" element={<CaseStudy />} />
          <Route path="/casestudy-category" element={<CaseStudyCate />} />
          <Route path="/casestudy-category-form" element={<CaseStudyCategoryForm />} />
          <Route path="/casestudy-category-form/:id" element={<CaseStudyCategoryForm />} />
          <Route path="/casestudy-list/form" element={<CaseStudy_Form />} />
          <Route path="/casestudy-list/form/:id" element={<CaseStudy_Form />} />
          <Route
            path="/casestudy-list/manage/gallery/:id"
            element={<ManageImage_Casestudy />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-form" element={<Portfolio_Form />} />
          <Route path="/portfolio-form/:id" element={<Portfolio_Form />} />
          <Route path="/banner-mobile-list" element={<Banner_Mobile />} />
          <Route path="/banner-mobile-form" element={<Mobile_Banner_Form />} />
          <Route
            path="/banner-mobile-form/:id"
            element={<Mobile_Banner_Form />}
          />
          <Route path="/banner-desktop-list" element={<Banner_Desktop />} />
          <Route
            path="/banner-desktop-form"
            element={<Desktop_Banner_Form />}
          />
          <Route
            path="/banner-desktop-form/:id"
            element={<Desktop_Banner_Form />}
          />
          <Route path="/chooseus-list" element={<ChooseUs />} />
          <Route path="/chooseus-form" element={<ChooseUs_Form />} />
          <Route path="/chooseus-form/:id" element={<ChooseUs_Form />} />
          <Route path="/service-list" element={<Services />} />
          <Route path="/service-form" element={<Service_Form />} />
          <Route path="/service-form/:id" element={<Service_Form />} />
          <Route path="/ourclient-list" element={<OurClients />} />
          <Route path="/our/team/list" element={<KeyPlayers_OurTeam />} />
          <Route path="/our/team/list/form" element={<OurTeamPlayers_Form />} />
          <Route
            path="/our/team/list/form/:id"
            element={<OurTeamPlayers_Form />}
          />
          <Route path="/happy/moments" element={<HappyMoments />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/leader-ship" element={<LeaderShip />} />
          <Route path="/leader-ship/form" element={<LeaderShip_Form />} />
          <Route path="/leader-ship/form/:id" element={<LeaderShip_Form />} />
          <Route path="/category-list" element={<PortfolioCategory />} />
          <Route
            path="/category-list-form"
            element={<PortfolioCategory_Form />}
          />
          <Route
            path="/category-list-form/:id"
            element={<PortfolioCategory_Form />}
          />
          <Route path="/product-list" element={<Products />} />
          <Route path="/product-form" element={<Product_Form />} />
          <Route path="/product-form/:id" element={<Product_Form />} />
          <Route path="/product-list/manage/gallery/:id" element={<ManageImage_Product />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
    </div>
  );
}

export default App;
