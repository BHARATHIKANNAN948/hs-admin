import React, { useEffect, useState } from "react";
import LoginAPI from "../../api/services/AdminLogin/adminlogin";
import { baseURL } from "../../api/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import No_image from "../../assets/images/noimage.jpeg";
import { Pagination } from "react-bootstrap";

function ContactList_Component() {
  const [list, setPortfolioList] = useState([]);
  const [id, setGetId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const recordsPerPage = 10;
  const [loading, setLoading] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [platform, setPlatform] = useState("");
  const [Image, setImage] = useState("");
  const [MulImage, setMulImage] = useState([]);

  // portfolio-list,

  const Portfoliolist = async (page) => {
    setLoading(true);
    try {
      const response = await LoginAPI.contactUsList({
        pageIndex: page - 1,
        dataLength: recordsPerPage,
      });
      if (response.apiStatus.code === "200") {
        setPortfolioList(response.responseData.ContantList);
        setGetId(response.responseData.ContantList.id);
        const totalRecords = response.responseData.totalRecordCount;
        setTotalRecords(totalRecords);
      } else {
        toast.error(response.apiStatus.message);
      }
    } catch {
      toast.error("An error occurred while fetching the list.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    Portfoliolist(currentPage);
  }, [currentPage]);

  // Pagination Method
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    let items = [];
    const maxPageNumbersToShow = 3;
    const halfRange = Math.floor(maxPageNumbersToShow / 2);

    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= halfRange) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + halfRange >= totalPages) {
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfRange;
      endPage = currentPage + halfRange;
    }

    if (startPage > 1) {
      items.push(
        <Pagination.Item
          key="1"
          active={1 === currentPage}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>
      );
      if (startPage > 2) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  //delete,

  const handledelete = async () => {
    try {
      const response = await LoginAPI.contactUsDeleteAPI(id);
      if (response.apiStatus.code === "200") {
        toast.success(response.apiStatus.message);
        Portfoliolist(currentPage);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while trying to delete the data.");
    }
  };

  // getapi,

  const GetApiUpdate = async (id) => {
    try {
      const response = await LoginAPI.contactUsGet(id);
      const data = response.responseData.ContactView;
      console.log("dtaex", data);

      setGetId(data.id);
      setName(data.Name);
      setEmail(data.Email);
      setPhoneNo(data.PhoneNo);
      setMessage(data.Message);
    } catch {}
  };

  // truncate

  const [expandedItems, setExpandedItems] = useState({});
  const truncateText = (text, wordLimit, expandedLimit, id, key) => {
    if (!text) return "";
    const words = text.split(" ");

    if (words.length <= wordLimit || expandedItems[`${id}-${key}`]) {
      if (words.length > wordLimit && expandedItems[`${id}-${key}`]) {
        return (
          <>
            {words.slice(0, wordLimit).join(" ")}
            <br />
            {words.slice(wordLimit, expandedLimit).join(" ")}
          </>
        );
      }
      return text;
    }

    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const toggleExpand = (id, key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [`${id}-${key}`]: !prev[`${id}-${key}`],
    }));
  };

  function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center p-5">
          <span className="loader"></span>
        </div>
      ) : (
        <div class="table-responsive text-nowrap">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <i class="fab fa-react fa-lg text-info me-3"></i> S.no
                </th>
                <th>
                  Name
                </th>
                <th>Phone No</th>
                <th>G-mail</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="border-top-0">
              {list?.length > 0 ? (
                list.map((value, index) => (
                  <tr key={index}>
                     <td><i class="fab fa-react fa-lg text-info me-3"></i>{(currentPage - 1) * recordsPerPage + index + 1}</td>
                    <td>
                      <strong>{value.Name}</strong>
                    </td>
                    <td>
                      <strong>{value.Phone}</strong>
                    </td>
                    <td>
                      <strong>{value.Email}</strong>
                    </td>
                    <td>
                      {truncateText(
                        stripHtmlTags(value.Message),
                        5,
                        12,
                        value.id,
                        "Message"
                      )}
                      {stripHtmlTags(value.Message).split(" ").length > 5 && (
                        <span
                          className="text-primary mt-1"
                          style={{
                            cursor: "pointer",
                            display: "block",
                          }}
                          onClick={() => toggleExpand(value.id, "Message")}
                        >
                          {expandedItems[`${value.id}-Message`]
                            ? "Show less"
                            : "Show more"}
                        </span>
                      )}
                    </td>
                    <td>
                      <div class="dropdown">
                        <button
                          type="button"
                          class="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">
                          <a
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              GetApiUpdate(value.id);
                            }}
                          >
                            <i class="bx bx-show"></i> View
                          </a>

                          <Link
                            to={`/service-form/${value.id}`}
                            class="dropdown-item"
                          >
                            <i class="bx bx-edit-alt me-1"></i> Edit
                          </Link>
                          <a
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#CaseStudyDelete"
                            onClick={() => {
                              setGetId(value.id);
                            }}
                          >
                            <i class="bx bx-trash me-1"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center table-list-nodata">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
           {totalRecords > recordsPerPage && (
          <div className="d-flex justify-content-end mt-3">
            <div className="store-pagination">
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {renderPaginationItems()}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
           )}
        </div>
      )}
      {/* View Popup */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModalLabel">
                ContactUs Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="title" className="fw-bold">
                    Name
                  </label>
                  <p className="fst-italic" id="title">
                    {name}
                  </p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="title" className="fw-bold">
                    Email
                  </label>
                  <p className="fst-italic" id="title">
                    {email}
                  </p>
                </div>
                <div className="col-md-6">
                  <label htmlFor="title" className="fw-bold">
                    Phone No
                  </label>
                  <p className="fst-italic" id="title">
                    {phoneno}
                  </p>
                </div>

                <div className="col-md-12 mt-2">
                  <label htmlFor="title" className="fw-bold">
                    {" "}
                    Message
                  </label>
                  <p className="fst-italic" id="title">
                    {stripHtmlTags(message)}
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" class="btn btn-primary">
                            Save changes
                          </button> */}
            </div>
          </div>
        </div>
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
              <h6 className="mt-n4">You want to Delete the Data?</h6>
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
                onClick={() => handledelete()}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactList_Component;
