import React from "react";
import '../assets/css/home.css';
import lightBulb from '../assets/img/light-bulb.png';
import mission from '../assets/img/mission.png';
import vision from '../assets/img/vision.png';
import law from '../assets/img/law.png';
import fingerprint from '../assets/img/fingerprint.png';
import benefitsImage from '../assets/img/Benefits.png';
import footerLocation from '../assets/img/footer-location.png'
import footerCall from '../assets/img/footer-call.png'
import Nav from 'react-bootstrap/Nav';



class Home extends React.Component {
    render() {

        return (
            <div className="home">

                <div className="Services">
                    <h1 style={styles.headingTextH1}>Services</h1>
                    <h4 style={styles.headingTextH4}>Protect the authenticity of evidences with us</h4>


                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={lightBulb} alt="light-bulb" style={styles.cardImg}></img>
                                <h4 style={styles.cardHeadingH4}>The E-locker Project</h4>
                                <p style={styles.cardParagraph}>Digital Evidence File Locker with
                                    real time monitoring and control.
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={mission} alt="mission" style={styles.cardImg}></img>
                                <h4 style={styles.cardHeadingH4}>Our mission</h4>
                                <p style={styles.cardParagraph}>Our mission is to provide
                                    Evidence locker based on blockchain.</p>

                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <img src={vision} alt="vision" style={styles.cardImg}></img>
                                <h4 style={styles.cardHeadingH4}>our vision</h4>
                                <p style={styles.cardParagraph}>To provide a fast, secured and easily managegable
                                    online e-locker.</p>


                            </div>
                        </div>

                    </div>
                </div>


                <div class="HowProjectWorksBgImg">

                    <div class="top-right">
                        <h3>How Our Project Works</h3>
                        <p>our project will be implemented using a decentralized network called Internet Computer developed
                            by dfinity and Motoko to store the digital evidence with a tamper-proof facility.
                            Unlike other blockchains, on Internet computer and Motoko 100 percent data will be stored on blockchain
                            itself.

                        </p>
                        {/*------------------------------------------- To be updated ------------------------------------------------*/}
                        <div class="row2">
                            <div class="column2">
                                <div class="card2">
                                    <img src={fingerprint} alt="fingerprint" style={styles.fingerprintImg}></img>
                                    <small style={styles.row2Text}>Store Evidence </small>
                                    <p style={styles.row2Text}><a href="/upload-evidence">Click here to proceed</a></p>
                                </div>
                            </div>
                            <div class="column2">
                                <div class="card2">
                                    <img src={law} alt="law" style={styles.lawImg}></img>
                                    <small style={styles.row2Text}>Show Evidence</small>
                                    <p style={styles.row2Text}><a href="/view-evidence">Click here to proceed</a></p>
                                </div>
                            </div>

                        </div>
                        {/*------------------------------------------- ------------------- ------------------------------------------------*/}

                    </div>
                </div>



                <div class="e-locker-project">
                    <div class="top-left-bg">
                        <h4 style={styles.cardHeadingH4}>The E-Locker Project</h4>
                        <p >Lorem ipsum dolor sit amet, consectetur  adipiscing elit,
                            sed do eiusmod tempor<br></br> incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud<br></br>
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure<br></br> dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            <br></br>Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui <br></br>officia deserunt mollit anim id est laborum

                        </p>
                    </div>


                </div>


                {/*------------------------------------------- TBD -------------------------------------------------*/}
                <div class="Benefits">
                    <h1 style={styles.headingTextH1}>Benefits</h1>
                    <img class="BenefitsImg" style={styles.benefitsImg} src={benefitsImage} alt="benefitsImg"></img>

                </div>

                {/* --------------------------------------------------------------------------------------------------- */}


                <div class="Bottom-Image">
                    <h4 style={styles.headingTextH3} class="bottom-image-text">
                        <br></br><br></br><br></br><br></br>The combination and Integration of Internet Computer, Motoko and Blockchain
                        Technology produce impressive potential as these
                        trajectories are technologically merged. 
                    </h4>
                </div>


                {/* footer */}
                <div class="footer">
                <div class="container footer-img2 ">
                    <div class="top-right-footer footer-table">

                        <table class="table1" >
                            <tr class="tableRow1">
                                <th><h3 style={styles.h3Heading}>Get In Touch</h3></th>
                            </tr>
                            <tr>
                                <td class="tableData1">
                                    <img src={footerLocation} alt="footer-location" style={styles.HomefooterLocationImg}></img>
                                    <p class="footerText">C-1/901, New Delhi-110094</p>
                                </td><br></br>
                                

                            </tr>
                            <tr>
                            <td class="tableData1">
                                    <img src={footerCall} alt="footer-call" style={styles.HomefooterLocationImg}></img>
                                    <p>Support@elocker.com </p>
                                </td>
                            </tr>
                           


                        </table>
                        <br></br><br></br>
                    </div>



                </div>

             

            </div>


            </div>
        );
    }

}

const styles = {
    headingTextH1: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 15
    },
    headingTextH4: {
        textAlign: 'center',
        color: 'grey'
    },
    cardImg: {

        // height:200,
        // width:200,

        display: 'block',
        marginLeft: ' auto',
        marginRight: 'auto',
        width: '50%'


    },
    cardHeadingH4: {
        marginTop: 10,
        fontWeight: 'bold'

    },
    cardParagraph: {
        color: "black"
    },
    fingerprintImg: {
        height: 30,
        width: 30,
    },
    lawImg: {
        height: 30,
        width: 30
    },
    row2Text: {
        color: 'white',
        fontSize: 10
    },
    headingTextH3:{
        textAlign: 'center',
        color:'white',
        marginLeft:'30%' ,
        marginRight:'30%',
    },
    benefitsImg:{
        width:'100%'
    },
    h3Heading: {
        fontWeight: 'bold'
    },
    HomefooterLocationImg: {
        height: 50,
        width: 50
    },
}

export default Home;
