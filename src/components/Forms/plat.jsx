import React, { useState, useEffect, useRef } from "react";

function PlatformMultiSelect({ platformdrop, onChange }) {
  const [open, setOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState([]); // inside dropdown selections
  const [finalSelected, setFinalSelected] = useState([]); // confirmed selections

  const dropdownRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (id) => {
    setTempSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmitSelection = () => {
    setFinalSelected(tempSelected);
    onChange(tempSelected); // pass selected ids to parent
    setOpen(false); // close dropdown
  };

  return (
    <div className="dropdown w-100" ref={dropdownRef}>
      <div
        className="form-control d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        {/* <span>
          {finalSelected.length > 0
            ? platformdrop
                .filter((opt) => finalSelected.includes(opt.id))
                .map((opt) => opt.technology_name)
                .join(", ")
            : "Select Platform"}
        </span> */}
        <span>
          {finalSelected.length > 0
            ? finalSelected
                .map(
                  (id) =>
                    platformdrop.find((opt) => opt.id === id)?.technology_name
                )
                .join(", ")
            : "Select Platform"}
        </span>

        <i className="bx bx-chevron-down fs-4"></i>
      </div>

      {open && (
        <div
          className="dropdown-menu show p-2"
          style={{
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <div className="row">
            {platformdrop.map((option) => (
              <div key={option.id} className="col-md-3 col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`platform-${option.id}`}
                    checked={tempSelected.includes(option.id)}
                    onChange={() => handleCheckboxChange(option.id)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`platform-${option.id}`}
                  >
                    {option.technology_name}
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary btn-sm mt-4"
              onClick={handleSubmitSelection}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlatformMultiSelect;
