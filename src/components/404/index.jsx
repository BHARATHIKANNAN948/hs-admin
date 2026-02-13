import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import VideoGif from "./404-error.webm";

function PageNotFound() {
  return (
    <>
        <div className="notfound-error-page p-5 mt-5">
          <div>
            <video
            width="100%"
            height="400px"
            src={VideoGif}
            autoPlay
            muted
            loop
            playsInline
          />
            <h5 className="oops-title">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 640 640"
                fill="red"
              >
                <path d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.9 536.6 69.6 524.5C62.3 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 232C306.7 232 296 242.7 296 256L296 368C296 381.3 306.7 392 320 392C333.3 392 344 381.3 344 368L344 256C344 242.7 333.3 232 320 232zM346.7 448C347.3 438.1 342.4 428.7 333.9 423.5C325.4 418.4 314.7 418.4 306.2 423.5C297.7 428.7 292.8 438.1 293.4 448C292.8 457.9 297.7 467.3 306.2 472.5C314.7 477.6 325.4 477.6 333.9 472.5C342.4 467.3 347.3 457.9 346.7 448z" />
              </svg>{" "}PAGE NOT FOUND</h5>
            <p className="oops-description">
              The page you are looking for might have been removed <br />
              had its name changed or is temporarily unavailable.
            </p>
            <Link to={"/"}>
              {" "}
              <button className="oops-button">GO TO LOGIN</button>
            </Link>
          </div>
        </div>
    </>
  );
}

export default PageNotFound;
