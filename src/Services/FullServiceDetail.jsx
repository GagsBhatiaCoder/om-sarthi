import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import serviceData from './ServiceData';
import Achievements from '../Components/Achievements';
import FloatWatsappBtn from '../Components/FloatWatsappBtn';


export default function FullServiceDetail() {
    const { id } = useParams();
    const post = serviceData.find((post) => post.id === parseInt(id));
    if (!post) {
        return <div>Artical Not Found</div>
    }
    return (
        <div>
            <Navbar />
            <FloatWatsappBtn />
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center bg-warning bg-gradient p-5 '>
                <div className='fullservice-titles'>
                    <h2 className='mb-2'>{post.title}</h2>
                    <p className='fs-5'>{post.content} </p>
                </div>
                <div className='fullservice-form'>
                    {post.queryForm}
                </div>
            </div>
            <div className='p-5'>
                {post.benefits && (
                    <>
                        <h4>{post.benefits.title}</h4>
                        <p className='fs-5'>{post.benefits.content}</p>
                        <h4>{post.benefits.subtitle}</h4>
                        {post.benefits.list && post.benefits.list.length > 0 && (
                           
                            <ul>
                                
                                {post.benefits.list.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
                {post.howToRegister && (
                    <>
                        <h4>{post.howToRegister.title}</h4>
                        <p className='fs-5'>{post.howToRegister.content}</p>
                        <h4>{post.howToRegister.heading}</h4>
                        {post.howToRegister.steps && post.howToRegister.steps.length > 0 && (
                            <ul>
                                {post.howToRegister.steps.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>
                                    {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
            <Achievements />
            <Footer />
        </div>
    )
}
