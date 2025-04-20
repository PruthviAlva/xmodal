import React, { useState } from 'react';
import './App.css';
import ModalComponent from './modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: ""
  });

  return (
    <div className="App">
      <div>
        <h1>User Details Modal</h1>
        <button type="button" onClick={() => setIsOpen(true)}>Open Form</button>
        {isOpen && <ModalComponent formData={formData} setFormData={setFormData} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default App;
