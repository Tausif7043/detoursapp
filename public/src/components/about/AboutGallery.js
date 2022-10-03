import React from 'react'
import img1 from '../img/gallery/gallery_1.png'
import img2 from '../img/gallery/gallery_2.png'
import img3 from '../img/gallery/gallery_3.png'
import img4 from '../img/gallery/gallery_4.png'
import img5 from '../img/gallery/gallery_5.png'
function AboutGallery() {
  return (
    <div>
      <section className="our_gallery section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>Our gallery</h2>
                        <p>WWaters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-columns">
                        <div className="card">
                            <a href="img/gallery/gallery_1.png" className="gallery_img">
                               <img src={img1} className="card-img-top" alt=""/>
                            </a>
                        </div>
                        <div className="card">
                            <a href="img/gallery/gallery_3.png" className="gallery_img">
                                <img src={img3} className="card-img-top" alt=""/>
                            </a>
                        </div>
                        <div className="card">
                            <a href="img/gallery/gallery_2.png" className="gallery_img">
                                <img src={img2} className="card-img-top" alt=""/>
                            </a>
                        </div>
                        <div className="card">
                            <a href="img/gallery/gallery_4.png" className="gallery_img">
                                <img src={img4} className="card-img-top" alt=""/>
                            </a>
                        </div>
                        <div className="card">
                            <a href="img/gallery/gallery_5.png" className="gallery_img">
                                <img src={img5} className="card-img-top" alt=""/>
                            </a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutGallery
