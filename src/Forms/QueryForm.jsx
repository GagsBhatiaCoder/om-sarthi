import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';


export default function QueryForm({ title, submit }) {
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxO43USSe2VsCWaW6HiczepGwUgT89Eck7YW17VvA2Grio8mpy_W2XjVDpcU2WMhMMP/exec"
    const navigate = useNavigate()
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
    //         .then(res => {
    //             navigate('/payment')
    //             setLoading(false)


    //         })
    //         .catch(err => console.log(err));

    // }
    const generateUniqueId = () => {
        // Use a timestamp as a simple unique identifier
        return Date.now().toString();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Generate a new ID
        const uniqueId = generateUniqueId();

        // Append the unique ID to the form data
        const formData = new FormData(formRef.current);
        formData.append('uniqueId', uniqueId);

        fetch(scriptUrl, { method: 'POST', body: formData })
            .then(res => {
                navigate(`/payment/${uniqueId}`); // Pass the unique ID to the payment page
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='bg-light p-3 rounded'>
            {loading && (<div className='loader' style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex: 1000}}><HashLoader
      color={"#0B5ED7"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> </div>)}
            <h4 className='text-center p-3 mb-3'>{title}</h4>
            <form onSubmit={handleSubmit} ref={formRef} name='om_Sarthi_legal'>
                <div className="mb-3">
                    <input type="text" name='name' className="form-control" placeholder='Name' required/>
                </div>
                <div className="mb-3">

                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="text" name='number' className="form-control" placeholder='Mobile' required/>
                </div>
                <div className="mb-3">
                    <input type="text" name='city' className="form-control" placeholder='City' required/>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit"  className="btn btn-primary me-2">{submit}</button>
                </div>
            </form>
        </div>
    )
}
QueryForm.propTypes = {
    title: PropTypes.string,
    submit: PropTypes.string
}
QueryForm.defaultProps = {
    title: "Get Started",
    submit: "Submit"
}