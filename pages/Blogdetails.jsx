import React from "react";
import "./Blogdetails.css";
import blog from "../ComponentsESign/images/blog.svg";
import paramita from "../ComponentsESign/images/paramita.svg";
import Dottedesign from "../ComponentsESign/images/DottedSign_sign-on-iPad 1.svg";
import share from "../ComponentsESign/images/share-2 (3).svg";
import webinar from "../ComponentsESign/images/webinar.svg";
import appointment from "../ComponentsESign/images/appointment.svg";
import esignature from "../ComponentsESign/images/esignature.svg";



class  Blogdetails extends React.Component{
    render(){
        return(
            <div>
                <section className="container">
          <div className="container no-margin g-0 exp blogdetailtop full-bleedblog">
            <div className="row">
              <div className="col">
                <h1 className="headingblogdetail">Latest Articles</h1>
              </div>
              <div className="col">
                <img className="blogdetailimage1 img-fluid" src={blog} />
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="container blogdetailsmid full-bleed11 ">
            <div className="row blogg" style={{display: 'inline'}}>
              <a href="#" className="blogdetailsa">Home &nbsp;&nbsp;&nbsp;
                <svg className="ms-lg-1" xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                  <path d="M1 9L5 5L1 1" stroke="#626262" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a href="#" className=" blogdetailsa">Blog &nbsp;&nbsp;&nbsp;
                <svg className="ms-lg-1" xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none">
                  <path d="M1 9L5 5L1 1" stroke="#626262" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a href="#" className=" blogdetailsa">eSign VS wet-ink Signatures</a>
            </div>
            <h1 className="headingblogdetailsh1">Electronic Signatures vs. Wet-Ink Signatures: Key Differences and Advantages</h1>
            <div className="row">
              <img className="col-sm-1 img-fluid paramita" src={paramita} />
              <div className="row col-2">
                <p className="paramitaname">Paramita Bose</p> 
                <p className="paramitaseo"> &nbsp;SEO Lead</p>
              </div> 
              <div className="row col-2">
                <p className="nameparamita"> Modified On</p> 
                <p className="seoparamita"> &nbsp; &nbsp;June 8, 2023</p>
              </div> 
            </div>
            <img className="img-fluid mainimgblog" src={Dottedesign} />
            <div className="row">
              <div className="col-4 mt-5 ms-lg-3 leftblogbox">
                <h4 className="leftblogheading">Contents</h4>
                <hr />
                <div className="row">
                  <li className="ms-lg-4 mt-2 liblog">Introduction of electronic signatures</li>
                  <li className="ms-lg-4 mt-3 liblog"> 5 characteristics that makes an eSign<br /><span className="ms-lg-3 ps-lg-2">valid</span></li>
                  <li className="ms-lg-4 mt-3 liblog"> Difference between eSign &amp; wet <br /><span className="ms-lg-3 ps-lg-2">signature</span></li>
                </div>
                <h4 className="leftblogheading">Share this</h4>
                <hr />
                <div className="row">
                  <div className="col-2 mr-3">
                    <svg className="ms-lg-3" xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                      <circle className="iconblog" cx={19} cy={19} r={19} fill="#263238" />
                      <path d="M19.0101 11.2273C14.7301 11.2273 11.2458 14.7082 11.2442 18.9879C11.2435 20.3559 11.6018 21.6914 12.2812 22.8682L11.2275 26.7727L15.295 25.8118C16.4291 26.4305 17.7059 26.7553 19.0056 26.7561H19.0086C23.2879 26.7561 26.7707 23.2744 26.773 18.9955C26.7745 16.9209 25.9678 14.9704 24.5017 13.5029C23.0356 12.0362 21.0872 11.2281 19.0101 11.2273ZM19.0086 12.7818C20.669 12.7826 22.2294 13.4299 23.4025 14.6021C24.5755 15.7757 25.2198 17.3353 25.2183 18.994C25.2167 22.4171 22.4321 25.2015 19.0071 25.2015C17.9709 25.2007 16.9445 24.9406 16.0404 24.447L15.5166 24.1616L14.9382 24.2982L13.4078 24.6595L13.7813 23.272L13.9498 22.6496L13.6279 22.0909C13.0853 21.1519 12.7982 20.0784 12.7989 18.9879C12.8005 15.5663 15.5859 12.7818 19.0086 12.7818ZM16.2621 15.4051C16.1323 15.4051 15.9224 15.4537 15.7444 15.648C15.5663 15.8416 15.0642 16.3103 15.0642 17.2648C15.0642 18.2193 15.7595 19.142 15.8567 19.2718C15.9531 19.4008 17.1989 21.4214 19.1711 22.1987C20.8097 22.8446 21.1425 22.7171 21.4986 22.6845C21.8546 22.6526 22.6471 22.2161 22.8088 21.763C22.9705 21.3098 22.9709 20.92 22.9227 20.84C22.8745 20.7591 22.7451 20.7109 22.5507 20.6138C22.3572 20.5166 21.4033 20.0483 21.2253 19.9838C21.0473 19.9192 20.9171 19.8866 20.788 20.0809C20.659 20.2752 20.2881 20.7109 20.1746 20.84C20.0611 20.9698 19.9484 20.9872 19.7541 20.8901C19.5597 20.7921 18.9349 20.5868 18.1933 19.9261C17.6165 19.4123 17.2273 18.7784 17.1138 18.5841C17.0011 18.3905 17.1032 18.2842 17.2004 18.1878C17.2874 18.1008 17.3932 17.9613 17.4904 17.8478C17.5867 17.7343 17.6202 17.6534 17.6847 17.5244C17.7492 17.3954 17.7162 17.2815 17.668 17.1844C17.6198 17.0872 17.2424 16.1292 17.0698 15.7452C16.9244 15.4226 16.7709 15.4151 16.6325 15.4097C16.5198 15.405 16.3911 15.4051 16.2621 15.4051Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                      <circle className="iconblog" cx={19} cy={19} r={19} fill="#263238" />
                      <path d="M22.2004 14.7C23.4734 14.7 24.6943 15.2057 25.5945 16.1058C26.4947 17.006 27.0004 18.2269 27.0004 19.5V25.1H23.8004V19.5C23.8004 19.0756 23.6318 18.6686 23.3318 18.3686C23.0317 18.0685 22.6247 17.9 22.2004 17.9C21.776 17.9 21.3691 18.0685 21.069 18.3686C20.769 18.6686 20.6004 19.0756 20.6004 19.5V25.1H17.4004V19.5C17.4004 18.2269 17.9061 17.006 18.8063 16.1058C19.7065 15.2057 20.9274 14.7 22.2004 14.7Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.2 15.5H11V25.1H14.2V15.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.6 13.0999C13.4837 13.0999 14.2 12.3836 14.2 11.4999C14.2 10.6162 13.4837 9.8999 12.6 9.8999C11.7163 9.8999 11 10.6162 11 11.4999C11 12.3836 11.7163 13.0999 12.6 13.0999Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                      <circle className="iconblog" cx={19} cy={19} r={19} fill="#263238" />
                      <path d="M28 12.0073C27.3036 12.4967 26.5324 12.871 25.7164 13.1158C25.2784 12.6141 24.6962 12.2585 24.0488 12.0971C23.4013 11.9357 22.7196 11.9763 22.0961 12.2134C21.4725 12.4505 20.937 12.8726 20.5622 13.4227C20.1873 13.9728 19.9911 14.6244 20 15.2892V16.0137C18.7219 16.0467 17.4555 15.7643 16.3135 15.1917C15.1714 14.6191 14.1893 13.774 13.4545 12.7318C13.4545 12.7318 10.5455 19.2522 17.0909 22.1501C15.5931 23.1629 13.8088 23.6708 12 23.5991C18.5455 27.2216 26.5455 23.5991 26.5455 15.2675C26.5448 15.0657 26.5253 14.8644 26.4873 14.6662C27.2295 13.937 27.7533 13.0163 28 12.0073Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                      <circle className="iconblog" cx={19} cy={19} r={19} fill="#263238" />
                      <path d="M23 11H20.5455C19.4605 11 18.4199 11.4214 17.6527 12.1716C16.8856 12.9217 16.4545 13.9391 16.4545 15V17.4H14V20.6H16.4545V27H19.7273V20.6H22.1818L23 17.4H19.7273V15C19.7273 14.7878 19.8135 14.5843 19.9669 14.4343C20.1204 14.2843 20.3285 14.2 20.5455 14.2H23V11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="col-2">
                    <img className="iconblogs" src={share} fill="#263238" />
                  </div>
                </div>        
              </div>
              <div className="col mt-5 ms-lg-3 rightblogbox">
                <h4 className="leftblogheading">Summary</h4>
                <div className="row">
                  <li className="ms-lg-3 mt-3 liliblog">Signatures are defined as hand-written, personalized depiction of one's identity<br /><span className="ms-lg-3 ps-lg-2">on a paper</span></li>
                  <li className="ms-lg-3 mt-3 liliblog"> Signatures can be both wet-ink as well as digital.</li>
                  <li className="ms-lg-3 mt-3 liliblog">Wet-ink signatures are the oldest method of signing contracts or getting into an<br /><span className="ms-lg-3 ps-lg-2">agreement, but, with the advent of technology, digital signatures are getting</span><br /><span className="ms-lg-3 ps-lg-2">popular by the day</span> </li>
                  <li className="ms-lg-3 mt-3 liliblog"> In this article, we have discussed in detail about the key differences between<br /><span className="ms-lg-3 ps-lg-2">electronic signatures (eSign) &amp; wet-ink signatures.</span></li>                    
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
              </div>
              <div className="col">
                <p className="subpblog mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
                <h2 className="subpheadingblog mt-2">The Introduction Of Electronic Signatures</h2>
                <p className="subpblog mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
                <h2 className="subpheadingblog mt-2">5 Characteristics that makes an eSign valid</h2>
                <p className="subpblog mt-3">
                  1. The electronic signature must be uniquely associated with the individual who is signing the document. This might involve a digital ID issued by the government.
                  <br /><br />
                  2. The individual must have complete control over the digital device used for signing at the time of signing.
                  <br />
                  <br />
                  3. Any alterations to the document or signature after the signing process should be easily identifiable.
                  <br />
                  <br />
                  4. An audit trail should clearly outline the sequence of actions taken during the signing process.
                  <br />
                  <br />
                  5. The certificate used for signing must be issued by a Certifying Authority (CA) recognized under the IT Act.
                </p>
                <p className="subpblog mt-3">
                  The shift to electronic signatures was deemed necessary due to the numerous advantages they offer, such as increased efficiency, cost savings, and greater security.
                </p>
                <h2 className="subpheadingblog mt-2">Differences Between Electronic Signatures and Wet-Ink Signatures</h2>
                <p className="subpblog mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <h2 className="col headingblogdetailsh1">Related Articles</h2>
              <div className="arrows2 col">
                <button className="carousel-control-prev col-1" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                  <span className="arrowbtn3"><a><svg xmlns="http://www.w3.org/2000/svg" width={107} height={48} viewBox="0 0 107 48" fill="none">
                        <circle cx={24} cy={24} r={24} fill="#D9D9D9" />
                        <path d="M31 24H17" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24 31L17 24L24 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg></a></span>
                </button>
                <button className="carousel-control-next col-1 " type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                  <span className="arrowbtn4"><a><svg xmlns="http://www.w3.org/2000/svg" width={107} height={48} viewBox="0 0 107 48" fill="none">
                        <circle cx={83} cy={24} r={24} fill="#2828C2" />
                        <path d="M76 24H90" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M83 31L90 24L83 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg></a></span>
                </button>
              </div>
            </div>
            <div className="container">
              <div className="row cardsblogdetail">
                          <div className="col-3 card-block blogcards mb-4">
                            <img className="card-img-top blogcardimg img-fluid border-rounded-3" src={webinar} alt="100%x18" data-holder-rendered="true" />
                            <div className="card-block m-lg-1">
                              <p className="dateblog">May 25, 2023</p>
                              <p className="blogcardheading">Everything From
                                Our Digital Lending Webinar</p>
                              <p className="card-text blogcarddetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <button className="readmore">Read more <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                          </div>  
                          <div className="col-3 card-block blogcards mb-4">
                            <img className="card-img-top blogcardimg img-fluid" src={appointment} alt="100%x18" data-holder-rendered="true" />
                            <div className="card-block m-lg-1">
                              <p className="dateblog">May 25, 2023</p>
                              <p className="blogcardheading">Amendment to Schedule I of the IT Act: A Complete Explainer</p>
                              <p className="card-text blogcarddetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <button className="readmore">Read more <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                          </div>
                          <div className="col-3 card-block blogcards mb-4">
                            <img className="card-img-top blogcardimg img-fluid" src={esignature} alt="100%x18" data-holder-rendered="true" />
                            <div className="card-block m-lg-1">
                              <p className="dateblog">May 25, 2023</p>
                              <p className="blogcardheading">eSign Raises $2m Series A Funding From Iifl Fintech Fund</p>
                              <p className="card-text blogcarddetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <button className="readmore">Read more <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335" stroke="#2828C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                          </div>
                        </div>     
                      </div>
                    </div>
        </section>
        

            </div>
        );
    }
}
export default Blogdetails;