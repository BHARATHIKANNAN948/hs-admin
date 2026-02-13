import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import "../../assets/css/Login/page-auth.css";
import "../../assets/css/Login/perfect-scrollbar.css";
import "../../assets/css/Login/core.css";
import "../../assets/css/Login/theme-default.css";
import "../../assets/css/Login/demo.css";
import "../../assets/css/Dash/apex-charts.css";
import "../../assets/fonts/boxicons.css";
import Dash_img from "../../assets/images/man-with-laptop-light.png";
import Dash_img1 from "../../assets/images/chart-success.png";
import Dash_img2 from "../../assets/images/wallet-info.png";
import Dash_img3 from "../../assets/images/cc-primary.png";
import Dash_img4 from "../../assets/images/paypal.png";
import Chart from "react-apexcharts";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Header";
import LoginAPI from "../../api/services/AdminLogin/adminlogin";
import { toast } from "react-toastify/unstyled";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(false);

  const CountList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.countDashList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData);
        toast.success(response.apiStatus.message);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    CountList();
  }, []);

  let UserName = localStorage.getItem("userName");

  //  Log-out,

  const navigate = useNavigate();

  const AdminLogout = async () => {
    try {
      const responseData = await LoginAPI.signOutAPI();
      console.log("Api response", responseData);

      if (responseData.apiStatus.code === "200") {
        toast.success(responseData.apiStatus.message);
        navigate("/");
        localStorage.clear();
      } else {
        toast.error(`Logout failed: ${responseData.apiStatus.message}`);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      toast.error("An error occurred during the logout process.");
    }
  };

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <DashboardLayout />

          <div class="layout-page">
            <Navbar />

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-md-12 mb-4 order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-7">
                          <div class="card-body text-start">
                            <h5 class="card-title text-primary">
                              Congratulations Bharathi! 🎉
                            </h5>
                            <p class="mb-4">You have done to Login today.</p>

                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#logout"
                              class="dash-logout-btn"
                            >
                              Log out
                            </button>
                          </div>
                        </div>
                        <div class="col-sm-5 text-end text-sm-left">
                          <div class="card-body pb-0 px-0 px-md-4">
                            <img
                              src={Dash_img}
                              height="140"
                              alt="View Badge User"
                              data-app-dark-img="illustrations/man-with-laptop-dark.png"
                              data-app-light-img="illustrations/man-with-laptop-light.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-mobile-alt"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/banner-mobile-list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Banner Mobile Image</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {" "}
                            {String(list.BannerMobile_Count ?? 0).padStart(
                              2,
                              "0"
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-laptop"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/banner-desktop-list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Banner Laptop Image</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.BannerLaptop_Count ?? 0).padStart(
                              2,
                              "0"
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-like"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/chooseus-list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Choose Us</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.MobileApp_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-group"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/ourclient-list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Our Clients</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.ClientsImg_Count ?? 0).padStart(
                              2,
                              "0"
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-wrench"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/service-list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Our Services</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.Services_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-user-check"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/leader-ship"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Leader Ship</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.Ledership_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-user"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/our/team/list"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Key Players</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.OurTeams_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-happy"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/happy/moments"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Happy Moments</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.HappyMoments_Count ?? 0).padStart(
                              2,
                              "0"
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-analyse"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/casestudy"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Case Study</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.CaseStudy_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-layout"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/portfolio"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Portfolio</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.Portfolio_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <div className="card">
                        <div className="card-body text-start">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="dashboard-icon-card">
                              <i class="tf-icons bx bx-support"></i>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardOpt6"
                              >
                                <Link
                                  className="dropdown-item"
                                  to={"/contact-us"}
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span class="d-block mb-1">Contact Us</span>
                          <h3 class="card-title text-nowrap mb-2">
                            {String(list.ContactUs_Count ?? 0).padStart(2, "0")}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="logout"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                          {/* Delete List */}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body text-center">
                        <h4>Are You Sure</h4> <br />
                        <h6 className="mt-n4">
                          You want to Logout the Account?
                        </h6>
                      </div>
                      <div class="modal-footer d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>

                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={AdminLogout}
                          data-bs-dismiss="modal"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
}

export default Dashboard;
