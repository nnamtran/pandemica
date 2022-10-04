import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import QRCode from 'qrcode';


const Qrcode = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [qr, setQr] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const url = cookies.Profile;
    const fullName = cookies.FullName;
    const email = cookies.Email;
    const mobile = cookies.Mobile;


    const handleChange = () => {
        console.log('hello');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
    }

    const handleGenerate = () => {
        QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
    }

    return (
        <div className='qrcode-container'>
            <Nav isLogin={isLogin} picture={url}/>
            <div className="main">
                <div className="qrcode">
                    <div className="qrcode-form">
                        <h2>LOCATION CHECK-IN</h2>
                        <form onSubmit={handleSubmit}>
                            <section>
                                <label htmlFor="first_name">Full Name</label>
                                <input 
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder="Full Name"
                                    required={true}
                                    defaultValue={fullName}
                                    onChange={handleChange}
                                />
                                <label htmlFor="address">Email</label>
                                <input 
                                    id="address"
                                    type="text"
                                    name="address"
                                    required={true}
                                    placeholder="e.g. 123 Sample Street, SUBURB NSW 2000"
                                    defaultValue={email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="mobile">Phone number</label>
                                <input 
                                    id="mobile"
                                    type="text"
                                    name="mobile"
                                    required={true}
                                    defaultValue={mobile}
                                    onChange={handleChange}
                                />
                                <input type="submit"/>
                            </section>
                        </form>
                    </div>
                    <div className="qrcode-generator">
                        {qr && <>
                            <img className='qrcode-image' src={qr} alt='QR CODE'/>
                        </>}
                        {/* <div className="qrcode-generator-form"> */}
                        <label htmlFor="location">Location</label>
                        <input 
                            id="location"
                            type="text"
                            name="location"
                            required={true}
                            defaultValue="Northfields Ave, Keiraville NSW 2522"
                            onChange={(e) => {
                                const value = e.target.value;
                                setQr(value);
                                console.log(qr)
                            }}
                        />
                        <button onClick={handleGenerate}>Generate</button>
                        {/* </div> */}
                    </div>
                    
                </div>
                <div className="google-map">
                    <iframe
                        title='google-map'
                        className="map-container"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAcqyHnMnZEVn7ew0Da-uBEM0yCoOVMvrk&q=Wollongong"
                        >
                    </iframe>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}



export default Qrcode