import { useState } from "react";
import { useCoffee } from "../context/CoffeeContext";
import { locations } from "../data/coffees";
import "./AdminPortal.css";

const initialForm = {
  name: "",
  description: "",
  origin: "",
  price: "",
  location: "Location 1",
};

export default function AdminPortal() {
  const { addCoffee } = useCoffee();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Coffee name is required.";
    if (!form.description.trim()) newErrors.description = "Description is required.";
    if (!form.origin.trim()) newErrors.origin = "Origin is required.";
    if (!form.price.trim()) newErrors.price = "Price is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    addCoffee(form);
    setForm(initialForm);
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Add New Coffee</h2>

        {submitted && (
          <div className="success-banner">✓ Coffee added to the shop!</div>
        )}

        <div className="form-body">
          <div className="field-group">
            <label className="field-label">Coffee Name</label>
            <input
              className={`field-input ${errors.name ? "input-error" : ""}`}
              type="text"
              name="name"
              placeholder="Type here"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <span className="error-text">{errors.name}</span>
            ) : (
              <span className="assistive-text">Assistive Text</span>
            )}
          </div>

          <div className="field-group">
            <label className="field-label">Description</label>
            <input
              className={`field-input ${errors.description ? "input-error" : ""}`}
              type="text"
              name="description"
              placeholder="Typing |"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description ? (
              <span className="error-text">{errors.description}</span>
            ) : (
              <span className="assistive-text">Assistive Text</span>
            )}
          </div>

          <div className="field-group">
            <label className="field-label">Origin</label>
            <div className="input-wrapper">
              <input
                className={`field-input ${errors.origin ? "input-error" : ""}`}
                type="text"
                name="origin"
                placeholder="Typing |"
                value={form.origin}
                onChange={handleChange}
              />
              {errors.origin && <span className="error-icon">⚠</span>}
            </div>
            {errors.origin && (
              <span className="error-text">{errors.origin}</span>
            )}
          </div>

          <div className="field-group">
            <label className="field-label">Price</label>
            <input
              className={`field-input ${errors.price ? "input-error" : ""}`}
              type="text"
              name="price"
              placeholder="e.g. $15.99"
              value={form.price}
              onChange={handleChange}
            />
            {errors.price && (
              <span className="error-text">{errors.price}</span>
            )}
          </div>

          <div className="field-group">
            <label className="field-label">Location</label>
            <select
              className="field-input field-select"
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}