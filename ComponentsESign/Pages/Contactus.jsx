import React from "react";
import "./PageCSS/Contactus.css";
// import "./Responsive.css";

import contactus from "../images/Callcentre.svg";


class  Contactus extends React.Component{
    render(){
        return(
            <div>
                <section className="MainContactSection">
          <div className="container no-margin g-0 exp ContactUstop full-bleed5">
            <div className="row">
              <div className="col-6 HeaderImage">
                <h1 className="headingContactUs">Contact Us</h1>
              </div>
              <div className="col-6    HeaderImage">
                <img className="contactusimage1 img-fluid" src={contactus} />
              </div>
            </div>
          </div>
      
          <div className="container contactusmid full-bleed6">
            <h1 className="contactusheading1-1"> <span className="contactusheading1-2">Want To Know More?</span> Reach out to us!</h1>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <form>
                  <div className="bookaclassform">
                    <div className="bkform">
                      <label>Name<span style={{color: 'red'}}>*</span></label>
                      <input type className="TakeInputFromUser" height="52px" />
                      <br />
                      <br />
                      <label>Email<span style={{color: 'red'}}>*</span></label>
                      <input type="mail" className="TakeInputFromUser" height="52px" />
                      <br />
                      <br />
                      <label>Phone<span style={{color: 'red'}}>*</span></label>
                      <input type className="TakeInputFromUser" height="52px" />
                      <br />
                      <br />
                      <label>Message</label>
                     

                      <textarea className="InputMessageBox"  name="w3review" rows="4" cols="32"></textarea>
                      <br />
                      <br />

                      <div className="SubMitButton">

                      <button className="bkformbtn">Submit</button>       
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="row">
                  <div className="contactusheading2">
                    <h1 className="heading2bookacall">
                      Contact Information
                    </h1>
                    <div className="row">
                      <p className="contactusdetails">
                        Call us to schedule a tour of our Houston office, right inside the Gautam Buddha Nagar area. We are open Monday through Saturday from 9:30 am to 6:30 pm.
                      </p>
                      <div  className="LocationOfOffice">

                     
                      <div className="row">
                        <div className="col-2 col-sm-1">
                          <p className="contactusicon ms-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                              <path d="M18.9994 14.4765V17.1862C19.0005 17.4377 18.9488 17.6867 18.8479 17.9172C18.7469 18.1477 18.5988 18.3546 18.413 18.5247C18.2273 18.6947 18.008 18.8242 17.7693 18.9048C17.5305 18.9854 17.2775 19.0153 17.0265 18.9927C14.2415 18.6907 11.5664 17.7409 9.21601 16.2197C7.02929 14.8329 5.17534 12.9827 3.7858 10.8003C2.25627 8.44389 1.30442 5.76107 1.00735 2.96915C0.98473 2.71938 1.01447 2.46764 1.09468 2.22996C1.17489 1.99229 1.30381 1.77389 1.47323 1.58866C1.64265 1.40343 1.84885 1.25544 2.07872 1.15411C2.30858 1.05278 2.55707 1.00032 2.80837 1.00009H5.52347C5.96269 0.995773 6.3885 1.151 6.72152 1.43683C7.05455 1.72267 7.27207 2.11961 7.33354 2.55366C7.44814 3.42084 7.66067 4.27229 7.96707 5.09177C8.08883 5.41507 8.11519 5.76642 8.043 6.1042C7.97082 6.44198 7.80313 6.75203 7.5598 6.99761L6.41041 8.14473C7.69877 10.406 9.57482 12.2784 11.8406 13.5642L12.99 12.4171C13.2361 12.1742 13.5467 12.0069 13.8852 11.9348C14.2236 11.8628 14.5757 11.8891 14.8996 12.0106C15.7207 12.3164 16.5739 12.5285 17.4428 12.6429C17.8824 12.7048 18.2839 12.9258 18.5709 13.2639C18.858 13.6019 19.0105 14.0335 18.9994 14.4765Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </p>
                        </div>
                        <div className="col-6  col-sm-3 ms-lg-4">
                          <p className="icondetail">+91 8076909119</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 col-sm-1">
                          <p className="contactusicon ms-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={22} viewBox="0 0 18 22" fill="none">
                              <path d="M17.0005 9.54474C17.0005 15.8048 8.97976 21.1706 8.97976 21.1706C8.97976 21.1706 0.958984 15.8048 0.958984 9.54474C0.958984 7.41011 1.80403 5.3629 3.30822 3.85349C4.8124 2.34407 6.85252 1.49609 8.97976 1.49609C11.107 1.49609 13.1471 2.34407 14.6513 3.85349C16.1555 5.3629 17.0005 7.41011 17.0005 9.54474Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8.98023 12.2276C10.4568 12.2276 11.6538 11.0264 11.6538 9.5447C11.6538 8.06298 10.4568 6.86182 8.98023 6.86182C7.50365 6.86182 6.30664 8.06298 6.30664 9.5447C6.30664 11.0264 7.50365 12.2276 8.98023 12.2276Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </p>
                        </div>
                        <div className="col-6 col-sm-3 ms-lg-4">
                          <p className="icondetail">support@esign.com</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 col-sm-1">
                          <p className="contactusicon ms-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" fill="none">
                              <path d="M2.60416 1H15.4374C16.3197 1 17.0416 1.75456 17.0416 2.6768V12.7376C17.0416 13.6599 16.3197 14.4144 15.4374 14.4144H2.60416C1.72187 14.4144 1 13.6599 1 12.7376V2.6768C1 1.75456 1.72187 1 2.60416 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M17.0416 2.34155L9.02078 9.04876L1 2.34155" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </p>
                        </div>
                        <div className="col-10 col-sm-4 ms-lg-4">
                          <p className="icondetail">+B-70, First Floor, Sector-2, Noida, Gautam Buddha Nagar, U.P-201301</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
       

            </div>
        )
    }
}
export default Contactus;