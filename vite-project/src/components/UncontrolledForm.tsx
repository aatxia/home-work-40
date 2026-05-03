import { useRef } from 'react';

const UncontrolledForm = () => {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    console.log('Submitted email (Uncontrolled):', emailValue);
    alert(`Email ${emailValue} successfully subscribed!`);
    emailRef.current.value = '';
  };

  return (
    <div className="card">
      <h2>Uncontrolled Form (Newsletter)</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email for newsletter:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="example@mail.com"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;