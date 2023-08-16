import React from "react";
import { NavLink } from "react-router-dom";

import Aii from "./SliderA";

import BlogPart from "./BlogPart";
import Home2 from "./Home2";

import "./Home.css";
import "./Responsive.css";

import bannerimg from "./images/Home.svg";
import tata from "./images/TATA-Capital.svg";
import times from "./images/Timeslogo.svg";
import icici from "./images/ICICI.svg";
import southindia from "./images/SouthIndiaBank.svg";
import bob from "./images/BOB.svg";

class HomeMain extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* section1 */}
          <section className="section1">
            <div className="container">
              <div className="row FirstDivFirstSection">
                <div className="col-md-6">
                  <h1 className="heading1">
                    E-Sign Online:
                    <br />
                    The Fast, Secure, and Eco-Friendly Way to Sign
                  </h1>
                  <p className="para1">
                    With eSign Document Infrastructure you get eSign, eStamp,
                    Document <br /> Assembly, Document Enforceability,
                    Automation, Security and <br /> MORE...all under one roof
                  </p>
                  <div className="Section1Button">
                    <NavLink to="/bookacall">
                      <button type="button" className="btn1">
                        Book a Call
                      </button>
                    </NavLink>
                    <button type="button" className="btn2">
                      Book a Demo
                    </button>
                  </div>
                </div>
                <div className="col-md-6  ">
                  <img
                    className="image1 img-fluid"
                    src={bannerimg}
                    alt="Home Image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* section-2 */}

          <section className="section2">
            <div className="container">
              <div className="row">
                <h1 className="heading2 text-center mt-5">
                  <span className="text-primary">2000+ Indian Businesses</span>-
                  from high-growth unicorns to the largest banks - use eSign to
                  go paperless
                </h1>
                <div className="container-fluid  SliderInHome">
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
              </div>
            </div>
          </section>

          {/* section-3 */}
          <Aii />

          {/* section-4 */}
          <section className="section4 Section4ClassMain">
            <div className="container">
              <div className="row">
                <h1 className="text-center">
                  For centuries, we''ve seen physical paperwork as an
                  <br /> inevitable, unchangeable part of doing business.
                  <span>
                    {" "}
                    With eSign,
                    <br /> this changes forever{" "}
                  </span>
                </h1>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="box-left">
                    <div className="row">
                      <h1>Physical Paperwork</h1>
                      <div className="row ">
                        <div className="col-1 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 8L8 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 8L14 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>{" "}
                        </div>
                        <div className=" col-10">
                          <p className="leftp HeaderOfPhysicalPaperWork">
                            {" "}
                            Critical business processes take days, if not weeks
                            due to slow paperwork
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 8L8 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 8L14 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Teams spend hours daily bogged down in paperwork
                            tasks
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 8L8 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 8L14 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Customers and business partners dread doing
                            paperwork with you
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 8L8 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 8L14 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Physical documents are prone to mistakes,
                            wear-and-tear and damage - putting your business at
                            serious compliance risk{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 8L8 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 8L14 14"
                              stroke="#2828C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            You incur significant costs transporting, storing,
                            tracking and managing paperwork{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6   RightBox">
                  <div className="box-right  ">
                    <div className="row">
                      <h1>eSign Paperwork</h1>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                              fill="#01E4F6"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Critical business processes (loans, account
                            openings, onboardings etc.)
                            <strong> take minutes</strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                              fill="#01E4F6"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Teams spend <strong>zero</strong> time on paperwork
                            tasks
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                              fill="#01E4F6"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Paperwork signing for your customers and business
                            partners is <strong> faster and easier</strong> than
                            making a digital payment
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                              fill="#01E4F6"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            Documents executed through eSign are immune to
                            damage and loss and come with presumptions of
                            validity under the<strong>Evidence Act</strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 19.8C6.149 19.8 2.2 15.851 2.2 11C2.2 6.149 6.149 2.2 11 2.2C15.851 2.2 19.8 6.149 19.8 11C19.8 15.851 15.851 19.8 11 19.8ZM16.049 6.138L8.8 13.387L5.951 10.549L4.4 12.1L8.8 16.5L17.6 7.7L16.049 6.138Z"
                              fill="#01E4F6"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <p className="leftp">
                            <strong>Zero</strong> logistics costs from paperwork
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* section-5 */}
          <section className="section5">
            <div className="container">
              <div className="row ">
                <h1 className="">Presenting eSign Document Infrastructure</h1>
                <p className="Section5Para">
                  Everything your company needs to digitally transform its
                  paperwork processes - in one unified solution
                </p>
              </div>
              <div className="row  Section5DivMain">
                <div className="sec5card">
                  <div className="row">
                    <h3 className="Sec5fIRSTHeading">
                      Document Execution Flow
                    </h3>
                    <p className="Sec5fIRSTPara">
                      Everything it takes to get a single document digitally
                      executed
                    </p>
                    <div className="row d-flex align-items-center justify-content-center  ParentSub5SubCard">
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="27"
                                  height="36"
                                  viewBox="0 0 27 36"
                                  fill="none"
                                >
                                  <path
                                    d="M16.7502 1.91309H4.41683C3.59908 1.91309 2.81482 2.25206 2.23658 2.85544C1.65835 3.45882 1.3335 4.27717 1.3335 5.13048V30.8696C1.3335 31.7229 1.65835 32.5413 2.23658 33.1446C2.81482 33.748 3.59908 34.087 4.41683 34.087H22.9168C23.7346 34.087 24.5188 33.748 25.0971 33.1446C25.6753 32.5413 26.0002 31.7229 26.0002 30.8696V11.5653L16.7502 1.91309Z"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M16.7495 1.91309V11.5653H25.9995"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M19.8328 19.6088H7.49951"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M19.8328 26.0435H7.49951"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M10.5828 13.174H9.04118H7.49951"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>Document Assembly</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="34"
                                  viewBox="0 0 31 34"
                                  fill="none"
                                >
                                  <path
                                    d="M15.4 10.6C23.3529 10.6 29.8 8.45097 29.8 5.8C29.8 3.14903 23.3529 1 15.4 1C7.4471 1 1 3.14903 1 5.8C1 8.45097 7.4471 10.6 15.4 10.6Z"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    opacity="0.5"
                                    d="M29.8 17C29.8 19.656 23.4 21.8 15.4 21.8C7.4 21.8 1 19.656 1 17"
                                    stroke="#00E9FB"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 5.79999V28.2C1 30.856 7.4 33 15.4 33C23.4 33 29.8 30.856 29.8 28.2V5.79999"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>Secure Storage</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="36"
                                  height="38"
                                  viewBox="0 0 36 38"
                                  fill="none"
                                >
                                  <path
                                    d="M4.03878 16.1563H22.7368C23.0859 16.1563 23.3352 16.4583 23.3352 16.7603V16.8609C23.3352 17.2132 23.036 17.4649 22.7368 17.4649H4.03878C3.68975 17.4649 3.44044 17.1629 3.44044 16.8609V16.7603C3.39058 16.4583 3.68975 16.1563 4.03878 16.1563ZM10.2216 13.1364C10.2216 13.3881 10.4709 13.6397 10.7202 13.6397H22.8864C23.1357 13.6397 23.385 13.3881 23.385 13.1364V12.8344C23.385 12.5325 23.1357 12.3311 22.8864 12.3311H10.7202C10.4709 12.3311 10.2216 12.5325 10.2216 12.8344V13.1364ZM3.39058 20.7364C3.39058 21.0887 3.68975 21.3404 3.98892 21.3404H21.5402L22.1385 20.0318H4.03878C3.68975 20.0318 3.44044 20.3338 3.44044 20.6358V20.7364H3.39058ZM22.8366 8.45563H10.7202C10.4709 8.45563 10.2216 8.70728 10.2216 8.95894V9.26093C10.2216 9.51258 10.4709 9.76424 10.7202 9.76424H22.8864C23.1357 9.76424 23.385 9.51258 23.385 9.26093V8.95894C23.3352 8.70728 23.1357 8.45563 22.8366 8.45563ZM3.39058 24.5616C3.39058 24.9139 3.68975 25.1656 3.98892 25.1656H19.9945C20.0942 24.7126 20.144 24.4609 20.1939 24.3099L20.3934 23.857H4.03878C3.68975 23.857 3.44044 24.1589 3.44044 24.4609V24.5616H3.39058ZM10.4211 34.0238C11.2687 33.0676 12.2659 32.7152 13.313 33.7722C13.6621 34.1245 13.8615 34.1245 14.2105 34.1245C14.9584 34.1748 15.5069 32.8662 16.3546 33.2185C17.4515 33.6715 18.349 35.1815 19.1468 33.3695C19.446 32.7656 18.6482 32.9166 18.4986 33.2689C18.1496 34.0238 16.9529 32.2623 16.4044 32.3126C15.5069 32.4132 14.5596 33.7219 13.6122 32.7656C12.2161 31.3563 10.9695 32.4636 9.87258 33.7219C9.47368 34.1748 10.2216 34.2252 10.4211 34.0238ZM26.0776 25.1152V34.4768C26.0776 35.4834 25.2798 36.2887 24.2825 36.2887H3.09141C2.09418 36.2887 1.2964 35.4834 1.2964 34.4768V7.70066C1.2964 6.69404 2.09418 5.88874 3.09141 5.88874H24.2327C25.2299 5.88874 26.0277 6.69404 26.0277 7.70066V11.4755L27.374 8.55629V6.29139C27.374 5.18411 26.4765 4.27815 25.3795 4.27815H1.99446C0.897507 4.27815 0 5.18411 0 6.29139V35.9868C0 37.094 0.897507 38 1.99446 38H25.3795C26.4765 38 27.374 37.094 27.374 35.9868V22.196L26.0776 25.1152ZM4.33795 29.0411H19.4958C19.5457 28.5377 19.6454 28.1351 19.6953 27.7325H4.33795C3.98892 27.7325 3.73961 28.0344 3.73961 28.3364V28.4371C3.68975 28.7391 3.98892 29.0411 4.33795 29.0411ZM36 2.01325L34.7535 4.78146L33.5069 7.54967L24.8809 26.4742C24.8809 26.5748 19.9446 32.3126 19.9446 32.3126C19.8947 32.4132 19.7452 32.4132 19.6454 32.3629C19.5457 32.3126 19.4958 32.2119 19.4958 32.1113C19.4958 32.1113 20.5928 24.5616 20.6427 24.5113L29.2188 5.53642L30.4654 2.76821L31.7119 0L36 2.01325Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>Bharat Sign</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sec5card">
                  <div className="row">
                    <h3 className="Sec5fIRSTHeading">Leegality X Factor</h3>
                    <p className="Sec5fIRSTPara">
                      What it takes to implement digital paperwork at scale. 84%
                      of digital transformations fail. <br />
                      The X Factor ensure we are in the 16%
                    </p>
                    <div className="row d-flex align-items-center justify-content-center mb-5 pb-4  ParentSub5SubCard">
                      <div className="col-md-3 sec5subcard ">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="42"
                                  height="39"
                                  viewBox="0 0 42 39"
                                  fill="none"
                                >
                                  <path
                                    d="M9.30695 24.5896C8.52261 24.6299 1.72248 19.1623 1.61773 11.9C1.584 11.0678 1.70851 9.79851 2.82957 9.94591C2.9595 9.96459 3.08447 10.0087 3.19735 10.0757C3.31023 10.1427 3.40881 10.2313 3.48744 10.3364C3.56608 10.4415 3.62323 10.561 3.65564 10.6882C3.68805 10.8154 3.69508 10.9478 3.67632 11.0777C3.01104 16.0274 7.65769 20.9674 9.30564 22.2945C10.8764 20.9254 14.997 16.8609 14.9971 11.9C14.9533 11.112 14.725 10.1073 15.7793 9.92346C15.9092 9.90394 16.0418 9.91031 16.1693 9.9422C16.2968 9.97409 16.4167 10.0309 16.5222 10.1093C16.6276 10.1877 16.7165 10.2862 16.7838 10.3991C16.851 10.512 16.8953 10.6371 16.914 10.7672C17.999 17.7398 10.0117 24.9146 9.30695 24.5896ZM14.0385 8.37104C14.1953 8.55784 14.4157 8.67997 14.6573 8.71387C14.8988 8.74777 15.1443 8.69104 15.3465 8.55463C15.4634 8.47654 15.5627 8.37483 15.6379 8.25604C15.7131 8.13725 15.7626 8.00402 15.7832 7.86494C15.8038 7.72585 15.795 7.584 15.7574 7.44852C15.7198 7.31304 15.6543 7.18693 15.565 7.07832C14.8316 6.11171 13.8844 5.32793 12.7976 4.78833C11.7108 4.24874 10.5139 3.96796 9.30054 3.96797C8.08717 3.96798 6.89026 4.24878 5.80349 4.7884C4.71671 5.32802 3.76956 6.11181 3.03614 7.07844C2.87322 7.28186 2.7961 7.54082 2.82119 7.80023C2.84628 8.05963 2.97161 8.29901 3.1705 8.46743C3.36939 8.63585 3.62615 8.72001 3.88615 8.70201C4.14615 8.684 4.38886 8.56526 4.56264 8.37104C5.12175 7.63914 5.83724 7.04133 6.65688 6.62126C7.47653 6.20119 8.37963 5.96946 9.30027 5.94299C10.221 5.96941 11.1242 6.20111 11.944 6.62118C12.7637 7.04125 13.4793 7.63909 14.0385 8.37104ZM5.92228 9.40754C5.82828 9.50225 5.7542 9.61483 5.70441 9.73864C5.65462 9.86245 5.63014 9.99497 5.6324 10.1284C5.63466 10.2618 5.66362 10.3934 5.71757 10.5155C5.77152 10.6375 5.84937 10.7475 5.94652 10.839C6.04368 10.9305 6.15817 11.0016 6.28324 11.0481C6.40832 11.0946 6.54144 11.1156 6.67476 11.1098C6.80808 11.1041 6.93889 11.0716 7.05948 11.0145C7.18006 10.9574 7.28798 10.8766 7.37687 10.7771C7.62076 10.5072 7.91856 10.2913 8.25103 10.1436C8.58351 9.9959 8.94327 9.91955 9.30708 9.9195C9.67089 9.91945 10.0307 9.9957 10.3632 10.1433C10.6957 10.2909 10.9936 10.5067 11.2375 10.7766C11.3264 10.8762 11.4342 10.957 11.5548 11.0142C11.6754 11.0714 11.8062 11.1039 11.9395 11.1098C12.0729 11.1156 12.206 11.0947 12.3311 11.0482C12.4563 11.0017 12.5708 10.9306 12.668 10.8392C12.7652 10.7477 12.8431 10.6377 12.897 10.5156C12.951 10.3936 12.98 10.2619 12.9822 10.1285C12.9845 9.99503 12.96 9.86248 12.9102 9.73866C12.8603 9.61485 12.7862 9.50226 12.6922 9.40756C12.2595 8.94241 11.7357 8.57142 11.1533 8.31774C10.5709 8.06406 9.94247 7.93314 9.30723 7.93314C8.67199 7.93314 8.04356 8.06407 7.46117 8.31775C6.87877 8.57143 6.35491 8.94239 5.92228 9.40754ZM9.30028 1.9654C10.7372 1.98278 12.1548 2.29878 13.463 2.89333C14.7712 3.48788 15.9415 4.34799 16.8996 5.41904C17.0868 5.60181 17.3382 5.70397 17.5999 5.70361C17.8615 5.70325 18.1127 5.60042 18.2994 5.41714C18.4862 5.23385 18.5937 4.98471 18.599 4.7231C18.6042 4.46149 18.5068 4.20822 18.3276 4.01758C17.1883 2.75295 15.7959 1.74182 14.2408 1.04971C12.6857 0.35761 11.0026 -1.9798e-05 9.3004 8.2202e-10C7.59824 1.97997e-05 5.91508 0.357689 4.36 1.04983C2.80491 1.74197 1.41261 2.75313 0.273322 4.01779C0.0932984 4.2083 -0.00477816 4.46185 0.000179181 4.72392C0.00513652 4.98599 0.112732 5.23565 0.299832 5.41922C0.486931 5.60279 0.738593 5.70561 1.00071 5.70558C1.26282 5.70554 1.51446 5.60266 1.70151 5.41904C2.65948 4.34805 3.82969 3.48797 5.13784 2.89342C6.44598 2.29888 7.86347 1.98283 9.30028 1.9654ZM33.3013 36.9146L23.8643 36.9039C23.2089 36.8963 22.583 36.6307 22.1222 36.1646C21.6615 35.6985 21.4031 35.0695 21.4031 34.4141C21.4031 33.7587 21.6615 33.1297 22.1223 32.6636C22.583 32.1976 23.209 31.9319 23.8644 31.9244C30.4087 32.5853 31.2995 23.3566 24.7739 22.9321L14.3003 22.9322C14.0385 22.9373 13.7891 23.0449 13.6057 23.2319C13.4224 23.4189 13.3196 23.6703 13.3197 23.9322C13.3197 24.1941 13.4224 24.4456 13.6058 24.6325C13.7891 24.8195 14.0385 24.9271 14.3004 24.9322H24.7739C25.435 24.9335 26.0686 25.1971 26.5357 25.6651C27.0027 26.133 27.265 26.7672 27.265 27.4283C27.265 28.0894 27.0027 28.7236 26.5357 29.1915C26.0686 29.6595 25.435 29.9231 24.7739 29.9244H23.8642C17.9374 30.1284 17.928 38.7216 23.8634 38.9039L33.3003 38.9146C33.5619 38.9093 33.811 38.8017 33.9942 38.6149C34.1774 38.428 34.2801 38.1768 34.2802 37.9151C34.2804 37.6534 34.1779 37.4021 33.9949 37.2151C33.8119 37.0281 33.5629 36.9202 33.3013 36.9146ZM38.3218 35.0018V37.9146C38.3218 38.1798 38.2164 38.4342 38.0289 38.6217C37.8414 38.8093 37.587 38.9146 37.3218 38.9146C37.0566 38.9146 36.8022 38.8093 36.6147 38.6217C36.4271 38.4342 36.3218 38.1798 36.3218 37.9146V35.0019C35.4394 34.7598 34.6748 34.2058 34.1699 33.4428C33.665 32.6797 33.4541 31.7594 33.5762 30.8526C33.6983 29.9459 34.1453 29.1142 34.8341 28.5119C35.5229 27.9097 36.4068 27.5777 37.3218 27.5777C38.2368 27.5777 39.1207 27.9097 39.8095 28.5119C40.4983 29.1142 40.9452 29.9459 41.0674 30.8526C41.1895 31.7594 40.9785 32.6797 40.4736 33.4428C39.9687 34.2058 39.2041 34.7597 38.3218 35.0018ZM37.3218 29.5777C36.8522 29.5845 36.4041 29.7758 36.0743 30.1103C35.7446 30.4448 35.5597 30.8956 35.5597 31.3653C35.5597 31.835 35.7446 32.2858 36.0743 32.6203C36.404 32.9548 36.8521 33.1462 37.3218 33.1529C37.7914 33.1462 38.2395 32.9549 38.5693 32.6204C38.899 32.2859 39.0838 31.8351 39.0839 31.3654C39.0839 30.8957 38.899 30.4448 38.5693 30.1103C38.2396 29.7758 37.7915 29.5845 37.3218 29.5777Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6 className="ExecutionAutomationH6">
                              Execution Automation & Logistics
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="34"
                                  height="34"
                                  viewBox="0 0 34 34"
                                  fill="none"
                                >
                                  <path
                                    d="M25.7274 5.36365H8.27286C6.66621 5.36365 5.36377 6.66609 5.36377 8.27274V25.7273C5.36377 27.3339 6.66621 28.6364 8.27286 28.6364H25.7274C27.3341 28.6364 28.6365 27.3339 28.6365 25.7273V8.27274C28.6365 6.66609 27.3341 5.36365 25.7274 5.36365Z"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M21.3635 12.6364H12.6362V21.3636H21.3635V12.6364Z"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M12.6362 1V5.36364"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M21.3638 1V5.36364"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M12.6362 28.6364V33"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M21.3638 28.6364V33"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M28.6362 12.6364H32.9999"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M28.6362 19.9091H32.9999"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 12.6364H5.36364"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M1 19.9091H5.36364"
                                    stroke="#01E4F6"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>Smart API</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="36"
                                  height="37"
                                  viewBox="0 0 36 37"
                                  fill="none"
                                >
                                  <path
                                    d="M17.9999 17.7373C19.3503 17.7373 20.6704 17.3368 21.7932 16.5866C22.9159 15.8364 23.7911 14.7701 24.3078 13.5225C24.8246 12.2749 24.9598 10.9021 24.6963 9.57769C24.4329 8.25326 23.7826 7.0367 22.8278 6.08185C21.8729 5.12699 20.6564 4.47673 19.3319 4.21329C18.0075 3.94984 16.6347 4.08505 15.3871 4.60181C14.1396 5.11858 13.0732 5.99369 12.323 7.11648C11.5728 8.23927 11.1724 9.55931 11.1724 10.9097C11.1724 12.7205 11.8917 14.4571 13.1721 15.7375C14.4525 17.0179 16.1892 17.7373 17.9999 17.7373ZM17.9999 5.32347C19.1048 5.32347 20.1848 5.6511 21.1035 6.26492C22.0221 6.87874 22.7381 7.75119 23.1609 8.77193C23.5837 9.79268 23.6944 10.9159 23.4788 11.9995C23.2633 13.0831 22.7312 14.0785 21.95 14.8597C21.1687 15.641 20.1734 16.173 19.0898 16.3886C18.0061 16.6041 16.8829 16.4935 15.8622 16.0707C14.8415 15.6479 13.969 14.9319 13.3552 14.0132C12.7414 13.0946 12.4137 12.0145 12.4137 10.9097C12.4137 9.42813 13.0023 8.00725 14.0499 6.95964C15.0975 5.91202 16.5184 5.32347 17.9999 5.32347Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M29.7932 29.5303C29.7932 27.0611 28.8123 24.693 27.0663 22.9469C25.3203 21.2009 22.9522 20.22 20.4829 20.22H15.5174C13.0481 20.22 10.68 21.2009 8.93397 22.9469C7.18794 24.693 6.20703 27.0611 6.20703 29.5303C6.20703 29.695 6.27243 29.8528 6.38883 29.9692C6.50523 30.0856 6.6631 30.151 6.82772 30.151H29.1725C29.3372 30.151 29.495 30.0856 29.6114 29.9692C29.7278 29.8528 29.7932 29.695 29.7932 29.5303ZM7.44841 28.9097C7.60507 26.879 8.52387 24.9827 10.0205 23.6012C11.517 22.2197 13.4807 21.4553 15.5174 21.4614H20.4829C22.5196 21.4553 24.4832 22.2197 25.9798 23.6012C27.4764 24.9827 28.3952 26.879 28.5519 28.9097H7.44841Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M35.3793 31.3925H34.1379V12.1511C34.1379 11.4926 33.8764 10.8611 33.4107 10.3955C32.9451 9.92989 32.3136 9.66831 31.6552 9.66831H29.1724C29.1734 9.19423 28.9935 8.73764 28.6694 8.39163C28.3453 8.04563 27.9014 7.83627 27.4283 7.80624C26.7723 5.82388 25.5082 4.09871 23.8156 2.87593C22.123 1.65316 20.0881 0.994995 18 0.994995C15.9119 0.994995 13.877 1.65316 12.1844 2.87593C10.4918 4.09871 9.22768 5.82388 8.57172 7.80624C8.09859 7.83627 7.65473 8.04563 7.33064 8.39163C7.00655 8.73764 6.82663 9.19423 6.82759 9.66831H4.34483C3.68636 9.66831 3.05486 9.92989 2.58925 10.3955C2.12364 10.8611 1.86207 11.4926 1.86207 12.1511V31.3925H0.62069C0.456073 31.3925 0.298198 31.4578 0.181796 31.5742C0.0653939 31.6906 0 31.8485 0 32.0131V33.8752C0 34.6983 0.326969 35.4877 0.908979 36.0697C1.49099 36.6517 2.28036 36.9787 3.10345 36.9787H32.8965C33.7196 36.9787 34.509 36.6517 35.091 36.0697C35.673 35.4877 36 34.6983 36 33.8752V32.0131C36 31.8485 35.9346 31.6906 35.8182 31.5742C35.7018 31.4578 35.5439 31.3925 35.3793 31.3925ZM27.931 9.66831V10.9097C27.931 11.0743 27.8656 11.2322 27.7492 11.3486C27.6328 11.465 27.475 11.5304 27.3103 11.5304H26.6897V9.04762H27.3103C27.475 9.04762 27.6328 9.11302 27.7492 9.22942C27.8656 9.34582 27.931 9.5037 27.931 9.66831ZM8.06896 9.66831C8.06896 9.5037 8.13436 9.34582 8.25076 9.22942C8.36716 9.11302 8.52504 9.04762 8.68966 9.04762H9.31034V11.5304H8.68966C8.52504 11.5304 8.36716 11.465 8.25076 11.3486C8.13436 11.2322 8.06896 11.0743 8.06896 10.9097V9.66831ZM3.10345 12.1511C3.10345 11.8218 3.23424 11.5061 3.46704 11.2733C3.69984 11.0405 4.01559 10.9097 4.34483 10.9097H6.82759C6.82759 11.4035 7.02377 11.8772 7.37297 12.2264C7.72218 12.5756 8.1958 12.7718 8.68966 12.7718H9.93103C10.0957 12.7718 10.2535 12.7064 10.3699 12.59C10.4863 12.4736 10.5517 12.3157 10.5517 12.1511V8.42693C10.5517 8.26232 10.4863 8.10444 10.3699 7.98804C10.2535 7.87164 10.0957 7.80624 9.93103 7.80624H9.88759C10.5174 6.1656 11.6299 4.75448 13.0782 3.75911C14.5265 2.76373 16.2426 2.23089 18 2.23089C19.7574 2.23089 21.4735 2.76373 22.9218 3.75911C24.3701 4.75448 25.4826 6.1656 26.1124 7.80624H26.069C25.9043 7.80624 25.7465 7.87164 25.6301 7.98804C25.5137 8.10444 25.4483 8.26232 25.4483 8.42693V12.1511C25.4483 12.3157 25.5137 12.4736 25.6301 12.59C25.7465 12.7064 25.9043 12.7718 26.069 12.7718H26.6897C26.5353 14.3081 25.8138 15.7318 24.6661 16.7647C23.5183 17.7976 22.0268 18.3657 20.4828 18.358H18C17.8354 18.358 17.6775 18.4234 17.5611 18.5398C17.4447 18.6562 17.3793 18.814 17.3793 18.9787C17.3793 19.1433 17.4447 19.3011 17.5611 19.4176C17.6775 19.534 17.8354 19.5993 18 19.5993H20.4828C22.3721 19.6039 24.1925 18.8902 25.5754 17.603C26.9583 16.3157 27.8004 14.551 27.931 12.6662C28.2942 12.5378 28.6087 12.2999 28.831 11.9853C29.0533 11.6707 29.1726 11.2949 29.1724 10.9097H31.6552C31.9844 10.9097 32.3002 11.0405 32.533 11.2733C32.7658 11.5061 32.8965 11.8218 32.8965 12.1511V31.3925H22.3448C22.2631 31.392 22.1822 31.4076 22.1065 31.4385C22.0309 31.4694 21.9621 31.5149 21.9041 31.5725L20.849 32.6338H15.151L14.0959 31.5725C14.0379 31.5149 13.9691 31.4694 13.8935 31.4385C13.8178 31.4076 13.7369 31.392 13.6552 31.3925H3.10345V12.1511ZM34.7586 33.8752C34.7586 34.3691 34.5624 34.8427 34.2132 35.1919C33.864 35.5411 33.3904 35.7373 32.8965 35.7373H3.10345C2.6096 35.7373 2.13597 35.5411 1.78677 35.1919C1.43756 34.8427 1.24138 34.3691 1.24138 33.8752V32.6338H13.4007L14.4559 33.6952C14.5139 33.7527 14.5826 33.7982 14.6583 33.8291C14.7339 33.86 14.8149 33.8757 14.8966 33.8752H21.1034C21.1851 33.8757 21.2661 33.86 21.3417 33.8291C21.4174 33.7982 21.4861 33.7527 21.5441 33.6952L22.5993 32.6338H34.7586V33.8752Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>
                              Customer <br /> Success Service
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sec5card">
                  <div className="row">
                    <h3 className="Sec5fIRSTHeading">
                      Enterprise Administration
                    </h3>
                    <p className="Sec5fIRSTPara">
                      Powerful Enterprise Administrative capabilities right out
                      of the box
                    </p>
                    <div className="row d-flex align-items-center justify-content-center  ParentSub5SubCard">
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="46"
                                  height="43"
                                  viewBox="0 0 46 43"
                                  fill="none"
                                >
                                  <path
                                    d="M24.7868 14.0846C24.7471 14.0846 24.7075 14.0796 24.667 14.0688C24.4211 14.0026 24.2752 13.75 24.3418 13.5041L25.6505 8.62501C25.7172 8.37867 25.9685 8.23275 26.2162 8.29895C26.4621 8.36516 26.608 8.6178 26.5413 8.86369L25.2326 13.7428C25.1768 13.949 24.9903 14.0846 24.7868 14.0846Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M14.7522 17.6078C14.6567 17.6078 14.5612 17.5785 14.4784 17.5182L9.01834 13.497C8.81389 13.3457 8.76975 13.057 8.92107 12.8521C9.07239 12.6472 9.36061 12.6044 9.56597 12.7539L15.026 16.7751C15.2304 16.9264 15.2746 17.2151 15.1233 17.42C15.0332 17.543 14.8936 17.6078 14.7522 17.6078Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M27.775 34.7168C27.603 34.7168 27.4373 34.6195 27.358 34.4529L25.9097 31.391C25.8007 31.1608 25.8989 30.8857 26.1295 30.7767C26.3573 30.6682 26.6339 30.7645 26.7437 30.9965L28.1921 34.0584C28.3011 34.2885 28.2029 34.5637 27.9723 34.6727C27.9083 34.7028 27.8417 34.7168 27.775 34.7168Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M11.0539 32.0696C10.9179 32.0696 10.7828 32.0093 10.6918 31.894C10.5342 31.694 10.5684 31.404 10.7684 31.2464L14.6882 28.1566C14.8872 27.9985 15.1773 28.0332 15.3358 28.2331C15.4934 28.4331 15.4592 28.7231 15.2592 28.8807L11.3394 31.9706C11.2547 32.0372 11.1538 32.0696 11.0539 32.0696Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M32.9958 20.4764C32.7896 20.4764 32.6013 20.3373 32.5491 20.1283C32.486 19.8815 32.6356 19.6307 32.8832 19.5681L36.1663 18.7381C36.4131 18.6755 36.6644 18.8255 36.7256 19.0723C36.7887 19.3191 36.6392 19.5699 36.3915 19.6325L33.1084 20.4625C33.0706 20.4719 33.0328 20.4764 32.9958 20.4764Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M24.0399 32.5494C23.7346 32.5494 23.4302 32.5304 23.1257 32.5115C22.8852 32.4962 22.6961 32.2985 22.6934 32.0571C22.6907 31.8162 22.8735 31.6131 23.114 31.5919C25.7269 31.3604 28.0949 29.9954 29.6116 27.8473C30.6916 26.3282 31.2617 24.5489 31.2617 22.6989C31.2617 18.2022 27.9066 14.3904 23.4563 13.832C23.2149 13.8018 23.0384 13.5888 23.0537 13.3456C23.069 13.1024 23.2707 12.9133 23.5139 12.9133L24.0399 12.9043C29.4558 12.9043 33.862 17.3105 33.862 22.7268C33.862 28.1431 29.4558 32.5494 24.0399 32.5494ZM28.5686 15.0673C30.7852 16.8876 32.184 19.6505 32.184 22.6989C32.184 24.7412 31.5544 26.7061 30.3637 28.38C29.7666 29.2262 29.0496 29.9621 28.2435 30.5705C31.0365 29.0673 32.9397 26.1152 32.9397 22.7268C32.9397 19.4717 31.1834 16.6192 28.5686 15.0673Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M6.91237 14.4165C6.59713 14.4165 6.27288 14.3782 5.95043 14.303C5.74147 14.2544 5.59285 14.0675 5.59375 13.8527C5.59465 13.6379 5.74327 13.4519 5.95313 13.4041C7.50053 13.0529 8.58137 11.7018 8.58137 10.1188C8.58137 8.55523 7.47621 7.16951 5.95313 6.82409C5.74327 6.77635 5.59465 6.59036 5.59375 6.37599C5.59285 6.16118 5.74057 5.97428 5.94953 5.92519C6.27108 5.84999 6.59443 5.81171 6.91237 5.81171C9.28211 5.81171 11.2105 7.7437 11.2105 10.1188C11.2105 12.4886 9.28211 14.4165 6.91237 14.4165ZM8.10129 6.95064C8.96776 7.74865 9.50368 8.89074 9.50368 10.1188C9.50368 11.3528 8.98848 12.476 8.13732 13.2641C9.39469 12.7727 10.2882 11.5482 10.2882 10.1188C10.2882 8.67187 9.37758 7.43386 8.10129 6.95064Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M28.7993 9.34379C28.4858 9.34379 28.1742 9.30686 27.8454 9.2303C27.6365 9.18211 27.4879 8.99522 27.4888 8.77995C27.4897 8.56514 27.6383 8.37914 27.8482 8.33141C29.391 7.98149 30.4683 6.62639 30.4683 5.03666C30.4683 3.45548 29.3901 2.09994 27.8454 1.74101C27.6365 1.69282 27.4888 1.50638 27.4888 1.29201C27.4888 1.07765 27.6365 0.891201 27.8454 0.843014C28.1463 0.772759 28.4588 0.738983 28.7993 0.738983C31.1744 0.738983 33.1064 2.66692 33.1064 5.03666C33.1064 7.41179 31.1744 9.34379 28.7993 9.34379ZM30.0305 1.89233C30.8781 2.68359 31.3906 3.80631 31.3906 5.03666C31.3906 6.27467 30.8763 7.40099 30.0278 8.1909C31.2888 7.69822 32.1841 6.47012 32.1841 5.03666C32.1841 3.6086 31.2897 2.38456 30.0305 1.89233Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M41.7017 22.5332C41.3865 22.5332 41.0748 22.4959 40.7479 22.4193C40.5389 22.3702 40.3912 22.1833 40.3921 21.9685C40.393 21.7537 40.5416 21.5681 40.7515 21.5204C42.2944 21.1705 43.3716 19.8194 43.3716 18.2351C43.3716 16.6706 42.2691 15.2849 40.7515 14.9404C40.5416 14.8926 40.393 14.7066 40.3921 14.4918C40.3912 14.277 40.5398 14.0901 40.7488 14.0415C43.5463 13.3853 45.9998 15.5456 45.9998 18.2351C45.9998 20.6053 44.0714 22.5332 41.7017 22.5332ZM42.9339 15.0836C43.7814 15.8735 44.2939 16.9985 44.2939 18.2351C44.2939 19.4677 43.7814 20.5895 42.9348 21.3777C44.1885 20.8841 45.0775 19.6618 45.0775 18.2351C45.0775 16.8044 44.1876 15.5781 42.9339 15.0836Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M31.1233 42.0306C30.8054 42.0306 30.482 41.9923 30.1605 41.9171C29.9515 41.868 29.8038 41.6811 29.8047 41.4663C29.8056 41.2519 29.9542 41.0659 30.1641 41.0182C31.7115 40.6669 32.7923 39.3159 32.7923 37.7329C32.7923 36.1693 31.6871 34.7836 30.1641 34.4382C29.9542 34.3904 29.8056 34.2044 29.8047 33.9896C29.8038 33.7748 29.9524 33.5879 30.1614 33.5393C32.9049 32.8971 35.4214 35.0416 35.4214 37.7329C35.4214 40.1026 33.493 42.0306 31.1233 42.0306ZM32.3122 34.5647C33.1787 35.3627 33.7146 36.5048 33.7146 37.7329C33.7146 38.9669 33.1994 40.09 32.3483 40.8781C33.6056 40.3868 34.4991 39.1623 34.4991 37.7329C34.4991 36.2859 33.5885 35.0479 32.3122 34.5647Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M9.22732 38.194C8.88775 38.194 8.54909 38.1499 8.24736 38.0666C8.0465 38.0112 7.9078 37.8279 7.9087 37.6198C7.9096 37.4113 8.05011 37.2294 8.25186 37.1762C9.51013 36.8434 10.3892 35.6991 10.3892 34.394C10.3892 33.0938 9.51013 31.954 8.25186 31.6212C8.05101 31.568 7.9096 31.3861 7.9087 31.178C7.9078 30.9695 8.0465 30.7862 8.24736 30.7308C8.54909 30.6475 8.88775 30.6034 9.22732 30.6034C11.3223 30.6034 13.0274 32.3039 13.0274 34.394C13.0274 36.4894 11.3223 38.194 9.22732 38.194ZM10.1685 31.6833C10.881 32.3796 11.3115 33.3474 11.3115 34.394C11.3115 35.4446 10.8801 36.4165 10.1658 37.1145C11.2935 36.7245 12.105 35.6522 12.105 34.394C12.105 33.1406 11.2944 32.0724 10.1685 31.6833Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M5.19664 14.4166C2.82691 14.4166 0.899414 12.4887 0.899414 10.1189C0.899414 7.4254 3.42587 5.2849 6.16038 5.92529C8.09598 6.36483 9.50377 8.12885 9.50377 10.1189C9.50377 12.1356 8.12751 13.8564 6.15678 14.304C5.83523 14.3783 5.51188 14.4166 5.19664 14.4166ZM5.19664 6.73412C3.3358 6.73412 1.82173 8.25269 1.82173 10.1189C1.82173 12.2288 3.75732 13.914 5.95052 13.4051C7.50062 13.053 8.58146 11.7019 8.58146 10.1189C8.58146 8.55533 7.4763 7.1696 5.95322 6.82419C5.69292 6.76339 5.44703 6.73412 5.19664 6.73412Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M27.0928 9.34379C24.7176 9.34379 22.7856 7.41179 22.7856 5.03666C22.7856 2.66692 24.7176 0.738983 27.0928 0.738983C27.3918 0.738983 27.7016 0.771859 28.0412 0.839861C30.0191 1.29967 31.3909 3.02405 31.3909 5.03666C31.3909 7.06007 30.0182 8.78491 28.052 9.2312C27.7323 9.30551 27.408 9.34379 27.0928 9.34379ZM27.0928 1.6613C25.2265 1.6613 23.708 3.17537 23.708 5.03666C23.708 7.15149 25.6472 8.83985 27.8458 8.33231C29.3914 7.98149 30.4686 6.62639 30.4686 5.03666C30.4686 3.45548 29.3905 2.09994 27.8458 1.74101C27.581 1.68832 27.3306 1.6613 27.0928 1.6613Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M39.9961 22.5331C37.621 22.5331 35.689 20.6052 35.689 18.235C35.689 15.5446 38.2064 13.401 40.958 14.0414C42.9215 14.4867 44.2942 16.2116 44.2942 18.235C44.2942 20.253 42.9215 21.9738 40.9553 22.4201C40.6365 22.4948 40.3122 22.5331 39.9961 22.5331ZM39.9961 14.8502C38.1299 14.8502 36.6113 16.3688 36.6113 18.235C36.6113 20.3413 38.5721 22.0287 40.7482 21.5212C42.2947 21.1704 43.3719 19.8193 43.3719 18.235C43.3719 16.6705 42.2695 15.2848 40.7518 14.9402C40.4906 14.8794 40.2447 14.8502 39.9961 14.8502Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M29.4076 42.0306C27.0378 42.0306 25.1104 40.1026 25.1104 37.7329C25.1104 35.0416 27.608 32.8971 30.3704 33.5393C32.3069 33.9788 33.7147 35.7428 33.7147 37.7329C33.7147 39.7496 32.3384 41.4704 30.3677 41.918C30.0489 41.9923 29.7246 42.0306 29.4076 42.0306ZM29.4076 34.3481C27.5467 34.3481 26.0327 35.8667 26.0327 37.7329C26.0327 39.8446 27.9944 41.5239 30.1606 41.0191C31.7116 40.6669 32.7924 39.3159 32.7924 37.7329C32.7924 36.1693 31.6872 34.7836 30.1642 34.4382C29.903 34.3774 29.6562 34.3481 29.4076 34.3481Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M7.52123 38.194C5.42621 38.194 3.72119 36.4894 3.72119 34.394C3.72119 32.3039 5.42621 30.6034 7.52123 30.6034C7.85899 30.6034 8.18595 30.6462 8.49218 30.7308C10.1504 31.169 11.3114 32.6759 11.3114 34.394C11.3114 36.117 10.1504 37.6279 8.48768 38.0679C8.18595 38.1512 7.85899 38.194 7.52123 38.194ZM7.52123 31.5257C5.9342 31.5257 4.6435 32.8123 4.6435 34.394C4.6435 35.9805 5.9342 37.2717 7.52123 37.2717C7.77613 37.2717 8.02112 37.2402 8.24719 37.1776C9.50997 36.8434 10.389 35.6991 10.389 34.394C10.389 33.0938 9.50997 31.954 8.2517 31.6212C8.02112 31.5572 7.77613 31.5257 7.52123 31.5257Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M22.3331 32.5494C19.1393 32.5494 16.1337 30.9902 14.2926 28.3787C13.1028 26.7052 12.4741 24.7408 12.4741 22.6989C12.4741 17.2623 16.8965 12.8394 22.3331 12.8394C22.7213 12.8394 23.1375 12.8655 23.568 12.9164C28.4813 13.5329 32.1841 17.7383 32.1841 22.6989C32.1841 24.7412 31.5545 26.7061 30.3638 28.38C28.6921 30.7493 26.0782 32.2553 23.1951 32.5106C22.9195 32.5394 22.6259 32.5494 22.3331 32.5494ZM22.3331 13.7617C17.4054 13.7617 13.3964 17.7707 13.3964 22.6989C13.3964 24.5485 13.9666 26.3282 15.0447 27.8459C16.7146 30.2138 19.4383 31.627 22.3331 31.627C22.5934 31.627 22.8547 31.6189 23.1068 31.5928C25.727 31.3604 28.0949 29.9954 29.6117 27.8473C30.6916 26.3282 31.2618 24.5489 31.2618 22.6989C31.2618 18.2022 27.9067 14.3904 23.4563 13.832C23.0645 13.7856 22.6853 13.7617 22.3331 13.7617Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M22.3289 32.5484C19.1404 32.5484 16.1348 30.9916 14.2893 28.384C14.1848 28.2363 14.1767 28.0418 14.2667 27.8855C15.2629 26.1733 16.813 24.8002 18.6315 24.0197C18.8378 23.9328 19.0765 24.0031 19.199 24.19C19.8979 25.2532 21.0688 25.8882 22.3289 25.8882C23.598 25.8882 24.768 25.2541 25.4588 24.1922C25.5813 24.0044 25.8209 23.9328 26.0271 24.0197C27.8447 24.8002 29.3948 26.1733 30.3919 27.8855C30.482 28.0418 30.4739 28.2363 30.3694 28.384C28.5239 30.9916 25.5173 32.5484 22.3289 32.5484ZM15.2197 28.0931C16.904 30.3111 19.5394 31.6261 22.3289 31.6261C25.1192 31.6261 27.7547 30.3111 29.439 28.0931C28.6058 26.7745 27.4016 25.6995 26.0001 25.0208C25.1219 26.1485 23.7772 26.8105 22.3289 26.8105C20.8896 26.8105 19.5457 26.1481 18.6603 25.0199C17.2571 25.6986 16.0528 26.7741 15.2197 28.0931Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M22.3315 26.8091C20.7553 26.8091 19.2979 26.0197 18.4324 24.6975C17.9442 23.9422 17.6875 23.0677 17.6875 22.1652V20.3349C17.6875 17.7738 19.7708 15.6905 22.3315 15.6905C23.5736 15.6905 24.7409 16.1728 25.6172 17.0492C26.4936 17.9382 26.9755 19.1046 26.9755 20.3349V22.1652C26.9755 23.0659 26.7188 23.9404 26.2324 24.6948C25.365 26.0197 23.9077 26.8091 22.3315 26.8091ZM22.3315 16.6128C20.2797 16.6128 18.6098 18.2827 18.6098 20.3349V22.1652C18.6098 22.8898 18.8161 23.5914 19.2052 24.1944C19.8987 25.2532 21.0678 25.8868 22.3315 25.8868C23.5952 25.8868 24.7643 25.2532 25.4596 24.1922C25.8469 23.5905 26.0532 22.8884 26.0532 22.1652V20.3349C26.0532 19.3482 25.6659 18.4124 24.9624 17.6991C24.2626 16.9992 23.3277 16.6128 22.3315 16.6128Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M26.4957 20.6051H18.1679C18.0418 20.6051 17.9211 20.5538 17.8346 20.4624C17.7472 20.3714 17.7013 20.2489 17.7076 20.1228C17.8211 17.6374 19.8522 15.6905 22.3318 15.6905C23.5738 15.6905 24.7411 16.1728 25.6175 17.0492C26.4272 17.8706 26.9019 18.9609 26.956 20.1224C26.9623 20.2485 26.9163 20.371 26.829 20.4624C26.7425 20.5534 26.6218 20.6051 26.4957 20.6051ZM18.6813 19.6828H25.9814C25.8499 18.9326 25.4977 18.2413 24.9627 17.6991C24.2629 16.9992 23.328 16.6128 22.3318 16.6128C20.5097 16.6128 18.9902 17.9269 18.6813 19.6828Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>
                              User Management <br /> & Control Access{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="33"
                                  height="37"
                                  viewBox="0 0 33 37"
                                  fill="none"
                                >
                                  <path
                                    d="M32.8555 8.93848L30.1232 6.14837V0.504075C30.1232 0.437898 30.1105 0.372359 30.0857 0.311204C30.061 0.250049 30.0246 0.194477 29.9788 0.147664C29.933 0.100851 29.8786 0.0637152 29.8188 0.0383782C29.7589 0.0130411 29.6947 -2.06448e-08 29.6299 0H5.39973C5.33492 -2.06448e-08 5.27075 0.0130411 5.21089 0.0383782C5.15102 0.0637152 5.09663 0.100851 5.05082 0.147664C5.00501 0.194477 4.96869 0.250049 4.94392 0.311204C4.91916 0.372359 4.90644 0.437898 4.90649 0.504075V13.1087H4.53948C4.45549 13.1088 4.37289 13.1307 4.29953 13.1725C4.22616 13.2143 4.16446 13.2745 4.12027 13.3475C3.31274 14.6983 2.03069 15.6835 0.535922 16.1018C0.437144 16.1278 0.348706 16.1845 0.282774 16.264C0.216843 16.3436 0.176658 16.442 0.167747 16.5458C-0.0726387 19.349 -0.173935 22.2772 0.707737 24.7017C1.45977 26.7544 2.96606 28.4267 4.90649 29.3633V33.7396C4.90649 33.8732 4.95846 34.0013 5.05096 34.0958C5.14346 34.1902 5.26891 34.2433 5.39973 34.2433H7.78293V36.4955C7.78288 36.5618 7.79561 36.6273 7.82039 36.6886C7.84518 36.7498 7.88153 36.8054 7.92737 36.8522C7.97322 36.8991 8.02765 36.9362 8.08757 36.9616C8.14748 36.9869 8.2117 37 8.27656 37H32.5064C32.6373 37 32.7628 36.9469 32.8554 36.8524C32.948 36.7578 33 36.6296 33 36.4959V9.29456C33 9.16099 32.948 9.03291 32.8555 8.93848ZM27.0893 4.4766L31.315 8.79247H27.0905L27.0893 4.4766ZM5.89336 1.00775H29.1363V5.14061L26.946 2.9043C26.9 2.85725 26.8453 2.81998 26.7851 2.79465C26.7249 2.76931 26.6604 2.75641 26.5953 2.7567H8.27656C8.21175 2.75665 8.14757 2.76964 8.08769 2.79492C8.0278 2.82021 7.97338 2.85731 7.92754 2.90408C7.88169 2.95086 7.84533 3.0064 7.82051 3.06754C7.7957 3.12867 7.78293 3.1942 7.78293 3.26038V13.1087H5.89336V1.00775ZM1.63382 24.3484C0.854617 22.2072 0.914226 19.5551 1.12266 16.9762C2.62901 16.4695 3.92593 15.4625 4.80675 14.1157H9.09784C9.97885 15.4623 11.2757 16.4693 12.7819 16.9762C12.9908 19.5551 13.05 22.2072 12.2712 24.3484C11.437 26.6408 9.74458 28.1705 6.9523 29.1524C4.16001 28.1713 2.46796 26.6416 1.63382 24.3484ZM5.89336 33.2359V29.8232C6.18322 29.9436 6.48438 30.057 6.79685 30.1634C6.89798 30.1979 7.00739 30.1979 7.10853 30.1634C7.33995 30.0838 7.56436 30.0018 7.78332 29.9155V33.2359H5.89336ZM8.7698 35.9922V29.4806C10.497 28.6919 11.9156 27.3348 12.7991 25.6263H28.449C28.5775 25.6226 28.6995 25.5679 28.7891 25.4738C28.8787 25.3797 28.9288 25.2536 28.9288 25.1224C28.9288 24.9912 28.8787 24.8651 28.7891 24.771C28.6995 24.6769 28.5775 24.6222 28.449 24.6185H13.2249C13.5136 23.7758 13.7051 22.9015 13.7953 22.0134H28.449C28.5775 22.0097 28.6995 21.955 28.7891 21.8609C28.8787 21.7668 28.9288 21.6408 28.9288 21.5095C28.9288 21.3783 28.8787 21.2522 28.7891 21.1581C28.6995 21.064 28.5775 21.0093 28.449 21.0057H13.8779C13.9182 20.1375 13.9147 19.2679 13.8674 18.4001H28.449C28.5775 18.3965 28.6995 18.3417 28.7891 18.2477C28.8787 18.1536 28.9288 18.0275 28.9288 17.8963C28.9288 17.765 28.8787 17.639 28.7891 17.5449C28.6995 17.4508 28.5775 17.3961 28.449 17.3924H13.8039C13.7836 17.1091 13.7613 16.8266 13.7368 16.545C13.7279 16.4411 13.6877 16.3427 13.6217 16.2632C13.5557 16.1836 13.4671 16.127 13.3683 16.101C11.8742 15.6823 10.5929 14.6972 9.78588 13.3467C9.74169 13.2737 9.67999 13.2135 9.60663 13.1717C9.53326 13.1299 9.45067 13.108 9.36667 13.1079H8.7698V3.76405H26.1036V9.29416C26.1036 9.36034 26.1163 9.42588 26.1411 9.48703C26.1658 9.54819 26.2022 9.60376 26.248 9.65057C26.2938 9.69738 26.3482 9.73452 26.408 9.75986C26.4679 9.7852 26.5321 9.79824 26.5969 9.79824H32.0124V35.9922H8.7698ZM28.9423 14.2828C28.9423 14.4164 28.8903 14.5445 28.7978 14.6389C28.7053 14.7334 28.5799 14.7865 28.449 14.7865H12.3339C12.2054 14.7828 12.0834 14.7281 11.9938 14.634C11.9042 14.5399 11.8541 14.4138 11.8541 14.2826C11.8541 14.1514 11.9042 14.0253 11.9938 13.9312C12.0834 13.8371 12.2054 13.7824 12.3339 13.7787H28.449C28.5139 13.7787 28.578 13.7918 28.6379 13.8171C28.6978 13.8424 28.7521 13.8796 28.798 13.9264C28.8438 13.9732 28.8801 14.0288 28.9049 14.0899C28.9296 14.1511 28.9423 14.2166 28.9423 14.2828ZM28.9423 29.115C28.9423 29.2486 28.8903 29.3767 28.7978 29.4712C28.7053 29.5656 28.5799 29.6187 28.449 29.6187H22.7289C22.6004 29.615 22.4784 29.5603 22.3888 29.4662C22.2993 29.3721 22.2491 29.2461 22.2491 29.1148C22.2491 28.9836 22.2993 28.8575 22.3888 28.7634C22.4784 28.6693 22.6004 28.6146 22.7289 28.6109H28.449C28.5139 28.6109 28.5781 28.624 28.638 28.6494C28.6979 28.6747 28.7523 28.7119 28.7981 28.7588C28.8439 28.8056 28.8802 28.8612 28.905 28.9224C28.9297 28.9836 28.9424 29.0488 28.9423 29.115ZM10.2986 23.314V20.7522C10.2985 20.4335 10.1905 20.1247 9.99277 19.8781C9.79506 19.6316 9.51988 19.4625 9.21394 19.3995V18.9181C9.21394 18.3057 8.97568 17.7183 8.55158 17.2852C8.12748 16.8521 7.55227 16.6088 6.95249 16.6088C6.35272 16.6088 5.77751 16.8521 5.3534 17.2852C4.9293 17.7183 4.69104 18.3057 4.69104 18.9181V19.3995C4.38514 19.4625 4.11001 19.6317 3.91231 19.8782C3.71461 20.1248 3.60652 20.4336 3.60638 20.7522V23.314C3.6068 23.6794 3.74912 24.0297 4.00213 24.288C4.25513 24.5464 4.59816 24.6917 4.95597 24.6921H8.94901C9.30682 24.6917 9.64985 24.5464 9.90286 24.288C10.1559 24.0297 10.2982 23.6794 10.2986 23.314ZM6.05192 18.0023C6.23014 17.8208 6.45701 17.6972 6.70392 17.6472C6.95082 17.5972 7.20671 17.6229 7.43929 17.7212C7.67187 17.8195 7.87074 17.986 8.0108 18.1995C8.15086 18.4131 8.22585 18.6643 8.2263 18.9213V19.3753H5.67791V18.9197C5.67779 18.7488 5.71085 18.5796 5.77519 18.4219C5.83952 18.2641 5.93384 18.121 6.0527 18.0007L6.05192 18.0023ZM4.59325 23.314V20.7522C4.59346 20.6541 4.63174 20.56 4.69972 20.4905C4.76769 20.4211 4.85983 20.382 4.95597 20.3818H8.94901C9.04518 20.3819 9.13738 20.421 9.20538 20.4904C9.27338 20.5599 9.31163 20.654 9.31174 20.7522V23.314C9.31163 23.4122 9.27338 23.5063 9.20538 23.5758C9.13738 23.6452 9.04518 23.6843 8.94901 23.6844H4.95597C4.85983 23.6842 4.76769 23.6451 4.69972 23.5757C4.63174 23.5062 4.59346 23.4121 4.59325 23.314ZM6.95269 20.9527C6.75568 20.9525 6.56389 21.0174 6.40608 21.1379C6.24826 21.2583 6.13291 21.4277 6.07731 21.6207C6.02171 21.8137 6.02886 22.0199 6.09768 22.2084C6.16651 22.3969 6.2933 22.5576 6.45906 22.6663V23.0029C6.45721 23.0702 6.4686 23.1373 6.49256 23.2001C6.51652 23.2629 6.55257 23.3201 6.59858 23.3684C6.64458 23.4167 6.6996 23.4551 6.76039 23.4814C6.82118 23.5076 6.8865 23.5211 6.95249 23.5211C7.01848 23.5211 7.08381 23.5076 7.14459 23.4814C7.20538 23.4551 7.26041 23.4167 7.30641 23.3684C7.35241 23.3201 7.38846 23.2629 7.41242 23.2001C7.43639 23.1373 7.44778 23.0702 7.44592 23.0029V22.6663C7.61166 22.5576 7.73844 22.397 7.80727 22.2085C7.8761 22.02 7.88328 21.8139 7.82773 21.6209C7.77218 21.4279 7.65689 21.2585 7.49914 21.138C7.34139 21.0176 7.14966 20.9526 6.95269 20.9527ZM6.95269 21.8077C6.96755 21.8079 6.98202 21.8126 6.99426 21.8212C7.00651 21.8298 7.01596 21.8419 7.02143 21.856C7.0269 21.8701 7.02812 21.8856 7.02495 21.9004C7.02179 21.9152 7.01437 21.9287 7.00364 21.9392C6.99291 21.9497 6.97937 21.9567 6.96473 21.9594C6.95009 21.962 6.93503 21.9601 6.92145 21.9539C6.90788 21.9477 6.89641 21.9376 6.88851 21.9247C6.88061 21.9119 6.87664 21.8969 6.8771 21.8817C6.87715 21.8717 6.87916 21.8617 6.88299 21.8525C6.88683 21.8432 6.89242 21.8349 6.89945 21.8278C6.90648 21.8208 6.9148 21.8153 6.92394 21.8115C6.93308 21.8078 6.94285 21.806 6.95269 21.8061V21.8077Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>
                              Document & Info <br /> Security
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 sec5subcard">
                        <div className="row">
                          <div className="col-3">
                            <div className="sqr">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="39"
                                  height="39"
                                  viewBox="0 0 39 39"
                                  fill="none"
                                >
                                  <path
                                    d="M38.2121 37.0302H36.7939V12.9999C36.7939 12.5666 36.4394 12.212 36.0061 12.212H31.3576C30.9242 12.212 30.5697 12.5666 30.5697 12.9999V37.0302H27.3394V23.2423C27.3394 22.809 26.9848 22.4544 26.5515 22.4544H21.903C21.4697 22.4544 21.1152 22.809 21.1152 23.2423V37.0302H17.8848V17.7272C17.8848 17.2938 17.5303 16.9393 17.097 16.9393H12.4485C12.0152 16.9393 11.6606 17.2938 11.6606 17.7272V37.0302H8.4303V26.3938C8.4303 25.9605 8.07576 25.606 7.64242 25.606H2.99394C2.56061 25.606 2.20606 25.9605 2.20606 26.3938V37.0302H0.787879C0.354545 37.0302 0 37.3847 0 37.8181C0 38.2514 0.354545 38.606 0.787879 38.606H38.2121C38.6455 38.606 39 38.2514 39 37.8181C39 37.3847 38.6455 37.0302 38.2121 37.0302ZM32.1455 13.7878H35.2182V37.0302H32.1455V13.7878ZM22.6909 24.0302H25.7636V37.0302H22.6909V24.0302ZM13.2364 18.5151H16.3091V37.0302H13.2364V18.5151ZM3.78182 27.1817H6.85455V37.0302H3.78182V27.1817Z"
                                    fill="#01E4F6"
                                  />
                                  <path
                                    d="M33.6817 -9.91821e-05C31.9483 -9.91821e-05 30.5301 1.41808 30.5301 3.15142C30.5301 3.78172 30.7271 4.41202 31.0817 4.88475L25.4483 10.4787C25.0544 10.3211 24.6604 10.2423 24.2271 10.2423C23.4786 10.2423 22.7695 10.5181 22.2574 10.9514L17.9241 8.23323C17.9241 8.11505 17.9635 7.99687 17.9635 7.87869C17.9635 6.14536 16.5453 4.72717 14.812 4.72717C13.0786 4.72717 11.6604 6.14536 11.6604 7.87869C11.6604 8.31202 11.7392 8.74536 11.9362 9.1393L6.53923 13.6302C6.18469 13.4726 5.75135 13.3938 5.31802 13.3938C3.58469 13.3938 2.1665 14.812 2.1665 16.5454C2.1665 18.2787 3.58469 19.6969 5.31802 19.6969C7.05135 19.6969 8.46953 18.2787 8.46953 16.5454C8.46953 15.8363 8.23317 15.1666 7.79984 14.6151L12.8423 10.3605C13.3544 10.7544 14.0241 11.0302 14.7726 11.0302C15.8362 11.0302 16.7423 10.5181 17.3332 9.7302L21.312 12.212C21.1544 12.5666 21.0756 12.9605 21.0756 13.3938C21.0756 15.1272 22.4938 16.5454 24.2271 16.5454C25.9604 16.5454 27.3786 15.1272 27.3786 13.3938C27.3786 12.6847 27.1423 12.0151 26.7089 11.4635L32.2241 5.94839C32.6574 6.18475 33.1301 6.30293 33.6817 6.30293C35.415 6.30293 36.8332 4.88475 36.8332 3.15142C36.8332 1.41808 35.415 -9.91821e-05 33.6817 -9.91821e-05ZM5.31802 18.1211C4.45135 18.1211 3.74226 17.412 3.74226 16.5454C3.74226 15.6787 4.45135 14.9696 5.31802 14.9696C6.18469 14.9696 6.89378 15.6787 6.89378 16.5454C6.89378 17.412 6.18469 18.1211 5.31802 18.1211ZM14.7726 9.45445C13.9059 9.45445 13.1968 8.74536 13.1968 7.87869C13.1968 7.01202 13.9059 6.30293 14.7726 6.30293C15.6392 6.30293 16.3483 7.01202 16.3483 7.87869C16.3483 8.74536 15.6392 9.45445 14.7726 9.45445ZM24.2271 14.9696C23.3604 14.9696 22.6514 14.2605 22.6514 13.3938C22.6514 12.5272 23.3604 11.8181 24.2271 11.8181C25.0938 11.8181 25.8029 12.5272 25.8029 13.3938C25.8029 14.2605 25.0938 14.9696 24.2271 14.9696ZM33.6817 4.72717C32.815 4.72717 32.1059 4.01808 32.1059 3.15142C32.1059 2.28475 32.815 1.57566 33.6817 1.57566C34.5483 1.57566 35.2574 2.28475 35.2574 3.15142C35.2574 4.01808 34.5483 4.72717 33.6817 4.72717Z"
                                    fill="#01E4F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="col-8">
                            <h6>Paperwork Analytics</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="heading2sec5">
                  Do you want to remove the paper from paperwork?
                </h2>
                <div>


                <NavLink to="/bookacall">
                
                  <button className="sec5btn ">Book a Call</button>
                    </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Home2 />

        <BlogPart />
      </div>
    );
  }
}
export default HomeMain;
