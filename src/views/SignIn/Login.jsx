import React from "react";
import "../../assets/css/Login/page-auth.css";
import "../../assets/css/Login/perfect-scrollbar.css";
import "../../assets/css/Login/core.css";
import "../../assets/css/Login/theme-default.css";
import "../../assets/css/Login/demo.css";
import HsLogo_Image from "../../assets/images/HS Icon.jpg";
import Login_Field from "../../components/Forms/loginForm";

function Login() {

  return (
    <>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="index.html" class="app-brand-link gap-2">
                    <img src={HsLogo_Image} alt="" width="100" />
                  </a>
                </div>
                <h4 class="mb-2">Welcome to Hermon Solutions!</h4>
                <p class="mb-4">
                  Please sign-in to your account and start the adventure
                </p>

                <Login_Field />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
