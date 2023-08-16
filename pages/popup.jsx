import React from "react";
import "./popup.css";
import pop1 from "../ComponentsESign/images/Iconpop1.svg";
import pop2 from "../ComponentsESign/images/Group 1000004338pop2.svg";
import times from "../ComponentsESign/images/Timeslogo.svg";
import icici from "../ComponentsESign/images/ICICI.svg";
import southindia from "../ComponentsESign/images/SouthIndiaBank.svg";
import bob from "../ComponentsESign/images/BOB.svg";
import maildigi from "../ComponentsESign/images/rafikimail.svg";
import cuatess from "../ComponentsESign/images/cuatess.svg";
import vectorblue from "../ComponentsESign/images/Vectorblue.svg";
import website from "../ComponentsESign/images/rafikiwebsite.svg";
import papericon from "../ComponentsESign/images/Iconpapericon.svg";
import copy from "../ComponentsESign/images/Iconcopy.svg";
import paste from "../ComponentsESign/images/Iconpaste.svg";
import timer from "../ComponentsESign/images/Icontimer.svg";
import ppl from "../ComponentsESign/images/Iconppl.svg";
import pendrive from "../ComponentsESign/images/Iconpendrive.svg";


class  Popup extends React.Component{
    render(){
        return(
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="popup">
                                <div className="row">
                                    <div className="col-2">
                                       <img src ={pop1} className="popimg1"/>
                                    </div>
                                    <div className="col-9">
                                        <h1 className="popuph1">Rearrange Pages</h1>
                                    </div>
                                    <div className="col-1">
                                    <img src ={pop2} className="popimg2"/>
                                    </div>
                                </div>
                                <div className="popsec">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Popup;