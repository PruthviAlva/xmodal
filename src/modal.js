import './ModalComponent.css';

function ModalComponent({ formData, setFormData }) {

    const validateForm = () => {
        const { username, email, dob, phone } = formData;

        if (!/^\d{10}$/.test(phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }

        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate > today) {
            alert("Invalid date of birth. Please enter a valid date.");
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormData({ username: "", email: "", dob: "", phone: "" });
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Fill Details</h1>
                <form onSubmit={handleSubmit} className='form-data'>
                    <div className='form-data'>
                        <label>Username:</label>
                        <input id="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className='form-data'>
                        <label>Email:</label>
                        <input id="email" type='email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className='form-data'>
                        <label>Date of Birth:</label>
                        <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className='form-data'>
                        <label>Phone:</label>
                        <input id="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ModalComponent;
