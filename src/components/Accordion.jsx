import React from "react";
import Acordionimg from "../assets/image/accordion-img.png";

function Accordion() {
  return (
    <div>
      <section className="position-relative col_linear_acc">
        <div className="container">
          <div className="row pt-4 pb-177">
            <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center pb-lg-0 pb-4">
              <div>
                <p className="col_white ff-jakarta fs-xl fw-lg tt-capital">
                  How we can help?
                </p>
                <p className="col_dox ff-jakarta fs-ms fw-md mw-474 pt-2">
                  Whether you handle financial, government, healthcare, or legal
                  information, iDox.ai allows organizations to reduce risk of
                  human error, combat time sensitive redaction requests, avoid
                  costly penalties at a fraction of the price.
                </p>
                <button className="btn_watch d-flex justify-content-center align-items-center col_white mt-28 fs-ms fw-xl tt-capital ff-jakarta">
                  watch demo video
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="collapseOne"
                      className="accordion-collapse collapse show tranlate-xy img_mwh"
                      data-bs-parent="#accordionExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button col_white fw-md fs-sm d-block ff-jakarta"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Time-Saving AI Integrations
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mw-474 fs-ms fw-md col_dox ff-jakarta">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="flush-collapseOne"
                      className="accordion-collapse collapse img_mwh tranlate-xy"
                      data-bs-parent="#accordionFlushExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fw-md ff-jakarta fs-sm col_white d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Enterprise-Level Scalability
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body mw-474 fs-ms ff-jakarta fw-md col_dox">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse img_mwh tranlate-xy"
                      data-bs-parent="#accordionFlushExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fw-md fs-sm ff-jakarta col_white d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Cloud-Based For Multiple Locations
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body mw-474 fs-ms ff-jakarta fw-md col_dox">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="flush-collapseThree"
                      className="accordion-collapse collapse img_mwh tranlate-xy"
                      data-bs-parent="#accordionFlushExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fw-md ff-jakarta fs-sm col_white d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Collaborative Work Among Teams
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body ff-jakarta mw-474 fs-ms fw-md col_dox">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="flush-collapseFour"
                      className="accordion-collapse collapse img_mwh tranlate-xy"
                      data-bs-parent="#accordionFlushExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed ff-jakarta fw-md fs-sm col_white d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Proactive Risk Assessment Reports
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body mw-474 fs-ms ff-jakarta fw-md col_dox">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="d-flex">
                    <img
                      src={Acordionimg}
                      alt="accordion-img"
                      id="flush-collapseFive"
                      className="accordion-collapse collapse img_mwh tranlate-xy"
                      data-bs-parent="#accordionFlushExample"
                    />
                    <div className="d-block">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed ff-jakarta fw-md fs-sm col_white d-block"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          High Accuracy To Avoid Oversights
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body mw-474 ff-jakarta fs-ms fw-md col_dox">
                          Posuere ultrices aliquet risus malesuada viverra nec
                          praesent. Sed nisl facilisi augue.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accordion;
