import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Navbar from "../../shared/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../shared/Footer";
import LoginAPI from "../../api/services/AdminLogin/adminlogin";
import { baseURL } from "../../api/api";
import { toast } from "react-toastify";
import "./index.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function OurClients_Form() {
  // get api,
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();
  const { id } = useParams();

  // list,

  const ClientList = async () => {
    setLoading(true);

    try {
      const response = await LoginAPI.ourclientList();

      if (response.apiStatus.code === "200") {
        setGalleryImages(response.responseData);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ClientList();
  }, []);

  // delete api,

  const handledelete = async (imageId) => {
    try {
      const response = await LoginAPI.ourclientDeleteAPI(imageId);
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
    newImages.forEach((file, index) => {
      formData.append(`client_images[${index}]`, file);
    });

    try {
      const response = await LoginAPI.ourClientCreate(formData);
      if (response.apiStatus.code === "200") {
        ClientList();
        setNewImages([]);
        toast.success(response.apiStatus.message);
      } else {
        toast.success("our client create failed!!!");
      }
    } catch (err) {
      toast.error("An error occurred while uploading.");
    }
  };

  return (
    <>
      <div class="p-5">
        <div className="d-flex justify-content-center">
          <div
            className="manage-gallery-drog"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <p className="mb-0 managegallery-text">
              Drag & drop images here or click to select
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
          {newImages.length > 0 && <h6>Newly Choose the client images:</h6>}
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
                    setNewImages((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <i className="bx bx-x close-icon-manage-gallery"></i>
                </button>
              </div>
            </div>
          ))}
          {newImages.length > 0 && (
            <div className="mt-4 d-flex justify-content-center gap-3">
              <button className="btn btn-primary" onClick={handleSave}>
                Add
              </button>
            </div>
          )}
        </div>

        <div className="row">
          <h6 className="mt-4">Our client images :</h6>
          {loading ? (
            <div className="d-flex justify-content-center p-5">
              <span className="loader"></span>
            </div>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
            >
              <Masonry>
                {galleryImages.map((img) => (
                  <div className="card position-relative mb-3" key={img.id}>
                    <img
                      src={`${baseURL}/${img.path}`}
                      alt={`Gallery ${img.id}`}
                      className="gallery-thumb"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "8px",
                      }}
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
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>

        {galleryImages.length === 0 && newImages.length === 0 && (
          <div className="text-center mt-4">
            <h6 className="text-muted">No Client Images Found</h6>
          </div>
        )}

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
                <h6 className="mt-n4">You want to Delete the Client Image?</h6>
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
    </>
  );
}

export default OurClients_Form;
