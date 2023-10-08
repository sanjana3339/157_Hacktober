import React, { useState } from "react";
import "./form.css";

function OrganDonationForm() {
  const [userType, setUserType] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    organ: "",
  });
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [consent, setConsent] = useState(false);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleConsentChange = (event) => {
    setConsent(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      organ: details.organ,
      bloodGroup: bloodGroup,
      location: location,
    };
    // Handle form submission (e.g., send data to a server)
  };

  return (
    <div className={formContainer}>
      <form className={ form} onSubmit={handleSubmit}>
        <h2>Organ Donation Form</h2>
        <div className={userType}>
          <label>
            Are you a donor or recipient?
            <select value={userType} name="select" onChange={handleUserTypeChange}>
              <option value="">Select</option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
            </select>
          </label>
        </div>
        {userType && (
          <div className={details}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={details.phone}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Organ of interest:
              <input
                type="text"
                name="organ"
                value={details.organ}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Blood Group:
              <input
                type="text"
                name="bloodGroup"
                value={bloodGroup}
                onChange={handleBloodGroupChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleLocationChange}
                required
              />
            </label>
          </div>
        )}
        <div className={consent}>
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={handleConsentChange}
              required
            />
            I consent to organ donation.
          </label>
        </div>
        <button type="submit" disabled={!consent}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrganDonationForm;