import React from 'react'


export default function About(props) {



  return (
    <div className="container" >

      <h1 className="my-3" style={{color: props.mode=== 'dark' ? 'white':'black'}}>About Us</h1>
          <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" >
           TextUtils is a simple and powerful text analysis tool that helps users quickly modify and analyze their text. 
           It allows you to convert text into uppercase, lowercase, remove unnecessary spaces, and clear text with just one click.
           This tool makes working with text faster and easier.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free To Use</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" >
           TextUtils is completely free to use and does not require any registration or account.
           Anyone can access this tool and improve their writing or manage their text efficiently.
           It is designed to provide a smooth and user-friendly experience.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils works smoothly on modern web browsers and provides a responsive interface.
            You can use it on desktops, laptops, tablets, and mobile devices without installing any software.
          </div>
        </div>
      </div>
    </div>

   </div>
  )
}
