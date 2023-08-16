import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import LogoSiteImage from "./images/Logo.svg";
function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-v1 bg-img">
          <div className="footer no-margin">
            <div className="container">
              <div className="row MainFooterDiv">
                <div className="col-md-3  MainFooterDivChild1 ">
                  <div className="headline mt-4">
                    <img className="mt-5 img-fluid"  src={LogoSiteImage } />
                  </div>
                  <ul className="list-unstyled link-list TagLineList">
                    <li className="quicklinkpara  TagLineList">
                      <p className=" FooterLogoTagLine">
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit, sed do
                        <br /> eiusmod tempor incididunt ut labore
                        <br /> et dolore magna aliqua.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2  MainFooterDivChild2">
                  <div className="headline text-white mt-5  pt-4">
                    <h5>
                      Quick Links
                      <br />
                    </h5>
                  </div>
                  <div className="quicklinks">
                    <ul className="list-unstyled link-list m-lg-3">
                      <li className="mt-3">
                        <a href="#">Home</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Document Infrastructure</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Use Cases</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Success Stories</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Resources</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Pricing</a>
                      </li>

                      <li className="mt-1">

                        <a href="#">Culture</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2  MainFooterDivChild3">
                  <div className="headline text-white mt-5  pt-4">
                    <h5>
                      Company
                      <br />
                    </h5>
                  </div>
                  <div className="quicklinks">
                    <ul className="list-unstyled link-list m-lg-2">
                      <li className="mt-3">
                      <NavLink to="/aboutus">
                
              
                        About
                        {/* <a href="#">About</a> */}
                  </NavLink>

                      </li>
                      <li className="mt-1">
                        <a href="#">Blog</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">FAQs</a>
                      </li>
                      <li className="mt-1">
                      <NavLink to="/contact" >
              Contact 
            </NavLink>
                       
                      </li>
                      <li className="mt-1">
                        <a href="#">Terms and Condition</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3  MainFooterDivChild4">
                  <div className="headline text-white mt-5 pt-4">
                    <h5>Contact Us</h5>
                  </div>
                  <address>
                    <ul className="list-unstyled link-list">
                      <div className="row">
                        <div className="col-1 mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="77"
                            viewBox="0 0 16 77"
                            fill="none"
                          >
                            <path
                              d="M12.955 63.6665C12.955 68.3332 6.97581 72.3332 6.97581 72.3332C6.97581 72.3332 0.996582 68.3332 0.996582 63.6665C0.996582 62.0752 1.62653 60.5491 2.74786 59.4239C3.86918 58.2986 5.39002 57.6665 6.97581 57.6665C8.56159 57.6665 10.0824 58.2986 11.2038 59.4239C12.3251 60.5491 12.955 62.0752 12.955 63.6665Z"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.97598 65.6665C8.07673 65.6665 8.96906 64.7711 8.96906 63.6665C8.96906 62.5619 8.07673 61.6665 6.97598 61.6665C5.87524 61.6665 4.98291 62.5619 4.98291 63.6665C4.98291 64.7711 5.87524 65.6665 6.97598 65.6665Z"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.9547 9.98431V11.7908C12.9553 11.9585 12.921 12.1245 12.854 12.2781C12.7869 12.4318 12.6885 12.5697 12.5651 12.6831C12.4417 12.7965 12.296 12.8828 12.1374 12.9365C11.9788 12.9903 11.8107 13.0102 11.6439 12.9951C9.7937 12.7938 8.01645 12.1606 6.45496 11.1465C5.00219 10.222 3.7705 8.98843 2.84735 7.53351C1.8312 5.96259 1.19882 4.17405 1.00146 2.31277C0.986437 2.14625 1.0062 1.97843 1.05948 1.81998C1.11277 1.66153 1.19842 1.51592 1.31097 1.39244C1.42353 1.26896 1.56052 1.1703 1.71324 1.10274C1.86595 1.03519 2.03104 1.00022 2.19798 1.00006H4.00179C4.29359 0.997182 4.57647 1.10067 4.79772 1.29122C5.01897 1.48178 5.16348 1.74641 5.20432 2.03578C5.28046 2.61389 5.42165 3.18152 5.62521 3.72785C5.70611 3.94338 5.72361 4.17761 5.67566 4.4028C5.6277 4.62799 5.5163 4.83469 5.35464 4.99841L4.59103 5.76315C5.44697 7.27069 6.69333 8.51891 8.19863 9.37612L8.96224 8.61138C9.12572 8.44948 9.33212 8.33791 9.55697 8.28988C9.78182 8.24185 10.0157 8.25939 10.2309 8.3404C10.7764 8.54427 11.3432 8.68567 11.9205 8.76192C12.2126 8.80318 12.4793 8.95052 12.67 9.1759C12.8607 9.40128 12.962 9.68899 12.9547 9.98431Z"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.19243 32H11.7592C12.4169 32 12.955 32.5625 12.955 33.25V40.75C12.955 41.4375 12.4169 42 11.7592 42H2.19243C1.53471 42 0.996582 41.4375 0.996582 40.75V33.25C0.996582 32.5625 1.53471 32 2.19243 32Z"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.955 33L6.97581 38L0.996582 33"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="col-10">
                          <div className="quicklinks">
                            <li className="mt-2">
                              <a href="tel:123-456-7890">+91 8076909119</a>
                            </li>
                            <li className="mt-2">
                              <a href="mailto:support@esign.com">
                                
                                support@esign.com
                              </a>
                            </li>
                            <li className="quicklinkpara">
                              <p className=" FooterLogoTagLine FooterLogoTagLine1">
                                B-70, First Floor, Sector-2, Noida,
                                <br />
                                Gautam Buddha Nagar, <br />
                                U.P-201301
                              </p>
                            </li>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </address>
                </div>
                <div className="col-2  MainFooterDivChild15">
                  <div className="quicklinks">
                    <div className="headline text-white mt-5  pt-4">
                      <h5>Social</h5>
                    </div>
                    <ul className="list-unstyled link-list   SocialIconsOfFooter">
                      <li>


                        <a href="#">
                          &nbsp; &nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="18"
                            viewBox="0 0 11 18"
                            fill="none"
                          >
                            <path
                              d="M9.8663 1H7.42025C6.33903 1 5.3021 1.42143 4.53756 2.17157C3.77302 2.92172 3.34351 3.93913 3.34351 5V7.4H0.897461V10.6H3.34351V17H6.6049V10.6H9.05095L9.8663 7.4H6.6049V5C6.6049 4.78783 6.69081 4.58434 6.84371 4.43431C6.99662 4.28429 7.20401 4.2 7.42025 4.2H9.8663V1Z"
                              stroke="#01E4F6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>{" "}



                        <a href="#">
                          &nbsp; &nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                          >
                            <path
                              d="M14.7728 1.00672C14.1655 1.45846 13.4931 1.80396 12.7815 2.02993C12.3996 1.56682 11.892 1.23858 11.3274 1.0896C10.7628 0.940625 10.1685 0.978099 9.62475 1.19696C9.08101 1.41581 8.61413 1.80549 8.28724 2.31329C7.96036 2.82109 7.78925 3.42251 7.79705 4.0362V4.70496C6.6826 4.73544 5.5783 4.47478 4.5825 3.94622C3.5867 3.41765 2.73031 2.63758 2.08961 1.67548C2.08961 1.67548 -0.447031 7.69432 5.26041 10.3694C3.95437 11.3043 2.39854 11.773 0.821289 11.7069C6.52873 15.0507 13.5045 11.7069 13.5045 4.01614C13.5039 3.82986 13.4869 3.64404 13.4538 3.46107C14.101 2.78796 14.5577 1.93811 14.7728 1.00672Z"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>{" "}
                        &nbsp;{" "}



                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M6.32767 7.50011C6.32746 7.50011 6.32782 7.50011 6.32767 7.50011H2.99614C2.7663 7.49995 2.57992 7.68632 2.57976 7.91627C2.57976 7.91611 2.57976 7.91647 2.57976 7.91627V17.9168C2.57961 18.1468 2.76584 18.3333 2.99563 18.3334C2.99548 18.3334 2.99584 18.3334 2.99563 18.3334H6.32716C6.557 18.3336 6.74338 18.1472 6.74354 17.9172C6.74354 17.9171 6.74354 17.9174 6.74354 17.9172V7.91677C6.74369 7.68677 6.55746 7.50026 6.32767 7.50011ZM5.91078 17.5001H3.41252V8.33344H5.91078V17.5001ZM15.0711 7.50011C14.1677 7.50016 13.2895 7.79852 12.5728 8.3489V7.91677C12.573 7.68677 12.3867 7.50026 12.1569 7.50011C12.1567 7.50011 12.1571 7.50011 12.1569 7.50011H8.82542C8.59558 7.49995 8.4092 7.68632 8.40905 7.91627C8.40905 7.91611 8.40905 7.91647 8.40905 7.91627V17.9168C8.40889 18.1468 8.59512 18.3333 8.82497 18.3334C8.82481 18.3334 8.82512 18.3334 8.82497 18.3334H12.1564C12.3863 18.3336 12.5727 18.1472 12.5728 17.9172C12.5728 17.9171 12.5728 17.9174 12.5728 17.9172V13.3334C12.5728 12.6431 13.1321 12.0834 13.8219 12.0834C14.5118 12.0834 15.0711 12.6431 15.0711 13.3334V17.9168C15.0709 18.1468 15.2572 18.3333 15.487 18.3334C15.4868 18.3334 15.4872 18.3334 15.487 18.3334H18.8185C19.0483 18.3336 19.2347 18.1472 19.2349 17.9172C19.2349 17.9171 19.2349 17.9174 19.2349 17.9172V11.6668C19.2322 9.36671 17.3695 7.5028 15.0711 7.50011ZM18.4021 17.5001H15.9038V13.3334C15.9038 12.1828 14.9718 11.2501 13.8219 11.2501C12.6721 11.2501 11.7401 12.1828 11.7401 13.3334V17.5001H9.2418V8.33344H11.7401V9.33604C11.7401 9.5131 11.852 9.67077 12.0191 9.72911C12.1857 9.78923 12.3722 9.73577 12.4818 9.59646C13.6165 8.15746 15.702 7.91143 17.14 9.04694C17.941 9.67947 18.4065 10.6457 18.4021 11.6668V17.5001ZM4.96809 1.6683C4.87014 1.66143 4.77184 1.66092 4.67385 1.66677C3.41699 1.58087 2.32853 2.53083 2.24268 3.78856C2.23922 3.83917 2.23749 3.88983 2.23739 3.94054C2.22657 5.18759 3.22802 6.20728 4.4742 6.21811C4.52508 6.21857 4.5759 6.21725 4.62668 6.21425H4.65026C5.90473 6.30209 6.99279 5.35564 7.08057 4.1003C7.16835 2.84496 6.22256 1.75614 4.96809 1.6683ZM4.93932 5.38331C4.84315 5.39216 4.74628 5.39139 4.65026 5.38092H4.62668C3.83047 5.44215 3.13546 4.84594 3.07426 4.04918C3.01307 3.25247 3.60886 2.55692 4.40507 2.49568C4.49463 2.48882 4.5846 2.49029 4.67385 2.50011C5.46945 2.42676 6.17386 3.0127 6.24721 3.80885C6.3205 4.60506 5.73497 5.30996 4.93932 5.38331Z"
                              fill="white"
                            />
                          </svg>
                        </a>{" "}
                        &nbsp;{" "}



                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_342_32)">
                              <path
                                d="M14.1909 0H4.07295C1.90321 0 0.138184 1.83167 0.138184 4.08333V9.91667C0.138184 12.1683 1.90321 14 4.07295 14H14.1909C16.3607 14 18.1257 12.1683 18.1257 9.91667V4.08333C18.1257 1.83167 16.3607 0 14.1909 0ZM17.0015 9.91667C17.0015 11.5249 15.7407 12.8333 14.1909 12.8333H4.07295C2.52321 12.8333 1.2624 11.5249 1.2624 9.91667V4.08333C1.2624 2.47508 2.52321 1.16667 4.07295 1.16667H14.1909C15.7407 1.16667 17.0015 2.47508 17.0015 4.08333V9.91667Z"
                                fill="white"
                              />
                              <path
                                d="M12.1706 6.46683L7.11162 4.13349C7.02603 4.09403 6.9323 4.07739 6.83894 4.08508C6.74558 4.09277 6.65555 4.12454 6.57703 4.17751C6.49851 4.23048 6.43399 4.30297 6.38933 4.38839C6.34467 4.47382 6.32128 4.56947 6.32129 4.66666V9.33333C6.32113 9.43057 6.34443 9.52631 6.38905 9.61182C6.43368 9.69732 6.49821 9.76989 6.57678 9.82289C6.65534 9.87589 6.74544 9.90764 6.83885 9.91526C6.93227 9.92288 7.02604 9.90611 7.11162 9.86649L12.1706 7.53316C12.2698 7.48717 12.3541 7.41236 12.4132 7.31774C12.4724 7.22313 12.5038 7.11277 12.5038 6.99999C12.5038 6.88722 12.4724 6.77686 12.4132 6.68224C12.3541 6.58763 12.2698 6.51281 12.1706 6.46683ZM7.44551 8.43558V5.56441L10.5585 6.99999L7.44551 8.43558Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_342_32">
                                <rect
                                  width="17.9875"
                                  height="14"
                                  fill="white"
                                  transform="translate(0.138184)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />
            <p className="Copyright">
              Copyright © 2023 eSign | Product of Edureify
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
