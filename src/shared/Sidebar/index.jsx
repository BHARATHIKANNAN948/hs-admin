import React, { useEffect, useState } from "react";
import "../../assets/css/Login/page-auth.css";
import "../../assets/css/Login/perfect-scrollbar.css";
import "../../assets/css/Login/core.css";
import "../../assets/css/Login/theme-default.css";
import "../../assets/css/Login/demo.css";
import "../../assets/css/Dash/apex-charts.css";
import "../../assets/fonts/boxicons.css";
import Logo_image from "../../assets/images/logo-hs.png";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const isNewsActive = ["/casestudy-form", "/casestudy/manage/gallery"].some((path) => location.pathname.startsWith(path));
  const isourlientActive = ["/ourclient-list"].includes(location.pathname);
  const isDesktopBanner = ["/banner-desktop-form"].includes(location.pathname);
  const isChooseUs = ["/chooseus-form"].some((path) =>location.pathname.startsWith(path));
  const isService = ["/service-form"].some((path) =>location.pathname.startsWith(path));
  const isProduct = ["/product-form"].some((path) =>location.pathname.startsWith(path));
  const isContactus = ["/contact-us"].includes(location.pathname);

  //

  const isCatalogRoute = [
    "/banner-mobile-list",
    "/banner-desktop-list",
    "/banner-mobile-form",
    "/banner-desktop-form",
  ].some((path) => location.pathname.startsWith(path));

  const [isDropdownOpen6, setDropdownOpen6] = useState(isCatalogRoute);
  const toggleDropdown6 = () => {
    setDropdownOpen6(!isDropdownOpen6);
  };

  useEffect(() => {
    const validRoutes6 = [
      "/banner-mobile-list",
      "/banner-desktop-list",
      "/banner-mobile-form",
      "/banner-desktop-form",
    ];
    if (validRoutes6.some((path) => location.pathname.startsWith(path))) {
      setDropdownOpen6(true);
    } else {
      setDropdownOpen6(false);
    }
  }, [location.pathname]);

  
  //

  const isCatalogRoute1 = [
    "/our/team/list",
    "/happy/moments",
    "/leader-ship",
  ].some((path) => location.pathname.startsWith(path));

  const [isDropdownOpen, setDropdownOpen] = useState(isCatalogRoute1);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const validRoutes = ["/our/team/list", "/happy/moments", "/leader-ship"];
    if (validRoutes.some((path) => location.pathname.startsWith(path))) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }, [location.pathname]);

  // portfolio dropdown open,

  const isCatalogRoutePortfolio = ["/category-list", "/portfolio"].some(
    (path) => location.pathname.startsWith(path)
  );

  const [isDropdownOpenPort, setDropdownOpenPort] = useState(
    isCatalogRoutePortfolio
  );
  const toggleDropdownPort = () => {
    setDropdownOpenPort(!isDropdownOpenPort);
  };

  useEffect(() => {
    const validRoutes = ["/category-list", "/portfolio"];
    if (validRoutes.some((path) => location.pathname.startsWith(path))) {
      setDropdownOpenPort(true);
    } else {
      setDropdownOpenPort(false);
    }
  }, [location.pathname]);

    // Casestudy dropdown open,

  const isCatalogRouteCase = ["/casestudy-category","/casestudy-list","/casestudy-form","/casestudy/manage/gallery"].some(
    (path) => location.pathname.startsWith(path)
  );

  const [isDropdownOpenCase, setDropdownOpenCase] = useState(
    isCatalogRouteCase
  );
  const toggleDropdownCase = () => {
    setDropdownOpenCase(!isDropdownOpenCase);
  };

  useEffect(() => {
    const validRoutesCase = ["/casestudy-category","/casestudy-list","/casestudy-form","/casestudy/manage/gallery"];
    if (validRoutesCase.some((path) => location.pathname.startsWith(path))) {
      setDropdownOpenCase(true);
    } else {
      setDropdownOpenCase(false);
    }
  }, [location.pathname]);

  return (
    <>
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme h-100"
      >
        <div class="app-brand demo mb-3">
          <Link to={"/dashboard"} class="app-brand-link">
            <img src={Logo_image} alt="logo-img" className="sidebar-logo-img" />
          </Link>

          <a
            href="javascript:void(0);"
            class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <li
            className={`menu-item ${
              activeItem === "/dashboard" ? "active" : ""
            }`}
          >
            <Link
              to="/dashboard"
              class="menu-link"
              onClick={() => {
                setActiveItem("/dashboard");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>
          <li
            className={`menu-item ${
              [
                "/banner-mobile-list",
                "/banner-desktop-list",
                "/banner-mobile-form",
                "/banner-desktop-form",
              ].some((path) => location.pathname.startsWith(path))
                ? "active"
                : ""
            }`}
          >
            <a className="menu-link" onClick={toggleDropdown6}>
              <i className="menu-icon tf-icons bx bx-image-alt"></i>
              <div data-i18n="Account Settings">Banner Image</div>
              <i
                className={`bx ${
                  isDropdownOpen6 ? "bx-chevron-down" : "bx-chevron-right"
                }`}
                style={{ marginLeft: "auto" }}
              ></i>
            </a>
            <ul
              className={`menu-sub ${isDropdownOpen6 ? "d-block" : "d-none"}`}
            >
              <li className="menu-item">
                <Link
                  to="/banner-mobile-list"
                  className={`menu-link ${
                    location.pathname.startsWith("/banner-mobile")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen6(true);
                    setActiveItem("/banner-mobile-list");
                  }}
                >
                  <div data-i18n="Account">
                    Mobile Screen
                  </div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/banner-desktop-list"
                  className={`menu-link ${
                    location.pathname.startsWith("/banner-desktop")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen6(true);
                    setActiveItem("/banner-desktop-list");
                  }}
                >
                  <div data-i18n="Account">
                    Desktop Screen
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item ${
              activeItem === "/chooseus-list" || isChooseUs ? "active" : ""
            }`}
          >
            <Link
              to="/chooseus-list"
              class="menu-link"
              onClick={() => {
                setActiveItem("/chooseus-list");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-like"></i>
              <div data-i18n="Basic">Choose Us</div>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "/ourclient-list" || isourlientActive
                ? "active"
                : ""
            }`}
          >
            <Link
              to="/ourclient-list"
              class="menu-link"
              onClick={() => {
                setActiveItem("/ourclient-list");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-group"></i>
              <div data-i18n="Basic">Our Clients</div>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "/product-list" || isProduct ? "active" : ""
            }`}
          >
            <Link
              to="/product-list"
              class="menu-link"
              onClick={() => {
                setActiveItem("/product-list");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-store"></i>
              <div data-i18n="Basic">Products</div>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "/service-list" || isService ? "active" : ""
            }`}
          >
            <Link
              to="/service-list"
              class="menu-link"
              onClick={() => {
                setActiveItem("/service-list");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-wrench"></i>
              <div data-i18n="Basic">Our Services</div>
            </Link>
          </li>
          <li
            className={`menu-item ${
              ["/our/team/list", "/leader-ship", "/happy/moments"].some(
                (path) => location.pathname.startsWith(path)
              )
                ? "active"
                : ""
            }`}
          >
            <a className="menu-link" onClick={toggleDropdown}>
              <i class="menu-icon tf-icons bx bx-user-pin"></i>
              <div data-i18n="Account Settings">Our Team</div>
              <i
                className={`bx ${
                  isDropdownOpen ? "bx-chevron-down" : "bx-chevron-right"
                }`}
                style={{ marginLeft: "auto" }}
              ></i>
            </a>
            <ul className={`menu-sub ${isDropdownOpen ? "d-block" : "d-none"}`}>
              <li className="menu-item">
                <Link
                  to="/leader-ship"
                  className={`menu-link ${
                    location.pathname.startsWith("/leader-ship") ? "active" : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen(true);
                    setActiveItem("/leader-ship");
                  }}
                >
                  <div data-i18n="Account">Leader Ship</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/our/team/list"
                  className={`menu-link ${
                    location.pathname.startsWith("/our/team/list")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen(true);
                    setActiveItem("/our/team/list");
                  }}
                >
                  <div data-i18n="Account">Key Players</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/happy/moments"
                  className={`menu-link ${
                    activeItem === "/happy/moments" || isDesktopBanner
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen(true);
                    setActiveItem("/happy/moments");
                  }}
                >
                  <div data-i18n="Account">Happy Moments</div>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li
            className={`menu-item ${
              activeItem === "/casestudy" || isNewsActive ? "active" : ""
            }`}
          >
            <Link
              to="/casestudy"
              class="menu-link"
              onClick={() => {
                setActiveItem("/casestudy");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-analyse"></i>
              <div data-i18n="Basic">Case Study</div>
            </Link>
          </li> */}
            <li
            className={`menu-item ${
              ["/casestudy-category","/casestudy-list","/casestudy-form","/casestudy/manage/gallery"].some((path) =>
                location.pathname.startsWith(path)
              )
                ? "active"
                : ""
            }`}
          >
            <a className="menu-link" onClick={toggleDropdownCase}>
              <i class="menu-icon tf-icons bx bx-analyse"></i>
              <div data-i18n="Basic">Case Study</div>
              <i
                className={`bx ${
                  isDropdownOpenCase ? "bx-chevron-down" : "bx-chevron-right"
                }`}
                style={{ marginLeft: "auto" }}
              ></i>
            </a>
            <ul
              className={`menu-sub ${
                isDropdownOpenCase ? "d-block" : "d-none"
              }`}
            >
              <li className="menu-item">
                {/* <Link
                  to="/category-list"
                  className={`menu-link ${
                    activeItem === "/category-list" || isCategoryPortfolio
                      ? "active"
                      : ""
                  }`} */}
                <Link
                  to="/casestudy-category"
                  className={`menu-link ${
                    location.pathname.startsWith("/casestudy-category")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen6(true);
                    setActiveItem("/casestudy-category");
                  }}
                >
                  <div data-i18n="Account">
                    {/* <i className="tf-icons bx bx-mobile-alt"></i> */}
                    Casestudy platform
                  </div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/casestudy-list"
                  className={`menu-link ${
                    location.pathname.startsWith("/casestudy-list") ? "active" : ""
                  }`}
                  onClick={() => {
                    toggleDropdownCase(true);
                    setActiveItem("/casestudy-list");
                  }}
                >
                  <div data-i18n="Account">
                    {/* <i className="tf-icons bx bx-mobile-alt"></i> */}
                    Casestudy List
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item ${
              ["/category-list", "/portfolio"].some((path) =>
                location.pathname.startsWith(path)
              )
                ? "active"
                : ""
            }`}
          >
            <a className="menu-link" onClick={toggleDropdownPort}>
              <i class="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Account Settings">Portfolio</div>
              <i
                className={`bx ${
                  isDropdownOpenPort ? "bx-chevron-down" : "bx-chevron-right"
                }`}
                style={{ marginLeft: "auto" }}
              ></i>
            </a>
            <ul
              className={`menu-sub ${
                isDropdownOpenPort ? "d-block" : "d-none"
              }`}
            >
              <li className="menu-item">
                {/* <Link
                  to="/category-list"
                  className={`menu-link ${
                    activeItem === "/category-list" || isCategoryPortfolio
                      ? "active"
                      : ""
                  }`} */}
                <Link
                  to="/category-list"
                  className={`menu-link ${
                    location.pathname.startsWith("/category-list")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen6(true);
                    setActiveItem("/category-list");
                  }}
                >
                  <div data-i18n="Account">
                    {/* <i className="tf-icons bx bx-mobile-alt"></i> */}
                    Portfolio category
                  </div>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/portfolio"
                  className={`menu-link ${
                    location.pathname.startsWith("/portfolio") ? "active" : ""
                  }`}
                  onClick={() => {
                    setDropdownOpen6(true);
                    setActiveItem("/portfolio");
                  }}
                >
                  <div data-i18n="Account">
                    {/* <i className="tf-icons bx bx-mobile-alt"></i> */}
                    Portfolio List
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item ${
              activeItem === "/contact-us" || isContactus ? "active" : ""
            }`}
          >
            <Link
              to="/contact-us"
              class="menu-link"
              onClick={() => {
                setActiveItem("/contact-us");
                setDropdownOpen6(false);
              }}
            >
              <i class="menu-icon tf-icons bx bx-support"></i>
              <div data-i18n="Basic">Contact Us</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
