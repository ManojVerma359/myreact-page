import React from "react";
import Image1 from "../assets/image/nhs-img-1.png";
import Image2 from "../assets/image/img-cbcs.png";
import Image3 from "../assets/image/img-air.png";
import Image4 from "../assets/image/img-n-college.png";
import Image5 from "../assets/image/img-cbcs.png";
import Image6 from "../assets/image/imgwb.png";
import Image7 from "../assets/image/img-b.png";
import Image8 from "../assets/image/img-rubix.png";
import Image9 from "../assets/image/img-rubix.png";
import Ai_img from "../assets/image/img-ai.png";

function Sectionhero() {
  return (
    <div>
      <section className="py-4">
        <div className="container-fluid ss_col_linear">
          <h2 className="fs-dm col_white8 fw-sm ff-jakarta text-center pb-17">
            In collaboration with
          </h2>
          <div className="d-flex flex-wrap justify-content-spacebetween bg-col_sl pt-25 pb-25">
            <div>
              <img className="img" src={Image1} alt="nhs-img-1" />
            </div>
            <div>
              <img className="img" src={Image2} alt="img-cbcs" />
            </div>
            <div>
              <img className="img" src={Image3} alt="img-air" />
            </div>
            <div>
              <img className="img" src={Image4} alt="img-n-college" />
            </div>
            <div>
              <img className="img" src={Image5} alt="img-cbcs" />
            </div>
            <div>
              <img className="img" src={Image6} alt="imgwb" />
            </div>
            <div>
              <img className="img" src={Image7} alt="img-b" />
            </div>
            <div>
              <img className="img" src={Image8} alt="img-rubix" />
            </div>
            <div>
              <img className="img" src={Image9} alt="img-rubix" />
            </div>
          </div>
        </div>
      </section>

        <section>
    <div className="container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12 pb-lg-0 pb-4">
          <div className="ai_col_linear position-relative">
            <img src={Ai_img} alt="ig-ai" className="w-100" />
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
          <div>
            <h2 className="ff-jakarta fs-xl fw-lg col_white text-capitalize mw-467">
              Compliance Security Trust
            </h2>
            <p className="ff-jakarta fs-ms fw-md col_dox mw-474">
              Posuere ultrices aliquet risus malesuada viverra nec praesent. Sed
              nisl facilisi augue.
            </p>
            <button className="btn_watch d-flex justify-content-center align-items-center col_white mt-28 fs-ms fw-xl text-capitalize ff-jakarta">
              watch demo video
            </button>
          </div>
        </div>
      </div>
    </div>
        </section>
  
</div>
  );
};


export default Sectionhero;
