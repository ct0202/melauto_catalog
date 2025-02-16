import {useState} from "react";

import './styles.css';

const contactForm = () => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        choice: '',
        agreement: '',

    });

    async function Apply(formData) {
        console.log(formData);
    }

    return (
        <form className="form-main" action={Apply}>
            <div className="form-group">
                <label className="text-input-label">FULL NAME</label>
                <input placeholder="Tom Green" className="text-input" name="fullName" value={formData.fullName} onChange={handleInputChange} />

                <label className="text-input-label">EMAIL</label>
                <input placeholder="your.email@mail.com" className="text-input" name="email" value={formData.email}  onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <label className="text-input-label">PHONE</label>
                <input className="text-input" name="phone" value={formData.phone}  onChange={handleInputChange} />

                <label className="text-input-label">COUNTRY</label>
                <input placeholder="USA" className="text-input" name="country" value={formData.country} onChange={handleInputChange} />
            </div>

            <div className="form-group-3">
                <label>CHOSEN CAR</label>
                <textarea className="text-area-input" rows="2" cols="30" name="choice" value={formData.choice}  onChange={handleInputChange} />

                <div style={{dispay: "flex", gap: "20px", flexDirection: "row"}}>
                    <label>I agree to the processing of this information</label>
                    <input type="checkbox" name="agreement" value={formData.agreement}  onChange={handleInputChange}  />
                </div>
            </div>


            <button type="submit">SEND</button>
        </form>
);
}

export default contactForm;