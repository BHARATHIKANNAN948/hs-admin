import React, { useEffect, useRef, useState } from "react";
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
import { CKEditor } from "ckeditor4-react";
import { baseURL } from "../../api/api";
import PlatformMultiSelect from "./plat";

function Product_Form() {
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [categorydrop, setCategoryDropdown] = useState([]);
  const [platformdrop, setPlateformDropdown] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  console.log(category, "Category");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [challenge, setChallenges] = useState("");
  const [solution, setSolutions] = useState("");
  const [loading, setLoading] = useState("");
  const [getid, setGetId] = useState("");
  const Navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const editorInstanceRef = useRef(null);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [editorReady, setEditorReady] = useState(true);
  const [editloading, seteditLoading] = useState(false);
  const overviewEditorRef = useRef(null);
  const [hasUserTypedOverview, setHasUserTypedOverview] = useState(false);
  const challengeEditorRef = useRef(null);
  const [hasUserTypedChallenge, setHasUserTypedChallenge] = useState(false);
  const solutionEditorRef = useRef(null);
  const [hasUserTypedSolution, setHasUserTypedSolution] = useState(false);
  const dateRef = useRef(null);

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

  const CasestudyCreate = async () => {
    setSubmit(true);
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", category);
    // formData.append("platform_id", platform);
    platform.forEach((id, index) => {
      formData.append(`platform_id[${index}]`, id);
    });
    formData.append("description", description);
    formData.append("project_overview", overview);
    // formData.append("challenges", challenge);
    // formData.append("solutions", solution);
    // formData.append("release_date", date);

    if (mainImage) {
      formData.append("main_image", mainImage.file);
      console.log("main image", mainImage.file);
    }

    galleryImages.forEach((img, index) => {
      formData.append(`gallary_image[${index}]`, img.file);
      console.log(`gallery image [${index}]`, img.file);
    });

    try {
      const response = await LoginAPI.productsCreate(formData);
      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        Navigate("/product-list");
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

  // Category Dropdown

  const CategoryList = async () => {
    try {
      const responseData = await LoginAPI.casestudyCategoryList();
      if (responseData.apiStatus.code === "200") {
        setCategoryDropdown(responseData.responseData.categoryList);
      } else {
        toast.error(responseData.apiStatus.message);
      }
    } catch (error) {
      toast.error("An error occurred while fetching the dropdown list.");
    }
  };

  useEffect(() => {
    CategoryList();
  }, []);

  // Plateform dropown

  const PlatformList = async () => {
    try {
      const responseData = await LoginAPI.caseStudyPlatformSubList();
      if (responseData.apiStatus.code === "200") {
        setPlateformDropdown(responseData.responseData);
      } else {
        toast.error(responseData.apiStatus.message);
      }
    } catch (error) {
      toast.error("An error occurred while fetching the dropdown list.");
    }
  };

  useEffect(() => {
    PlatformList();
  }, []);

  // getapi,

  const GetApiUpdate = async (id) => {
    try {
      const response = await LoginAPI.productsGet(id);
      const data = response.responseData.ProductList;

      setGetId(data.id);
      setTitle(data.title);
      setDescription(data.description);
      setOverview(data.project_overview);
      const foundCategory = categorydrop.find(
        (cat) => cat.category_name === (data.category_name || "")
      );

      setCategory(foundCategory ? foundCategory.category_name : ""); 
      setCategoryId(foundCategory ? foundCategory.id : "");
      const platformIds = data.platform_details.map((plat) => plat.id);
      setPlatform(platformIds);
      setCurrentStatus(
        data.active_status == 0
          ? "Inactive"
          : "" || data.active_status == 1
          ? "Active"
          : ""
      );
      setHasUserTyped(false);

      if (
        data.mainImage &&
        data.mainImage.path
      ) {
        setMainImage({
          file: null,
          preview: `${baseURL}${data.mainImage.path}`,
        });
      }

      if (Array.isArray(data.gallaryImages)) {
        const galleryFromServer = data.gallaryImages.map((img) => ({
          id: img.id,
          file: null,
          preview: `${baseURL}${img.path}`,
          isFromServer: true,
        }));
        setGalleryImages(galleryFromServer);
      } else {
        setGalleryImages([]);
      }
    } catch {}
  };

  useEffect(() => {
    if (getid && categorydrop.length && platformdrop.length) {
      GetApiUpdate(getid);
    }
  }, [categorydrop, platformdrop]);

  // update,

  const CaseStudyUpdate = async () => {
    const updateStatus = currentStatus === "Active" ? 1 : 0;

    const formData = new FormData();
    formData.append("product_id", getid);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("project_overview", overview);
    // formData.append("platform_id", platform);
    platform.forEach((id, index) => {
      formData.append(`platform_id[${index}]`, id);
    });
    formData.append("category_id", categoryId);
    formData.append("active_status", updateStatus);

    if (mainImage && mainImage.file) {
      formData.append("main_image", mainImage.file);
    }

    galleryImages.forEach((img, index) => {
      formData.append(`gallary_image[${index}]`, img.file);
    });

    try {
      const response = await LoginAPI.productsUpdate(formData);

      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        Navigate("/product-list");
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

  useEffect(() => {
    if (
      overviewEditorRef.current &&
      !hasUserTypedOverview &&
      overview !== undefined
    ) {
      overviewEditorRef.current.setData(overview);
    }
  }, [overview, hasUserTypedOverview]);

  useEffect(() => {
    if (
      challengeEditorRef.current &&
      !hasUserTypedChallenge &&
      challenge !== undefined
    ) {
      challengeEditorRef.current.setData(challenge);
    }
  }, [challenge, hasUserTypedChallenge]);

  useEffect(() => {
    if (
      solutionEditorRef.current &&
      !hasUserTypedSolution &&
      solution !== undefined
    ) {
      solutionEditorRef.current.setData(solution);
    }
  }, [solution, hasUserTypedSolution]);

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
                  <Link to={"/product-list"}>
                    <span class="text-muted fw-light">Products /</span>
                  </Link>{" "}
                  {getid ? <span>Update</span> : <span>Create</span>}
                </h4>
                <div class="card p-4">
                  <div className="row">
                    <div className="col-md-6">
                      <label for="defaultFormControlInput" class="form-label">
                        Category
                      </label>
                      <select
                        id="defaultSelect"
                        className="form-select"
                        style={
                          submit && category.length === 0
                            ? { borderColor: "red" }
                            : { borderColor: "" }
                        }
                        value={category}
                       onChange={(e) => setCategory(e.target.value)}
                        // onChange={(e) => {
                        //   const selectedName = e.target.value;
                        //   setCategory(selectedName);
                        //   const selectedCat = categorydrop.find(
                        //     (c) => c.category_name === selectedName
                        //   );
                        //   setCategoryId(selectedCat ? selectedCat.id : "");
                        // }}
                      >
                        <option value="">Select Category</option>
                        {categorydrop.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.category_name}
                          </option>
                        ))}
                      </select>
                      {submit && category.length == 0 ? (
                        <div className="text-danger error-message-required">
                          *Category is required{" "}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label for="defaultFormControlInput" class="form-label">
                        Platform
                      </label>
                    
                      <PlatformMultiSelect
                        platformdrop={platformdrop}
                        onChange={(selectedArray) => setPlatform(selectedArray)}
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label for="defaultFormControlInput" class="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="defaultFormControlInput"
                        placeholder="Project Title"
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
                    <div className="col-md-6 mt-3">
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
                    <div className="col-md-6 mt-3">
                      <label htmlFor="largeSelect" className="form-label">
                        Gallery Image
                      </label>
                      <div
                        className="case-study-drop"
                        style={{
                          backgroundColor: "#f8f9fa",
                          cursor: "pointer",
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        <p className="mb-0">
                          Drag & drop images here or click to select
                        </p>
                        <input
                          id="fileInput"
                          type="file"
                          accept="image/*"
                          multiple
                          className="d-none"
                          onChange={handleFileSelect}
                        />
                      </div>

                      {galleryImages.length > 0 && (
                        <div className="mt-3 row">
                          {galleryImages.map((image, index) => (
                            <div key={index} className="col-md-3 mb-3">
                              <img
                                src={image.preview}
                                alt={`Gallery Preview ${index}`}
                                className="img-fluid rounded shadow"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* <div className="col-md-6 mt-3">
                      <label for="defaultFormControlInput" class="form-label">
                        Release Date
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="defaultFormControlInput"
                        ref={dateRef}
                        aria-describedby="defaultFormControlHelp"
                        value={date}
                        style={
                          submit && date.length == 0
                            ? { borderColor: "red" }
                            : { borderColor: "" }
                        }
                        onChange={(e) => setDate(e.target.value)}
                        onClick={() => dateRef.current.showPicker?.()}
                      />
                      {submit && date.length == 0 ? (
                        <div className="text-danger error-message-required">
                          *Date is required{" "}
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className="mt-5">
                        {getid && (
                          <div>
                            <div className="">
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
                      </div>
                    </div> */}

                    {/* <div className="col-md-6 mt-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Discription
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div> */}

                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
                      <div className="mt-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Overview
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
                              overviewEditorRef.current = event.editor;
                              if (overview) {
                                event.editor.setData(overview);
                              }
                            }}
                            onChange={(event) => {
                              setHasUserTypedOverview(true);
                              setOverview(event.editor.getData());
                            }}
                          />
                        )}
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="mt-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Challenges
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
                              challengeEditorRef.current = event.editor;
                              if (challenge) {
                                event.editor.setData(challenge);
                              }
                            }}
                            onChange={(event) => {
                              setHasUserTypedChallenge(true);
                              setChallenges(event.editor.getData());
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Solutions
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
                              solutionEditorRef.current = event.editor;
                              if (solution) {
                                event.editor.setData(solution);
                              }
                            }}
                            onChange={(event) => {
                              setHasUserTypedSolution(true);
                              setSolutions(event.editor.getData());
                            }}
                          />
                        )}
                      </div>
                    </div> */}
                  </div>
                  <div className="d-flex gap-2 justify-content-center mt-3">
                    <Link to={"/casestudy-list"}>
                      <button className="btn btn-secondary">Cancel</button>
                    </Link>
                    {getid ? (
                      <button
                        className="btn btn-primary"
                        onClick={CaseStudyUpdate}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={CasestudyCreate}
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

export default Product_Form;
