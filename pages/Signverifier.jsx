import React from "react";
import "./Signverifier.css";
import sign from "../ComponentsESign/images/rafikisignv.svg";
import tata from "../ComponentsESign/images/TATA-Capital.svg";
import times from "../ComponentsESign/images/Timeslogo.svg";
import icici from "../ComponentsESign/images/ICICI.svg";
import southindia from "../ComponentsESign/images/SouthIndiaBank.svg";
import bob from "../ComponentsESign/images/BOB.svg";
import maildigi from "../ComponentsESign/images/rafikimail.svg";
import filesearching from "../ComponentsESign/images/rafikifilesearching.svg";
import upload from "../ComponentsESign/images/Group 235upload.svg";
import vectorblue from "../ComponentsESign/images/Vectorblue.svg";



class  Signverifier extends React.Component{
    render(){
        return(
            <div>
                <section className="container">
          <div className="container no-margin g-0 exp svtop full-bleedblog">
            <div className="row">
              <div className="col">
                <h1 className="headingsv">Sign Verifier</h1>
              </div>
              <div className="col">
                <img className="svimage1 img-fluid" src={sign} />
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="container svmid">
          <div className="row">
            <h4 className="svmidh4">Sign Verifier</h4>
            <h1 className="svmidh1">Digital Signature Verifier</h1>
            <p className="svmidp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br />
              aliquip ex ea commodo consequat.</p>
              <div className="svbox">
                <img src={upload} />
                <h1 ><span>Click to Upload</span> or drag and drop</h1>
                <p>Supported Format: <br />
                     PDF (Max Limit 30 MB per document) 0 out 5 Files Uploaded</p>
              </div>
              <div className="svbox2">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                        <h2>Uploaded Files (0/5)</h2>
                        </div>
                   
                    
                    <h5>Uploaded Files (0/5)</h5>
                    </div>
                    <div className="col-6">
                        <button className="svbox2btn">Initiate Verification</button>
                        
                    </div>
                </div>
                <hr />
                <img src={filesearching}/>
                <p>Upload digitally signed documents to initiate verification</p>
               
              </div>
          </div>
        </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="row">
              <h2 className="heading2"><span className="text-primary">2000+ Top Indian Companies</span>- Trust eSign With Their Digital<br /> Paperworkith their digital paperwork</h2>
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
            <section className="enddigimid">
          <div className="container ">
            <h1 className="digiendheading1-1"> <span className="digiendheading1-2">Build a Document </span>Flow for Free</h1>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="row">
                    <img src ={maildigi} className="maildigi"/>
                </div>
                <div className="row">
                    <h4 className="digilasth2">Our experts will reach out to -</h4>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span>Discuss your use case in detail </span>
                    </div>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span>Help you create a customized document flow </span>
                    </div>
                    <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span>A FREE sandbox account - where you can test out ALL our<br /> features for free </span>
                    </div>
                     <div className="pointsdigi">
                        <img src={vectorblue} className=""/><span>Share a pricing quote to go live with the document flow you<br /> decide to build </span>
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
 export default Signverifier;