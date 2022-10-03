import React from 'react'

function Footer() {
  return (
    <div>
       {/* <footer className="footer-area"> */}
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-5">
                    <div className="single-footer-widget">
                        <h4>Discover Destination</h4>
                        <ul>
                            <li><a href="#">Miami, USA</a></li>
                            <li><a href="#">California, USA</a></li>
                            <li><a href="#">London, UK</a></li>
                            <li><a href="#">Saintmartine, Bangladesh</a></li>
                            <li><a href="#">Mount Everast, India</a></li>
                            <li><a href="#">Sidney, Australia</a></li>
                            <li><a href="#">Miami, USA</a></li>
                            <li><a href="#">California, USA</a></li>
                            <li><a href="#">London, UK</a></li>
                            <li><a href="#">Saintmartine, Bangladesh</a></li>
                            <li><a href="#">Mount Everast, India</a></li>
                            <li><a href="#">Sidney, Australia</a></li>
                        </ul>

                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="single-footer-widget">
                        <h4>Subscribe Newsletter</h4>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="form-inline">
                                <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                    required="" type="email"/>
                                <button className="click-btn btn btn-default text-uppercase"> <i className="far fa-paper-plane"></i>
                                </button>
                                <div style={{position: 'absolute', left: '-5000px'}}>
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                        type="text"/>
                                </div>

                                <div className="info"></div>
                            </form>
                        </div>
                        <p>Subscribe our newsletter to get update news and offers</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="single-footer-widget footer_icon">
                        <h4>Contact Us</h4>
                        <p>4156, New garden, New York, USA
                                +880 362 352 783</p>
                        <span>contact@martine.com</span>
                        <div className="social-icons">
                            <a href="#"><i className="ti-facebook"></i></a>
                            <a href="#"><i className="ti-twitter-alt"></i></a>
                            <a href="#"><i className="ti-pinterest"></i></a>
                            <a href="#"><i className="ti-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="copyright_part_text text-center">
                        <p className="footer-text m-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                    </div>
                </div>
            </div>
        </div>
    {/* </footer> */}
    </div>
  )
}

export default Footer
