import React from 'react';
import PropTypes from 'prop-types'


export default function QueryForm({title, submit}) {
    return (
        <div className='bg-light p-3 rounded'>
             <h4 className='text-center p-3 mb-3'>{title}</h4>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Name' />
                </div>
                <div className="mb-3">

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Mobile' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='City' />
                </div>
                <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary me-2">{submit}</button> 
                </div>
            </form>
        </div>
    )
}
QueryForm.propTypes ={
    title: PropTypes.string,
    submit: PropTypes.string
} 
QueryForm.defaultProps ={
    title:"Get Started",
    submit: "Submit"
}