import React from 'react'
import img1 from '../img/services_1.png'
import img2 from '../img/services_2.png'
import img3 from '../img/services_3.png'
import img4 from '../img/services_4.png'
function Services() {
  return (
    <div>
      <section className="best_services section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>We offered best services</h2>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img1} alt=""/>
                        <h3> <a href="#"> Transportation</a></h3>
                        <p>All transportation cost we bear</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img2} alt=""/>
                        <h3> <a href="#"> Guidence</a></h3>
                        <p>We offer the best guidence for you</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img3} alt=""/>
                        <h3> <a href="#"> Accomodation</a></h3>
                        <p>Luxarious and comfortable</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img4} alt=""/>
                        <h3> <a href="#"> Discover world</a></h3>
                        <p>Best tour plan for your next tour</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
