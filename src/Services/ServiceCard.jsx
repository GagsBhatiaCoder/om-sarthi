import React from 'react';
import './Service.css'
import { Link, useNavigate } from 'react-router-dom';

export default function ServiceCard({Img, title, content, id }) {
  const navigate = useNavigate('')
  const scrollToTOp = () => {
    window.scrollTo(0, 0)
  }
  const handleDivClick = () => {
    navigate(`/allservice/${id}`)
    window.scrollTo(0,0)
  }
    return (
        <div onClick={handleDivClick} className="card m-3 border-0 card-hover" style={{width: "18rem"}}>
            <img src={Img} className="card-img-top " alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content.slice(0, 70)}...</p>
                <Link to={`/allservice/${id}`} onClick={scrollToTOp} className="btn btn-primary">Read More</Link>
            </div>
        </div>

    )
}
