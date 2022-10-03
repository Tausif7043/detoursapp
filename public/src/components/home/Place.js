import React from 'react'
import img1 from '../img/single_place_1.png'
import img2 from '../img/single_place_2.png'
import img3 from '../img/single_place_3.png'
import img4 from '../img/single_place_4.png'
function Place() {
  return (
    <div>
      <section className="top_place section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>Top Places to visit</h2>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src={img1} alt=""/>
                        <div className="hover_Text d-flex align-items-end justify-content-between">
                            <div className="hover_text_iner">
                                <a href="#" className="place_btn">travel</a>
                                <h3>Saintmartine Iceland</h3>
                                <p>Technaf, Bangladesh</p>
                                <div className="place_review">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <span>(210 review)</span>
                                </div>
                            </div>
                            <div className="details_icon text-right">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src={img2} alt=""/>
                        <div className="hover_Text d-flex align-items-end justify-content-between">
                            <div className="hover_text_iner">
                                <a href="#" className="place_btn">travel</a>
                                <h3>Saintmartine Iceland</h3>
                                <p>Technaf, Bangladesh</p>
                                <div className="place_review">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <span>(210 review)</span>
                                </div>
                            </div>
                            <div className="details_icon text-right">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src={img3} alt=""/>
                        <div className="hover_Text d-flex align-items-end justify-content-between">
                            <div className="hover_text_iner">
                                <a href="#" className="place_btn">travel</a>
                                <h3>Saintmartine Iceland</h3>
                                <p>Technaf, Bangladesh</p>
                                <div className="place_review">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <span>(210 review)</span>
                                </div>
                            </div>
                            <div className="details_icon text-right">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src={img4} alt=""/>
                        <div className="hover_Text d-flex align-items-end justify-content-between">
                            <div className="hover_text_iner">
                                <a href="#" className="place_btn">travel</a>
                                <h3>Saintmartine Iceland</h3>
                                <p>Technaf, Bangladesh</p>
                                <div className="place_review">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <span>(210 review)</span>
                                </div>
                            </div>
                            <div className="details_icon text-right">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn_1 text-cnter">Discover more</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Place
