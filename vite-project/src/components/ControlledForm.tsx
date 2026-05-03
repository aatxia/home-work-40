import { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data (Controlled):', formData);
    alert(`Thank you, ${formData.username}! Data submitted successfully.`);
    setFormData({ username: '', agree: false });
  };

  return (
    <div className="card">
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Your Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group checkbox">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;