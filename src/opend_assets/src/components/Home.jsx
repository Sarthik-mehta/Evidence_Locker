// import React from "react";
// import '../assets/css/home.css';
// import lightBulb from '../assets/img/light-bulb.png';
// import mission from '../assets/img/mission.png';
// import vision from '../assets/img/vision.png';
// import law from '../assets/img/law.png';
// import fingerprint from '../assets/img/fingerprint.png';
// import benefitsImage from '../assets/img/Benefits.png';
// import footerLocation from '../assets/img/footer-location.png'
// import footerCall from '../assets/img/footer-call.png'
// import Nav from 'react-bootstrap/Nav';
import React from "react";
import '../assets/css/home.css';
import navbarImg from '../assets/img/navbar-bg-img.png';

import howProjectworks from '../assets/img/how-project-works-bg-img.png';
import eLockerProject from '../assets/img/E-locker-project.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lightBulb from '../assets/img/light-bulb.png';
import mission from '../assets/img/mission.png';
import vision from '../assets/img/vision.png';
import law from '../assets/img/law.png';
import BenefitCard from "./BenefitCard";
import fingerprint from '../assets/img/fingerprint.png';
import benefitsImage from '../assets/img/Benefits.png';
import contactUsLocation from '../assets/img/footer-location.png'
import contactUsCall from '../assets/img/footer-call.png'
import collaborative from '../assets/img/Collaborative-Contract-Bottom-Img.png'
import contactUsBgImg from "../assets/img/Footer-bg-img2.png";
import contactUsWorldImg from "../assets/img/Footer-bg-img1.png"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Minter from "./Minter";

import BenefitClock from '../assets/img/benefit-clock.png';
import BenefitContact from '../assets/img/contact.png';
import BenefitReward from '../assets/img/euro-currency-symbol.png';
import BenefitCalendar from '../assets/img/calendar.png';
import BenefitAuthentication from '../assets/img/touch-id.png';
import BenefitVerification from '../assets/img/user.png';
import BenefitTwitter from '../assets/img/twitter.png';
import BenefitSecurity from '../assets/img/shield.png';
import BenefitFacebook from '../assets/img/facebook.png';
import BenefitTelegram from '../assets/img/telegram.png';
import BenefitWechat from '../assets/img/wechat.png';
import BenefitUpToDate from '../assets/img/changes.png';


