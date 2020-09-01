import React from "react";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Registrations</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-7">Lists of Contacts</div>
      </div>
    </div>
  );
};
