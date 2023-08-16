import React from "react";
import "./Digitallanding.css";

import grades from "../ComponentsESign/images/rafikigrades.svg";
import digital from "../ComponentsESign/images/rafikiagreement.svg";
import helpful from "../ComponentsESign/images/rafikihelpful.svg";
import team from "../ComponentsESign/images/rafikiteam.svg";
import vectorwhite from "../ComponentsESign/images/Vectorwhite.svg";
import maildigi from "../ComponentsESign/images/rafikimail.svg";
import vectorblue from "../ComponentsESign/images/Vectorblue.svg";
import tata from "../ComponentsESign/images/TATA-Capital.svg";
import times from "../ComponentsESign/images/Timeslogo.svg";
import icici from "../ComponentsESign/images/ICICI.svg";
import southindia from "../ComponentsESign/images/SouthIndiaBank.svg";
import bob from "../ComponentsESign/images/BOB.svg";



class  Digitallanding extends React.Component{
    render(){
        return(
            <div>
                 <section className="container">
          <div className="container no-margin g-0 exp digitaltop full-bleedblog">
            <div className="row">
              <div className="col">
                <h1 className="headingdigital">Digital Landing</h1>
              </div>
              <div className="col">
                <img className="digitalimage1 img-fluid" src={digital} />
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="container digitalmid">
          <div className="row">
            <h4 className="digimidh4">Digital Lending</h4>
            <h1 className="digimidh1">Comply with RBI's new digital signing requirements<br /> for digital lenders in less than 6 days</h1>
            <p className="digimidp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br />
              aliquip ex ea commodo consequat.</p>
            <div className="row">
              <button className="digibtn1">Comply Now</button>
              <button className="digibtn2">Read More</button>
            </div>
            <h1 className="digiheading1"><span className="digiheading2">RBI's new digital lending guidelines</span> mandate a clear loan<br /> document trail backed by digital signatures and explicit<br /> consent - we can help you</h1>
            <div className="row">
                <div className="col-4">
                    <img src={grades} className="gradesimg img-fluid" />
                </div>
                <div className="col-8">
                    <h1 className="digimidh12">Affix Bank/NBFC digital signatures<br/><span className="text-primary">automatically and securely</span>  on each digital 
                                 loan kit</h1>
                        <p className="digimidp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                              <br/>
                                     <br />
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                             fugiat nulla pariatur. </p>

                </div>

            </div>
          </div>
          </div>
          </section>
          <section className="container">
          <div className="container digisec3 full-bleedmiddigi">
            <div className="row">
              <div className="col">
                <h1 className="digimidh13"><span className="text-primary">Collect explicit, auditable consent</span>  from borrowers on digital loan paperwork - while minimizing drop offs</h1>
                <p className="digimidp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                           <br />
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="digimidbtn">Experience The Customer Signing Journey</button>
              </div>
              <div className="col">
                <img className="helpimg img-fluid" src={helpful} />
              </div>
            </div>
          </div>
        </section>
        <section className="middigisec4">
            <div className="container">
        <div className="row">
                <div className="col-4">
                    <img src={team} className="teamsimg img-fluid" />
                </div>
                <div className="col-8">
                    <h1 className="digimidh12">Be Audit Ready with <span className="text-primary">our Secure Audit Trail</span> </h1>
                        <p className="digimidp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                              <br/>
                                     <br />
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                     <br />
                                     
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                             fugiat nulla pariatur.
                             <br/>
                                     
                              </p>

                </div>

            </div>
            </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="row">
              <h2 className="heading2"><span className="text-primary">2000+ Indian Businesses</span>- from high-growth unicorns to the<br /> largest banks - use eSign to go paperless</h2>
              <div className="container-fluid">
                <div className="slidingpart">
                  <div className="slider">
                    <div className="slide-track">
                      {/* 5-slides */}
                      <div className="slide">
                        <img src={tata} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={icici} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={southindia} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={times} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={bob} className="images img-fluid" />
                      </div>
                      {/* 5-slides-doubled */}
                      <div className="slide">
                        <img src={tata} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={icici} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={southindia} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={times} className="images img-fluid" />
                      </div>
                      <div className="slide">
                        <img src={bob} className="images img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></section>
            <section className="digisec5">
                <h1 className="digisec5h1">Still have questions? Need more information about this?</h1>
                <h2 className="digisec5h2">Check out our complete FAQs on the new digital signing<br /> requirements:</h2>
                <div className="row">
                    <div className="col-6 columnmid1">
                      <img src={vectorwhite}  className=""/><span className="text-white" > For Legal teams: Legal analysis of the new digital signing provisions in the guidelines</span>     
                    </div>
                    <div className="col-6">
                    <img src={vectorwhite} className="columnmid"/><span  className="text-white"> For product, digital and ops teams: Sample illustrations<br /> about how your flow will look</span>
                    </div>
                </div>
                <button className="readfaqs">Read FAQs</button>
            </section>
            <section className="enddigimid">
          <div className="container ">
            <h1 className="digiendheading1-1"> <span className="digiendheading1-2">With eSign,</span> You Can Comply In 6 Days.</h1>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="row">
                    <img src ={maildigi} className="maildigi"/>
                </div>
                <div className="row">
                    <h4 className="digilasth2"><span className="digilasth2-1">Book a call </span>with our Implementation Experts. We'll:</h4>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span> Discuss your use case in detail</span>
                    </div>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span> Show you a live demo of the product mapped to your use case</span>
                    </div>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span> Give you a free testing account</span>
                    </div>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span> Prepare an action plan to help you go live before the deadline</span>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <form>
                  <div className="bookaclassform">
                    <div className="bkform">
                      <label>Name<span style={{color: 'red'}}>*</span></label>
                      <input type className height="52px" />
                      <br />
                      <br />
                      <label>Email<span style={{color: 'red'}}>*</span></label>
                      <input type="mail" className height="52px" />
                      <br />
                      <br />
                      <label>Phone<span style={{color: 'red'}}>*</span></label>
                      <input type className height="52px" />
                      <br />
                      <br />
                      <label>Brief Description of Query</label>
                      <input type style={{width: '415px', height: '131px'}} />
                      <br />
                      <br />
                      <label>How did you hear about us? (Optional)</label>
                      <input type style={{width: '415px', height: '52px'}} />
                      <br />
                      <br />
                      <button className="bkformbtn">Submit</button>       
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </section>

          

          
          
       
       
               
        
     
      


            </div>
        )
    }
}
export default Digitallanding;