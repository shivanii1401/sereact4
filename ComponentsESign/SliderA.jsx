import React from "react";
import "./Slider.css";



import EllipseImage from "./images/Ellipse.svg";

function Aii() {
  return (
    <div>
      {/* section-3 */}
      <section className="section3">
        <div className="container">
          <div className="row    ">
            {/* <!-- Carousel wrapper --> */}
            <div
              id="carouselExampleControls"
              className="carousel slide slide11 carousel-dark"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col testimonial">
                      <div className="testi-content">
                        <div className="ellipse">
                          <img
                            className="img-circle img-fluid"
                            src={ EllipseImage }
                            style={{ width: "194px", height: "194px" }}
                            alt="Ellipse"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      <p className="testimonialpara">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h5 className="client">Suman Sahu</h5>
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="head">Head of Projects</h4>
                        </div>

                        <div className="col-md-3">
                          <div className="vr"></div>
                          <div className="axis col">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="124"
                              height="28"
                              viewBox="0 0 124 28"
                              fill="none"
                            >
                              <path
                                d="M30.5145 27.3494H21.2639L15.6484 17.2043H24.8959L30.5145 27.3494Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M15.6147 0.650635L20.2528 8.91303L10.0075 27.3493H0.775391L15.6147 0.650635Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M34.7253 7.53491L29.5166 17.2042H31.2302L32.4 15.0048H36.8971L38.0082 17.2042H39.7445L34.7253 7.53491ZM33.0591 13.712L34.6944 10.6186L36.2535 13.712H33.0591Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M43.2626 12.4566L40.3627 8.12061H42.171L44.1832 11.1894L46.2871 8.12061H48.1088L45.0822 12.4566L48.2633 17.2043H46.4848L44.1585 13.7238L41.754 17.2043H39.958L43.2626 12.4566Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M51.2713 8.12061H49.6875V17.2043H51.2713V8.12061Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M59.1943 9.45698L57.9009 10.1215C57.6599 9.76098 57.4333 9.52524 57.2119 9.41431C56.9854 9.28738 56.695 9.22658 56.3335 9.22658C55.8959 9.22658 55.5334 9.33538 55.2358 9.55511C54.9464 9.76418 54.8012 10.0287 54.8022 10.3498C54.8022 10.7988 55.1853 11.154 55.9453 11.4228L56.9957 11.7983C57.8494 12.0884 58.4724 12.4596 58.872 12.8852C59.2725 13.3183 59.4631 13.8431 59.4631 14.4735C59.4631 15.3066 59.1428 16.002 58.494 16.5386C57.8483 17.0932 57.0358 17.3674 56.074 17.3674C55.1606 17.3674 54.4058 17.1348 53.8147 16.6623C53.2236 16.1887 52.8631 15.5338 52.7148 14.6911L54.3223 14.3839C54.3986 14.9215 54.5201 15.282 54.7075 15.489C55.0308 15.8783 55.5148 16.0778 56.1379 16.0778C56.6363 16.0778 57.0441 15.9391 57.3695 15.6458C57.699 15.362 57.8597 14.9972 57.8597 14.5588C57.8597 14.3828 57.835 14.2196 57.767 14.0778C57.7217 13.9242 57.6311 13.793 57.5126 13.6692C57.3973 13.5519 57.2336 13.426 57.0441 13.3215C56.8546 13.2106 56.628 13.1167 56.3644 13.009L55.3501 12.6452C53.9032 12.1215 53.1906 11.3535 53.1906 10.3391C53.1906 9.65538 53.4944 9.09218 54.0948 8.63351C54.6951 8.16738 55.4469 7.93058 56.3469 7.93164C57.5559 7.93058 58.5115 8.44044 59.1943 9.45698Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M90.7884 7.53491L85.5869 17.2042H87.3015L88.4724 15.0048H92.9757L94.0703 17.2042H95.8158L90.7884 7.53491ZM89.1242 13.712L90.7668 10.6186L92.331 13.712H89.1242Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M75.1807 17.2042V7.48901L82.8485 14.4351V8.12048H84.4364V17.7589L76.7676 10.8362V17.2042H75.1807Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M96.7002 17.2042V7.48901L104.367 14.4351V8.12048H105.956V17.7589L98.2861 10.8362V17.2042H96.7002Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M72.9669 8.12158H71.3779V17.2042H72.9669V8.12158Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M123.224 9.47942V8.03516H119.292H117.703V9.47942V11.3397V12.7872V15.5946V17.1562H119.292H123.224V15.5946H119.292V12.7872H123.224V11.3397H119.292V9.47942H123.224Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M66.1031 9.47951V11.3398H70.0369V12.7872H66.1031V17.2043H64.5142V8.03418H70.0369V9.47951H66.1031Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M110.315 9.93394C111.002 9.2662 111.915 8.92701 113.027 8.92701C113.872 8.92701 114.655 9.1062 115.353 9.4582L115.598 9.58194V8.03527L115.489 7.99154C114.841 7.7334 114.017 7.60327 113.041 7.60327C111.508 7.60327 110.222 8.07367 109.22 9.00274C108.211 9.93607 107.701 11.1755 107.701 12.687C107.701 14.095 108.156 15.2491 109.054 16.1195C109.949 16.9867 111.153 17.4262 112.631 17.4262C113.766 17.4262 114.732 17.2406 115.499 16.8737L115.598 16.8267V15.3793L115.348 15.5169C114.632 15.9105 113.77 16.1099 112.786 16.1099C111.738 16.1099 110.884 15.7921 110.244 15.1649C109.607 14.5409 109.284 13.6865 109.284 12.6251C109.286 11.503 109.633 10.5985 110.315 9.93394Z"
                                fill="#AE2761"
                              />
                            </svg>
                          </div>
                        </div>
                        <a className="case" href="#">
                          {" "}
                          Read Full Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  {/* <!-- <div className="carousel-item active">/ */}
                  <div className="row">
                    <div className="col testimonial">
                      <div className="testi-content">
                        <div className="ellipse  MainImage">
                          <img
                            className="img-circle img-fluid   images11"
                            // src="./images/Ellipse.svg"
                            // style={{ width: "194px", height: "194px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      <p className="testimonialpara">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h5 className="client">Suman Sahu</h5>
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="head">Head of Projects</h4>
                        </div>
                        <div className="col-md-3">
                          <div className="vr"></div>
                          <div className="axis col">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="124"
                              height="28"
                              viewBox="0 0 124 28"
                              fill="none"
                            >
                              <path
                                d="M30.5145 27.3494H21.2639L15.6484 17.2043H24.8959L30.5145 27.3494Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M15.6147 0.650635L20.2528 8.91303L10.0075 27.3493H0.775391L15.6147 0.650635Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M34.7253 7.53491L29.5166 17.2042H31.2302L32.4 15.0048H36.8971L38.0082 17.2042H39.7445L34.7253 7.53491ZM33.0591 13.712L34.6944 10.6186L36.2535 13.712H33.0591Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M43.2626 12.4566L40.3627 8.12061H42.171L44.1832 11.1894L46.2871 8.12061H48.1088L45.0822 12.4566L48.2633 17.2043H46.4848L44.1585 13.7238L41.754 17.2043H39.958L43.2626 12.4566Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M51.2713 8.12061H49.6875V17.2043H51.2713V8.12061Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M59.1943 9.45698L57.9009 10.1215C57.6599 9.76098 57.4333 9.52524 57.2119 9.41431C56.9854 9.28738 56.695 9.22658 56.3335 9.22658C55.8959 9.22658 55.5334 9.33538 55.2358 9.55511C54.9464 9.76418 54.8012 10.0287 54.8022 10.3498C54.8022 10.7988 55.1853 11.154 55.9453 11.4228L56.9957 11.7983C57.8494 12.0884 58.4724 12.4596 58.872 12.8852C59.2725 13.3183 59.4631 13.8431 59.4631 14.4735C59.4631 15.3066 59.1428 16.002 58.494 16.5386C57.8483 17.0932 57.0358 17.3674 56.074 17.3674C55.1606 17.3674 54.4058 17.1348 53.8147 16.6623C53.2236 16.1887 52.8631 15.5338 52.7148 14.6911L54.3223 14.3839C54.3986 14.9215 54.5201 15.282 54.7075 15.489C55.0308 15.8783 55.5148 16.0778 56.1379 16.0778C56.6363 16.0778 57.0441 15.9391 57.3695 15.6458C57.699 15.362 57.8597 14.9972 57.8597 14.5588C57.8597 14.3828 57.835 14.2196 57.767 14.0778C57.7217 13.9242 57.6311 13.793 57.5126 13.6692C57.3973 13.5519 57.2336 13.426 57.0441 13.3215C56.8546 13.2106 56.628 13.1167 56.3644 13.009L55.3501 12.6452C53.9032 12.1215 53.1906 11.3535 53.1906 10.3391C53.1906 9.65538 53.4944 9.09218 54.0948 8.63351C54.6951 8.16738 55.4469 7.93058 56.3469 7.93164C57.5559 7.93058 58.5115 8.44044 59.1943 9.45698Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M90.7884 7.53491L85.5869 17.2042H87.3015L88.4724 15.0048H92.9757L94.0703 17.2042H95.8158L90.7884 7.53491ZM89.1242 13.712L90.7668 10.6186L92.331 13.712H89.1242Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M75.1807 17.2042V7.48901L82.8485 14.4351V8.12048H84.4364V17.7589L76.7676 10.8362V17.2042H75.1807Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M96.7002 17.2042V7.48901L104.367 14.4351V8.12048H105.956V17.7589L98.2861 10.8362V17.2042H96.7002Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M72.9669 8.12158H71.3779V17.2042H72.9669V8.12158Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M123.224 9.47942V8.03516H119.292H117.703V9.47942V11.3397V12.7872V15.5946V17.1562H119.292H123.224V15.5946H119.292V12.7872H123.224V11.3397H119.292V9.47942H123.224Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M66.1031 9.47951V11.3398H70.0369V12.7872H66.1031V17.2043H64.5142V8.03418H70.0369V9.47951H66.1031Z"
                                fill="#AE2761"
                              />
                              <path
                                d="M110.315 9.93394C111.002 9.2662 111.915 8.92701 113.027 8.92701C113.872 8.92701 114.655 9.1062 115.353 9.4582L115.598 9.58194V8.03527L115.489 7.99154C114.841 7.7334 114.017 7.60327 113.041 7.60327C111.508 7.60327 110.222 8.07367 109.22 9.00274C108.211 9.93607 107.701 11.1755 107.701 12.687C107.701 14.095 108.156 15.2491 109.054 16.1195C109.949 16.9867 111.153 17.4262 112.631 17.4262C113.766 17.4262 114.732 17.2406 115.499 16.8737L115.598 16.8267V15.3793L115.348 15.5169C114.632 15.9105 113.77 16.1099 112.786 16.1099C111.738 16.1099 110.884 15.7921 110.244 15.1649C109.607 14.5409 109.284 13.6865 109.284 12.6251C109.286 11.503 109.633 10.5985 110.315 9.93394Z"
                                fill="#AE2761"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <a className="case" href="#">
                        {" "}
                        Read Full Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  ButtonPartOfSlider">
              <div className="arrows col-md-4">
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="prev"
                >
                  <span className="arrowbtn1">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="107"
                        height="48"
                        viewBox="0 0 107 48"
                        fill="none"
                      >
                        <circle cx="24" cy="24" r="24" fill="#D9D9D9" />
                        <path
                          d="M31 24H17"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24 31L17 24L24 17"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="next"
                >
                  <span className="arrowbtn2">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="107"
                        height="48"
                        viewBox="0 0 107 48"
                        fill="none"
                      >
                        <circle cx="83" cy="24" r="24" fill="#2828C2" />
                        <path
                          d="M76 24H90"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M83 31L90 24L83 17"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aii;
