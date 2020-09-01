import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const initialFilledValues = {
    FullName: "",
    Phone: "",
    Email: "",
    Address: "",
  };

  const [values, setValues] = useState(initialFilledValues);
  return (
    <div>
      <div>Display Form</div>
    </div>
  );
};
