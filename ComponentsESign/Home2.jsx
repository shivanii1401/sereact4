import React from "react";

import "./Home2.css";
import "./ResponsiveHOME.css";


import RightSymbolImage from "./images/Vectorblue.svg";
import sitestatsImage from "./images/sitestats.svg";
import APIImage from "./images/API.svg";
import VectorwhiteImage from "./images/Vectorwhite.svg";


class Home2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* section6 */}
          <section className="section6">
            <div className="container">
              <div className="row">
                <h1 className="heading6">
                  With eSign, the power of digital transformation is back in
                   the hands of your operations and business teams
                </h1>
                <h4 className="subheading3">
                  <b>eSign Document Dashboard</b>
                </h4>
                <p className="subheading4">
                  With most digital transformations, your business and ops teams
                  can't move
                  <br /> forward without IT/Tech teams being there.
                </p>
                <div className="box-6 Box6Css">
                  <div className="row">
                    <div className="col-6 LeftSideText">
                      <h2 className="heading11">
                        But with the eSign Document <br />
                        Dashboard they can begin right away:
                      </h2>

                      <p className="subheading5">
                        <img
                          src={RightSymbolImage}
                          className="img-fluid"
                          alt="Vector"
                        />
                        <span style={{ textAlign: "start" }}>
                          <b style={{ color: "black" }}>
                            Get started on day one:
                          </b>
                          Configure powerful automated workflows for all your
                          paperwork journeys in less than an hour - with just a
                          mouse and keyboard
                        </span>
                      </p>
                      <p className="subheading5">
                        <img
                          src={RightSymbolImage}
                          className="img-fluid"
                          alt="Vector"
                        />

                        <span style={{ textAlign: "start" }}>
                          <b style={{ color: "black" }}>
                          Go live instantly: 
                          </b>
                          Automatically pre-populate and send 20,000+ documents
                          out for signing - with a single click and
                          <b style={{ color: "black", marginLeft: "3px" }}>
                            no API integration
                          </b>
                        </span>
                      </p>

                      <p className="subheading5">
                        <img
                          src={RightSymbolImage}
                          className="img-fluid"
                          alt="Vector"
                        />

                        <span style={{ textAlign: "start" }}>
                          One central hub for teams to manage workflows, create
                          templates, track paperwork journeys, maintain stamp
                          and eSign inventory, generate data reports
                          <b style={{ color: "black", marginLeft: "3px" }}>
                            and more
                          </b>
                        </span>
                      </p>
                    </div>
                    <div className="col-6 RightSideText">
                      <img
                        className="text-end mt-5 img-fluid"
                        src={sitestatsImage}
                        alt="Site Stats"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>






          {/* section-7 */}
          <section className="section7">
            <div className="container">
              <div className="row">
                <div className="col-6   LeftSideBox7">
                  <div className="bg-gradient">
                    <img
                      className="m-5 mt-5 pt-5 img-fluid"
                     src={APIImage}
                      alt="API"
                    />
                  </div>
                </div>
                <div className="col-6 pt-5   RightSideBox7">
                  <h2 className="heading7">Powerful yet easy low code APIs</h2>
                  <p className="subheading6">
                    Our Smart API allows you to build digital paperwork journeys
                    in your own app and websites with minimal tech bandwidth
                  </p>



                  <p className="subheading5  subheading7">
                  <img
                     src={VectorwhiteImage}
                      className="img-fluid"
                      alt="Vector"
                    />

                        <span style={{ textAlign: "start" ,color:"white"}}>
                      Non-IT teams can configure document workflows in minutes
                      via the Dashboard
                        </span>
                      </p>


                  <p className="subheading5  subheading7">
                  <img
                    src={VectorwhiteImage}
                      className="img-fluid"
                      alt="Vector"
                    />

                        <span style={{ textAlign: "start" ,color:"white"}}>
                        Your tech team can integrate our API in a day
                        </span>
                      </p>
                  <p className="subheading5   subheading7">
                  <img
                     src={VectorwhiteImage}
                      className="img-fluid"
                      alt="Vector"
                    />

                        <span style={{ textAlign: "start" ,color:"white"}}>
                        Non-IT teams can make changes to API flows without calling
                      IT teams
                        </span>
                      </p>

            
            
                </div>
              </div>
              <h2 className="heading8">
                Do you want to remove the paper from paperwork?
              </h2>
              <div className="row-button text-center mt-4">
                <button type="button" className="btn5">
                  Get a free Sandbox
                </button>
              </div>
            </div>
          </section>






          {/* section-8 */}
          <section className="section8">
            <div className="container">
              <div className="row">
                <h1 className="heading9">
                  Our expert team will guide you through eSign
                  <span className="text-primary">
                    {" "}
                    - to go-live
                    <br />
                    and beyond
                  </span>
                </h1>
                <div className="row mt-5 pb-5   MainDivOfSection8">
                  <div
                    className="col-sm m-2  Section8MainDiv"
                    style={{
                      width: "354px",
                      height: "339px",
                      flexShrink: 0,
                      borderRadius: "20px",
                      border: "1px solid #D9D9D9",
                    }}
                  >
                    <h6 className="mt-5 ms-lg-2">
                      <b>
                        We'll help you meet your
                    
                        go-live timelines
                      </b>
                    </h6>


                    
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Advance implementation and tech support
                        </span>
                    
                    </p>

                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      LIVE training sessions
                        </span>
                    
                    </p>
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Dedicated Go-Live Manager
                        </span>
                    
                    </p>
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Template and Workflow Setup
                        </span>
                    
                    </p>
          {/* Other subheadings */}
          </div>


                  <div
                    className="col-sm m-2  Section8MainDiv"
                    style={{
                      width: "354px",
                      height: "339px",
                      flexShrink: 0,
                      borderRadius: "20px",
                      border: "1px solid #D9D9D9",
                    }}
                  >



                  
          {/* Content for the second column */}
          <h6 className="mt-5 ms-lg-2">
                      <b>
                      We'll stay with you even after 
you go live
                      </b>
                    </h6>


                    
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Email ticket based support with 15 minute response time
                        </span>
                    
                    </p>

                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Round-the-clock LIVE mobile + Whatsapp support
                        </span>
                    
                    </p>
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Rapid Response Team for Mission Critical Emergencies
                        </span>
                    
                    </p>
                   


          
          </div>
                  <div
                    className="col-sm m-2   Section8MainDiv"
                    style={{
                      width: "354px",
                      height: "339px",
                      flexShrink: 0,
                      borderRadius: "20px",
                      border: "1px solid #D9D9D9",
                    }}
                  >
          {/* Content for the third column */}
          <h6 className="mt-5 ms-lg-2">
                      <b>
                      We are your long term partners 
for digital transformation success
                      </b>
                    </h6>


                    
                    <p className="subheading5 subheading8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Dedicated Account Manager who is available whenever you need them
                        </span>
                    
                    </p>

                    <p className="subheading5 subheading8">
                      <svg  style={{marginLeft:"0px !important"}}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px" ,paddingRight:"20px"}}>
                      End-to-end expansion support  
                        </span>
                    
                    </p>
                    <p className="subheading5 subheading8">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                          fill="#01E4F6"
                        />
                      </svg>

                      <span style={{ textAlign: "start" ,color:"black" ,marginLeft:"10px"}}>
                      Monthly Business Reviews to keep us accountable 
                        </span>
                    
                    </p>

          
          
          </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}
export default Home2;
