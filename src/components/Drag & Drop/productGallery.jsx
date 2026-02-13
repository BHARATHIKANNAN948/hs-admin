import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Navbar from "../../shared/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../shared/Footer";
import LoginAPI from "../../api/services/AdminLogin/adminlogin";
import { baseURL } from "../../api/api";
import { toast } from "react-toastify";
import Image1 from "../../assets/images/case2.webp";

function ManageImage_Product() {
  // get api,
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const Navigate = useNavigate();
  const { id } = useParams();

  const fetchGalleryImages = async (id) => {
    try {
      const response = await LoginAPI.productGalleryGet(id);
      const images = response?.responseData?.GalleryView?.galleryImages || [];
      setGalleryImages(images);
    } catch (error) {
      console.error("Error fetching gallery images", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchGalleryImages(id);
    }
  }, [id]);

  // delete api,

  const handledelete = async (imageId) => {
    try {
      const response = await LoginAPI.productGalleryDeleteAPI(imageId);
      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        setGalleryImages((prevImages) =>
          prevImages.filter((img) => img.id !== imageId)
        );
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while trying to delete the data.");
    }
  };

  //   update ,

  const [newImages, setNewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages((prev) => [...prev, ...files]);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("gallery_id", id);

    newImages.forEach((file, index) => {
      formData.append(`gallery_images[${index}]`, file);
    });

    try {
      const response = await LoginAPI.productGalleryUpdate(formData);
      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        // setNewImages([]);
        // fetchGalleryImages(id);
        Navigate("/product-list");
      } else {
        // toast.error("Failed to upload images");
        Navigate("/product-list");
        toast.success("Gallery Image Deleted Successfully");
      }
    } catch (err) {
      toast.error("An error occurred while uploading.");
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
              <div class="container-xxl flex-grow-1 container-p-y text-start">
                <h4 class="fw-bold py-3 mb-4">
                  <Link to={"/product-list"}>
                    {" "}
                    <span class="text-muted fw-light">Products /</span>
                  </Link>{" "}
                  Manage Gallery
                </h4>
                <div class="card p-5">
                  <div className="d-flex justify-content-center">
                    <div
                      className="manage-gallery-drog"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      <p className="mb-0 managegallery-text">
                        Drag & drop images here or click to select
                        <br />
                        Image (size : 187 X 117)
                        <br />
                        <i class="bx bx-cloud-upload upload-icon-managegallery"></i>
                      </p>
                      <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        multiple
                        className="d-none"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>

                  <div className="row mt-4">
                    {newImages.length > 0 && (
                      <h6>Newly added the Gallery Images:</h6>
                    )}
                    {newImages.map((img, index) => (
                      <div className="col-md-2 mt-2" key={index}>
                        <div className="card position-relative">
                          <img
                            src={URL.createObjectURL(img)}
                            alt="Preview"
                            className="w-100"
                          />
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute"
                            style={{
                              top: "5px",
                              right: "0px",
                              padding: "0px 5px 2px 5px",
                              borderRadius: "100%",
                            }}
                            onClick={() =>
                              setNewImages((prev) =>
                                prev.filter((_, i) => i !== index)
                              )
                            }
                          >
                            <i className="bx bx-x close-icon-manage-gallery"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    {newImages.length > 0 && (
                      <h6 className="mt-4">Already in the Gallery Images:</h6>
                    )}
                    {galleryImages.map((img) => (
                      <div className="col-md-2 mt-2" key={img.id}>
                        <div className="card position-relative">
                          <img
                            src={`${baseURL}/${img.path}`}
                            alt={`Gallery ${img.id}`}
                            className="w-100"
                          />
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute"
                            style={{
                              top: "5px",
                              right: "0px",
                              padding: "0px 5px 2px 5px",
                              borderRadius: "100%",
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#CaseStudyDelete"
                            onClick={() => setSelectedImageId(img.id)}
                          >
                            <i className="bx bx-x close-icon-manage-gallery"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {galleryImages.length === 0 && newImages.length === 0 && (
                    <div className="text-center mt-4">
                      <h6 className="text-muted">No Gallery Images Found</h6>
                    </div>
                  )}

                  <div className="mt-4 d-flex justify-content-center gap-3">
                    <Link to={"/casestudy-list"}>
                      <button className="btn btn-secondary">Cancel</button>
                    </Link>
                    <button className="btn btn-primary" onClick={handleSave}>
                      Save
                    </button>
                  </div>

                  {/* Delete Popup */}
                  <div
                    class="modal fade"
                    id="CaseStudyDelete"
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
                            You want to Delete the Gallery Image?
                          </h6>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => handledelete(selectedImageId)}
                            data-bs-dismiss="modal"
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
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

export default ManageImage_Product;
