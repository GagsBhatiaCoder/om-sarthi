import React from 'react';
import './Service.css'

export default function ServiceCard({Img, title, content, src }) {
    return (
        <div className="card m-3 border-0 card-hover" style={{width: "18rem"}}>
            <img src={Img} className="card-img-top " alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href={src} className="btn btn-primary">Read More</a>
            </div>
        </div>

    )
}
