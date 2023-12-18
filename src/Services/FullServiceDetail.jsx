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
                     {/* <img style={{width:"100%"}} src={post.Img} alt={post.title} /> */}
                </div>
                <div className='fullservice-form'>
                    {post.queryForm}
                </div>
               
            </div>
            <div className='p-5'>
                {post.section1 && (
                    <>
                        <h4>{post.section1.title}</h4>
                        <p className='fs-5'>{post.section1.content}</p>
                        <h4>{post.section1.subtitle}</h4>
                        {post.section1.list && post.section1.list.length > 0 && (
                           
                            <ul>
                                
                                {post.section1.list.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
                {post.section2 && (
                    <>
                        <h4>{post.section2.title}</h4>
                        <p className='fs-5'>{post.section2.content}</p>
                        <h4>{post.section2.heading}</h4>
                        {post.section2.steps && post.section2.steps.length > 0 && (
                            <ul>
                                {post.section2.steps.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>
                                    {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
                {post.section3 && (
                    <>
                        <h4>{post.section3.title}</h4>
                        <p className='fs-5'>{post.section3.content}</p>
                        <h4>{post.section3.subtitle}</h4>
                        {post.section3.list && post.section3.list.length > 0 && (
                           
                            <ul>
                                
                                {post.section3.list.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>{item}</li>
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
