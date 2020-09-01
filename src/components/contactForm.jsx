import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [values, setValues] = useState({
    FullName: "",
    Phone: "",
    Email: "",
    Address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form autoComplete="off">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            FullName
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="fullname"
          placeholder="Qasim"
          value={values.FullName}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Phone
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="phone"
          placeholder="0322 2332222"
          value={values.Phone}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
        </div>
        <input
          type="email"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="email"
          placeholder="name@gmail.com"
          value={values.Email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Address
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="address"
          placeholder="street area city"
          value={values.Address}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};
