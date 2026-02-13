import React, { useEffect, useState, useRef } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import "../../assets/css/Login/page-auth.css";
import "../../assets/css/Login/perfect-scrollbar.css";
import "../../assets/css/Login/core.css";
import "../../assets/css/Login/theme-default.css";
import "../../assets/css/Login/demo.css";
import "../../assets/css/Dash/apex-charts.css";
import "../../assets/fonts/boxicons.css";
// import "./index.css";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginAPI from "../../api/services/AdminLogin/adminlogin";
import { toast } from "react-toastify";
import { baseURL } from "../../api/api";
import { CKEditor } from "ckeditor4-react";

function CaseStudyCategoryForm() {
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [categorydrop, setCategoryDropdown] = useState([]);
  const [platformdrop, setPlateformDropdown] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState("");
  const [getid, setGetId] = useState("");
  const Navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");
  const editorInstanceRef = useRef(null);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [editorReady, setEditorReady] = useState(true);
  const [editloading, seteditLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setMainImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // getid params,

  useEffect(() => {
    const queryParams = window.location.pathname;
    const myArray = queryParams.split("/");
    setGetId(myArray[2]);
    GetApiUpdate(myArray[2]);
  }, []);

  // create,

  const PortfolioCreate = async () => {
    setSubmit(true);
    setLoading(true);
    const formData = new FormData();
    formData.append("technology_name", title);
    // formData.append("description", description);

    if (mainImage) {
      formData.append("technology_image", mainImage.file);
    }

    try {
      const response = await LoginAPI.caseStudyPlatformSubCreate(formData);
      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        Navigate("/casestudy-category");
      } else {
        toast.error(response.apiStatus.message);
      }
    } catch (error) {
      toast.error("An error occurred while creating the data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    processGalleryFiles(files);
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    processGalleryFiles(files);
  };

  const processGalleryFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const imagePreviews = imageFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setGalleryImages((prev) => [...prev, ...imagePreviews]);
  };


  // getapi,

  const GetApiUpdate = async (id) => {
    try {
      const response = await LoginAPI.caseStudyPlatformSubGet(id);
      const data = response.responseData;

      setGetId(data.id);
      setTitle(data.technology_name);
      // setDescription(data.description);
      // setCurrentStatus(
      //   data.active_status == 0
      //     ? "Inactive"
      //     : "" || data.active_status == 1
      //     ? "Active"
      //     : ""
      // );

      setHasUserTyped(false);

      if (data.image_path) {
        setMainImage({
          file: null,
          preview: `${baseURL}${data.image_path}`,
        });
      }
    } catch {}
  };

  // update,

  const portfolioUpdate = async () => {
    const updateStatus = currentStatus === "Active" ? 1 : 0;

    const formData = new FormData();
    formData.append("id", getid);
    formData.append("technology_name", title);
    // formData.append("description", description);
    // formData.append("active_status", updateStatus);

    if (mainImage && mainImage.file) {
      formData.append("technology_image", mainImage.file);
    }

    try {
      const response = await LoginAPI.caseStudyPlatformSubUpdate(formData);

      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        Navigate("/casestudy-category");
      } else {
        toast.error(response.apiStatus.message);
      }
    } catch {
      toast.error("An error occurred while updating the News.");
    }
  };

    useEffect(() => {
    if (
      editorInstanceRef.current &&
      !hasUserTyped &&
      description !== undefined
    ) {
      editorInstanceRef.current.setData(description);
    }
  }, [description, hasUserTyped]);

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <DashboardLayout />
          <div class="layout-page">
            <Navbar />
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y text-start">
                <h4 class="fw-bold py-3 mb-4">
                  <Link to={"/casestudy-category"}>
                    <span class="text-muted fw-light">CaseStudy Platform /</span>
                  </Link>{" "}
                  {getid ? <span>Update</span> : <span>Create</span>}
                </h4>
                <div class="card p-4">
                  <div className="row">
                    <div className="col-md-6">
                      <label for="defaultFormControlInput" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="defaultFormControlInput"
                        placeholder="Enter your title"
                        aria-describedby="defaultFormControlHelp"
                        value={title}
                        style={
                          submit && title.length == 0
                            ? { borderColor: "red" }
                            : { borderColor: "" }
                        }
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      {submit && title.length == 0 ? (
                        <div className="text-danger error-message-required">
                          *Title is required{" "}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label for="formFile" class="form-label">
                        Image
                      </label>
                      <input
                        class="form-control"
                        // style={
                        //   submit && image.length == 0
                        //     ? { borderColor: "red" }
                        //     : { borderColor: "" }
                        // }
                        type="file"
                        id="formFile"
                        onChange={handleFileChange}
                      />
                      {mainImage && (
                        <div className="col-md-3 mb-3 position-relative mt-3">
                          <img
                            src={mainImage.preview}
                            alt="Main Preview"
                            className="img-fluid rounded shadow"
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      )}
                    </div>
                    {/* <div className="col-md-12">
                      <div className="mt-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Description
                        </label>

                        {editorReady && (
                          <CKEditor
                            config={{
                              toolbar: [
                                [
                                  "Bold",
                                  "Italic",
                                  "Underline",
                                  "Strike",
                                  "Image",
                                  "Table",
                                  "Link",
                                  "Unlink",
                                  "Anchor",
                                ],
                                [
                                  "NumberedList",
                                  "BulletedList",
                                  "Outdent",
                                  "Indent",
                                ],
                                [
                                  "JustifyLeft",
                                  "JustifyCenter",
                                  "JustifyRight",
                                ],
                                ["Styles", "Format", "Font", "FontSize"],
                              ],
                              versionCheck: false,
                              resize_enabled: false,
                              removePlugins: "about",
                              ignoreUnsupportedBanner: true,
                            }}
                            onInstanceReady={(event) => {
                              editorInstanceRef.current = event.editor;
                              if (description) {
                                event.editor.setData(description);
                              }
                            }}
                            onChange={(event) => {
                              setHasUserTyped(true);
                              setDescription(event.editor.getData());
                            }}
                          />
                        )}
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="col-md-6">
                    {getid && (
                      <div>
                        <div className="mt-2">
                          <label for="largeSelect" class="form-label">
                            Status
                          </label>
                          <div class="form-check form-switch mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked={currentStatus === "Active"}
                              onChange={(e) =>
                                setCurrentStatus(
                                  e.target.checked ? "Active" : "Inactive"
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div> */}
                  <div className="d-flex gap-2 justify-content-center mt-3">
                    <Link to={"/casestudy-category"}>
                      <button className="btn btn-secondary">Cancel</button>
                    </Link>
                    {getid ? (
                      <button
                        className="btn btn-primary"
                        onClick={portfolioUpdate}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={PortfolioCreate}
                      >
                        Create
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
}

export default CaseStudyCategoryForm;
