import React from 'react'
import img1 from '../img/ind/industries_1.png'
import img2 from '../img/ind/industries_2.png'
import img3 from '../img/ind/industries_3.png'
function Hotal_Restorent() {
  return (
    <div>
      <section className="hotel_list section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>Top Hotel & Restaurants</h2>
                        <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img1} alt=""/>
                        <div className="hover_text">
                            <div className="hotel_social_icon">
                                <ul>
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="share_icon">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                        <div className="hotel_text_iner">
                            <h3> <a href="#"> Hotel Polonia</a></h3>
                            <div className="place_review">
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <span>(210 review)</span>
                            </div>
                            <p>London, United Kingdom</p>
                            <h5>From <span>$500</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img2} alt=""/>
                        <div className="hover_text">
                            <div className="hotel_social_icon">
                                <ul>
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="share_icon">
                                <i className="ti-share"></i>
                            </div>
                        </div>
                        <div className="hotel_text_iner">
                            <h3> <a href="#"> Hotel Polonia</a></h3>
                            <div className="place_review">
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <span>(210 review)</span>
                            </div>
                            <p>London, United Kingdom</p>
                            <h5>From <span>$500</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src={img3} alt=""/>
                        <div className="hover_text">
                            <div className="hover_text">
                                <div className="hotel_social_icon">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="share_icon">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                        </div>
                        <div className="hotel_text_iner">
                            <h3> <a href="#"> Hotel Polonia</a></h3>
                            <div className="place_review">
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <a href="#"><i className="fas fa-star"></i></a>
                                <span>(210 review)</span>
                            </div>
                            <p>London, United Kingdom</p>
                            <h5>From <span>$500</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hotal_Restorent