class Home extends React.Component {
    render() {

        return (
            <div className="home" style={{ backgroundColor: "white"}}>

                {/* ------------------------------------------get Started----------------------------------------- */}

                <div className="get-started"
                    style={{
                        backgroundImage: `url(${navbarImg})`,
                        width: "100%", height: "80vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%", marginTop: "", position: "relative"
                    }} >
                    <div className="get-started-txt"
                        style={{
                            float: "left", paddingTop: "100px", paddingLeft: "5%", position: "absolute",
                            left: "0", top: "0"
                        }}>
                        <h1>E-Locker</h1>
                        <small style={{ color: "white" }}>A digital blockchain based evidence locker</small>
                        <p style={{ color: "white" }}> Evidence Lockers are durable, highly secure with evidence <br></br>tracking technology for evidence storage</p>
                        <Link to="/login"><button className="all-btn">Get Started</button></Link>
                    </div>
                </div>


                {/* -----------------------------------------Services-----------------------------------------------      */}

                <div className="Services">
                    <h1 >Services</h1>
                    <h4 >Protect the authenticity of evidences with us</h4>


                    <div className="row">
                        <div className="column" style={{ width: "33%" }}>
                            <div className="card">
                                <img src={lightBulb} alt="light-bulb" style={{
                                    display: 'block',
                                    marginLeft: ' auto',
                                    marginRight: 'auto',
                                    width: '200px',
                                    height: '200px'

                                }}></img>
                                <h4 style={{color:"White"}} >The E-locker Project</h4>
                                <p style={{ color: "#5b89c6" }}>Digital Evidence File Locker with
                                    real time monitoring and control.
                                </p>
                            </div>
                        </div>
                        <div className="column" style={{ width: "33%" }}>
                            <div className="card">
                                <img src={mission} alt="mission" style={{
                                    display: 'block',
                                    marginLeft: ' auto',
                                    marginRight: 'auto',
                                    width: '200px',
                                    height: '200px'


                                }}></img>
                                <h4 >Our mission</h4>
                                <p style={{ color: "#5b89c6" }}>Our mission is to provide
                                    Evidence locker based on blockchain.</p>

                            </div>
                        </div>
                        <div className="column" style={{ width: "33%" }}>
                            <div className="card">
                                <img src={vision} alt="vision" style={{
                                    display: 'block',
                                    marginLeft: ' auto',
                                    marginRight: 'auto',
                                    width: '200px',
                                    height: '200px'


                                }}></img>
                                <h4 >our vision</h4>
                                <p style={{ color: "#5b89c6" }}>To provide a fast, secured and easily managegable
                                    online e-locker.</p>


                            </div>
                        </div>

                    </div>
                </div>


                {/* --------------------------------------- How projecct works------------------------------------------- */}

                <div className="HowProjectWorksBgImg " style={{
                    backgroundImage: `url(${howProjectworks})`,
                    width: "100%", height: "80vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%", marginTop: "", position: "relative"
                }}
                >

                    <div className="top-right">
                        <h3>How Our Project Works</h3>
                        <p style={{ color: "#5b89c6" }}>our project will be implemented using a decentralized network called Internet Computer developed
                            by dfinity and Motoko to store the digital evidence with a tamper-proof facility.
                            Unlike other blockchains, on Internet computer and Motoko 100 percent data will be stored on blockchain
                            itself.

                        </p>
                        <div className="row2">
                            <div className="column2">
                                <div className="card2">
                                    <img src={fingerprint} style={{ height: "40px", width: "40px" }} alt="fingerprint" ></img>
                                    <small >Store Evidence </small>
                                    <p>
                                        <Link to="/minter">
                                        <b style={{color:"white"}}> Click here to proceed</b>
                                        </Link>
                                    </p>

                                </div>
                            </div>
                            <div className="column2">
                                <div className="card2">
                                    <img src={law} style={{ height: "40px", width: "40px" }} alt="law" ></img>
                                    <small >Show Evidence</small>
                                    <p>
                                        <Link to="/collection">
                                        <b style={{color:"white"}}>Click here to proceed</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="e-locker-project" style={{
                    backgroundImage: `url(${eLockerProject})`,
                    width: "100%", height: "50vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%", marginTop: "0px", position: "relative"
                }}
                >
                    <div className="top-left-bg">
                        <h4 >The E-Locker Project</h4>
                        <p style={{ color: "#5b89c6" }}>Evidence Locker was designed and built by digital forensic experts<br></br> for forensic professionals,
                            law enforcement agencies and legal <br></br>departments to simplify the process of acquiring and <br></br>
                            preserving data that resides in the blockchain in a secure forensically sound manner.
                        </p>
                    </div>


                </div>

                {/* ---------------------------------------------Benefits---------------------------------------------- */}
                <div className="">
                    <h1 >Benefits</h1>
                    <table className="table-benefits">
                        <tr>
                            <td className="card-benefits td-benefits " ><BenefitCard img={BenefitClock} description="Get started in 30 seconds" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitContact} description="Two people account" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitReward} description="Rewards Daily" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitCalendar} description="Easy Transfer" /></td>
                        </tr>
                        <tr>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitAuthentication} description="Authentication" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitVerification} description="Verification" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitTwitter} description="Twitter Account" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitSecurity} description="Security" /></td>
                        </tr>
                        <tr>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitFacebook} description="Facebook Account" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitTelegram} description="Telegram Account" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitWechat} description="WeChat Account" /></td>
                            <td className="card-benefits td-benefits"><BenefitCard img={BenefitUpToDate} description="Up-To-Date Security" /></td>
                        </tr>


                    </table>

                </div>

                {/* -------------------------------- Bottom image section--------------------------------------- */}

                <div className="Bottom-Image" style={{
                    backgroundImage: `url(${collaborative})`,
                    width: "100%", height: "80vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%", marginTop: "0px", position: "relative"
                }} >

                    <h4 className="bottom-image-text" style={{ color: "white" }}>
                        <br></br>The combination and Integration of Internet Computer, <br></br>Motoko and Blockchain
                        Technology produce impressive potential <br></br>as these
                        trajectories are technologically merged.
                    </h4>
                </div>


                {/*-------------------------------------- contact us--------------------------------------------- */}
                <div className="contactUsSection" style={{
                    backgroundImage: `url(${contactUsBgImg})`,
                    width: "100%", height: "80vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%", marginTop: "0px", position: "relative"
                }} >


                    <div className="contactUs">




                        <div className="contactUs-world-img container" style={{
                            backgroundImage: `url(${contactUsWorldImg})`,
                            width: "80%", height: "80vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
                            backgroundSize: "80% ", marginLeft: "20%", marginRight: "00%", position: "relative", marginTop: "2%"
                        }} >

                            <div className="contactUs-left">
                                <p></p>
                            </div>

                            <div className="contactUs-right">
                                <h3 style={{ marginLeft: "15%", padding: "2%" }} >Get In Touch</h3>

                                <div style={{ marginLeft: "15%" }}>
                                    <img src={contactUsLocation} alt="contactUs-location" style={{
                                        width: "40px", height: "40px",
                                    }} ></img>
                                    <p className="contactUsText" >C-1/901, New Delhi-110094</p>

                                    <img src={contactUsCall} alt="contactUs-call" style={{
                                        width: "40px", height: "40px",
                                    }} ></img>
                                    <p>Support@elocker.com </p>

                                </div>

                                <div>
                                    <h2 style={{ marginLeft: "15%", marginTop: "20px" }}><b>Have a question?</b></h2>
                                    <form id="contactUsForm">
                                      
                                        <table style={{ marginLeft: "43%" }}>
                                            <tr>
                                                <td> <input id="name" placeholder="Name" className="contactUs-input"></input> </td>
                                                <td>  <input id="emain" placeholder="Emain" className="contactUs-input"></input> </td>
                                            </tr>
                                            <tr ><td ><input id="message" placeholder="Message" className="contactUs-input"></input></td></tr>
                                            <tr><td ><button className="all-btn" style={{ marginLeft: "35%" }}>Send</button></td></tr>
                                        </table>

                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>


        );
    }

}


export default Home;
