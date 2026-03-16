import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    StudentName: "",
    Username: "",
    Password: "",
    Age: "",
    Year: "",
    Branch: "",
    PhoneNo: "",
    AdmissionNumber: "",
    Address: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://localhost:7060/api/Auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message || "Registration Successful ✅");
      navigate("/login");
    } else {
      const error = await response.text();  
      alert(error);
    }

  } catch (error) {
    console.error(error);
    alert("Connection Error ❌ Check console");
  }
};


  // ✅ DEFINE FIELDS ARRAY HERE
  const fields = [
    { name: "StudentName", label: "Full Name" },
    { name: "Username", label: "Username" },
    { name: "Password", label: "Password", type: "password" },
    { name: "Age", label: "Age" },
    { name: "Year", label: "Year" },
    { name: "Branch", label: "Branch" },
    { name: "AdmissionNumber", label: "Admission Number" },
    { name: "PhoneNo", label: "Phone Number" },
    { name: "Address", label: "Address" }
  ];

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div className="input-group" key={field.name}>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.label}
                  value={student[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button className="register-btn" type="submit">
              Register
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Signup;









