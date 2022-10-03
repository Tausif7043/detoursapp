import React from 'react'
import img from '../img/about_img.png'
function AboutSection() {
  return (
    <div>
      <section className="about_us section_padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about_img">
                        <img src={img} alt="#"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about_text">
                        <h5>Who we are</h5>
                        <h2>We love to discover around the world</h2>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutSection
