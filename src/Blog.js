import React from 'react';
import i from './images/doc-1.jpg';
import im from './images/doc-2.jpg';
import imag from './images/doc-4.jpg';


const Blog =()=>{
    return(

    <div className="our"><center><h1>OUR<span> BLOGS</span></h1></center>
    <div className="client">
      <div className="card1">
        <img src={i}></img>
        <h2>blog title goes here</h2>
        <p>
        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
        </p>
        <button>LEARN MORE</button>
        </div>
      <div className="card1">
        <img src={im}></img>
        <h2>blog title goes here</h2>
        <p>
        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
        </p>
        <button>LEARN MORE</button>
        </div>  
        <div className="card1">
          <img src={imag}></img> 
          <h2>
          blog title goes here</h2> 
          <p>
          Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
          </p>
          <button>LEARN MORE</button>
          
          </div>
        </div>
    </div>
    )}
export default Blog;
    
    
    
  