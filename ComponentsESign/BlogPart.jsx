import React from "react";
import "./BlogPart.css";
import WhatsAppImage from "./images/whatsapp.svg";
import NoteryImage from "./images/notery.svg";
import tabImage from "./images/tab.svg";
function BlogPart() {
  return (
    <div>
      <section class="section9">
        <div class="container">
          <div class="row">
            <h2 class="heading10 MainHeadingofBlog">
              Explore the world of digital paperwork -
              <span class="text-primary">
                {" "}
                with cutting
                <br /> edge resources
              </span>
            </h2>
          </div>
          <div class="row pt-4  MainDivBoxesOfBlogs">
            <div class="col-sm-3  LastDivBoxOfBlogParent">
              <div
                className="card card-block    CardSizeForBlogsDiv"
                style={{
                  paddingTop: "10px",
                  width: "362px",
                  borderRadius: "20px",
                  background: "#F8F8F8",
                  borderColor: "#F8F8F8",
                  boxShadow: "none",
                }}
              >
                <img
                  className="card-img-top img-fluid"
                  src={WhatsAppImage}
                  alt="100%x18"
                  data-holder-rendered="true"
                  style={{
                    height: "235px",
                    width: "354px",
                    display: "block",
                    borderRadius: "20px",
                    padding: "2px",
                  }}
                />
                <div class="card-block m-lg-1 ">
                  <p class="text-secondary m-lg-2 BlogPartTextAlign">May 25, 2023</p>
                  <p class="card-title m-lg-2 BlogPartTextAlign">
                    <b style={{color:"black"}}>
                      The Evolution of Off-Platform Communication: From SMS and
                      Email to WhatsApp
                    </b>
                  </p>
                  <p class="card-text m-lg-2 BlogPartTextAlign"   style={{color:" #626262"}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button class="readmore">
                    Read more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-3 m-2   LastDivBoxOfBlogParent  ">
              <div
                className="card card-block LastDivBoxOfBlog  CardSizeForBlogsDiv"
                style={{
                  marginLeft: "90px",
                  width: "362px",
                  background: "#F8F8F8",
                  borderColor: "#F8F8F8",
                  boxShadow: "none",
                }}
              >
                <img
                  className="card-img-top img-fluid"
                  src={tabImage}
                  alt="100%x18"
                  data-holder-rendered="true"
                  style={{
                    height: "236px",
                    width: "362px",
                    display: "block",
                    borderRadius: "20px",
                    padding: "5px",
                  }}
                />
                <div class="card-block m-lg-1">
                  <p class="text-secondary m-lg-2 BlogPartTextAlign">Jun 18, 2023</p>
                  <p class="card-title m-lg-2 BlogPartTextAlign">
                    <b style={{color:"black"}}>
                      Electronic Signatures vs. Wet-Ink Signatures: Key
                      Differences and Advantages
                    </b>
                  </p>
                  <p class="card-text m-lg-2 BlogPartTextAlign" style={{color:" #626262"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button class="readmore">
                    Read more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-3   LastDivBoxOfBlogParent">
              <div
                className="card card-block LastDivBoxOfBlog  CardSizeForBlogsDiv"
                style={{
                  paddingTop: "10px",
                  textAlign: "justify",
                  marginLeft: "180px",
                  width: "362px",
                  boxShadow: "none",
                  background: "#F8F8F8",
                  borderColor: "#F8F8F8",
                }}
              >
                <img
                  className="card-img-top img-fluid"
                  src={NoteryImage}
                  alt="100%x18"
                  data-holder-rendered="true"
                  style={{
                    height: "216px",
                    width: "362px",
                    display: "block",
                    borderRadius: "20px",
                    padding: "5px",
                  }}
                />

                <div class="card-block m-lg-1    ">
                  <p class="text-secondary m-lg-2 BlogPartTextAlign" >July 15, 2023</p>
                  <p class="card-title m-lg-2 BlogPartTextAlign">
                    <b style={{color:"black"}}>
                      Indian Supreme Court's Landmark Ruling on Unstamped
                      Arbitration Agreements: A Concise Analysis
                    </b>
                  </p>
                  <p class="card-text m-lg-2 BlogPartTextAlign" style={{color:" #626262"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button class="readmore">
                    Read more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.65918 10.1668L11.7971 6.00016L7.65918 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.86621 10.1668L6.00409 6.00016L1.86621 1.8335"
                        stroke="#2828C2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="ViewMoreBlogButton">

          <button type="button" class="btn4   LastViewMoreButtonBlog">
            View More Blogs
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPart;
