import React from "react";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h3>Contact</h3>
      <p>
        If you have any questions or concerns, please contact us at{" "}
        <a href="mailto:ventixe@info.com">ventixe@info.com</a>
      </p>

      <div className="contactDetails">
        <h7>You can also reach us at:</h7>
        <ul>
          <li>Phone: +46 123 456 789</li>
          <li>Address: Example Street 123, 123 45 City</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
