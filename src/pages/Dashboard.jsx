import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {

  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  if (!student) {
    return (
      <h2 className="login-warning">
        Please login first
      </h2>
    );
  }

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://localhost:7060/api/Auth/update/${student.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(student)
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("student", JSON.stringify(data.student));
        setStudent(data.student);
        alert("Updated Successfully ✅");
        setIsEditing(false);
      } else {
        alert(data);
      }

    } catch {
      alert("Server not running ❌");
    }
  };

  const fields = [
    { label: "Username", name: "username" },
    { label: "Branch", name: "branch" },
    { label: "Year", name: "year" },
    { label: "Phone", name: "phoneNo" },
    { label: "Admission No", name: "admissionNumber" },
    { label: "Age", name: "age" },
    { label: "Address", name: "address" }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h2>Welcome {student.studentName}</h2>

        <div className="info-grid">
          {fields.map((field) => (
            <div className="info-item" key={field.name}>
              <span className="label">{field.label}</span>

              {isEditing ? (
                <input
                  name={field.name}
                  value={student[field.name]}
                  onChange={handleChange}
                />
              ) : (
                <span className="value">
                  {student[field.name]}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="btn-group">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
