import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

import Footer from "../components/Footer";
import Nav from "../components/Nav"

const ContactTracing = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState({
        full_name: "",
        medicare: "",
        mobile: "",
        email: "",
    })
    const url = cookies.Profile

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        console.log('e')
    }

    return (
        <div className='contactTracing-container'>
            <Nav isLogin={isLogin} picture={url}/>
            <div className="contactTracing">
                <div className="contactTracing-form">
                    <h2>Contact Tracing</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="full_name">Full name</label>
                        <input 
                            id="full_name"
                            type="text"
                            name="full_name"
                            placeholder="Full Name"
                            required={true}
                            value={formData.full_name}
                            onChange={handleChange}
                        />
                    
                        <label htmlFor="mobile">Phone number (mobile preferred)</label>
                        <input 
                            id="mobile"
                            type="number"
                            name="mobile"
                            placeholder="0449 789 045"
                            required={true}
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="text"
                            name="email"
                            placeholder="contact@nsw.gov.au"
                            required={true}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        
                        <input type="submit"/>
                    </form>
                </div>
                <div className="result">
                    <h2>Result</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactTracing