import React from "react";
import Gimage from "../assets/image/gimage.png";
import Gimage1 from "../assets/image/gimage1.png";
import Gimage2 from "../assets/image/gimage2.png";
import Gimage3 from "../assets/image/gimage3.png";
import Gimage4 from "../assets/image/gimage4.png";
import Gimage5 from "../assets/image/gimage5.png";
import Gimage6 from "../assets/image/gimage6.png";
import Gimage7 from "../assets/image/gimage7.png";
import Phoneimg from "../assets/image/phoneimg.png";
function Sectiontable() {
  return (
    <div>
      <>
        <section className="bg-clr  mt_1  pt-150 pt-122 position-relative">
          <div className="container">
            <img
              className="section11blr max-width"
              src="./assets/img/section11blrimg.png"
              alt="blrimg"
            />
            <div>
              <h2 className="text-white fs-xl   text-center ff-jakarta pb-25">
                Our Integrations
              </h2>
            </div>
            <div className="align-items-center justify-content-center text-center">
              <div className="row pt-70 position-relative section11_img4">
                <div className="col-sm-6 col-lg-3 section11_img pt-75">
                  <img className="max-width" src={Gimage} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3 section11_img1 pt-70 pt-72 pt-75">
                  <img className="max-width" src={Gimage1} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3 pt-120 section11_img2 pt-70 pt-150 pt-75">
                  <img className="max-width" src={Gimage2} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3 pt-120 pt-70 pt-150 pt-75">
                  <img className="max-width" src={Gimage3} alt="gimge" />
                </div>
              </div>
              <div className="row pt-150">
                <div className="col-sm-6 col-lg-3 pt-70 pt-75">
                  <img className="max-width" src={Gimage4} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3 pt-70 pt-75">
                  <img className="max-width" src={Gimage5} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3  pt-70 pt-150 pt-75">
                  <img className="max-width" src={Gimage6} alt="gimge" />
                </div>
                <div className="col-sm-6 col-lg-3  pb-70 pt-70 pt-150 pt-75">
                  <img className="max-width" src={Gimage7} alt="gimge" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Ai4 section_12 */}
        <section className="bg-clr  mt_1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <h2 className="text-white fs-xl fw-md ff-jakarta max-w-500">
                  Accelerate Your Enterprise’s Document Redaction Efforts
                </h2>
                <p className="tcolor fs-ms fw-md ff-jakarta max-w-500 pb-25">
                  As your team carries out time-intensive manual redaction
                  processes, there’s a trade-off between security and
                  efficiency. iDox.ai Redact offers the best of both worlds with
                  thorough, automatic redactions.
                </p>
                <a
                  className="learnbtn text-white mrauto ff-jakarta fs-ms-400 d-inline imaghover"
                  href="#id"
                >
                  Learn More
                </a>
              </div>
              <div className="col-12 col-lg-6 ">
                <img className="w-100 " src={Phoneimg} alt="phoneimge" />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Sectiontable;
