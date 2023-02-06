import React from "react";

export default function TipCards() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/robot.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div>How A.I is Evolving ?</div> 
                </h5>
                <p className="card-text text-center">
                  Tips on how to get success on Artificial Intelligence!!
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://www.science.org/content/article/artificial-intelligence-evolving-all-itself"
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/presentation.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Tips on Presentation Skills</h5>
                <p className="card-text text-center">
                  Tips on how to improve your Presentation skills
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://www.skillsyouneed.com/presentation-skills.html"
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/learning.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Learning is Damn Important!!</h5>
                <p className="card-text text-center">
                  Tips on how to learn anything faster than you imagine.
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://www.learnerbly.com/articles/why-is-learning-important#:~:text=Learning%20is%20important%20to%20society,and%20understand%20one%20another%20better."
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/stress.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title text-center">Dealing Stress ?</h5>
                <p className="card-text text-center">
                  Guide to deal with stress for a Developer.
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://info.codecast.io/blog/how-to-manage-stress-as-a-developer"
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/htmlcss.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">New To Coding?</h5>
                <p className="card-text text-center">
                  Guide on Coding as a Beginner!!
                  Where to start!!
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://blog.hubspot.com/website/how-to-start-coding"
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-around pt-5">
            <div className="card pb-5" id="cardColor" style={{ width: "18rem" }}>
              <img
                src={require("../images/reading.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Develop your Reading Habit!!</h5>
                <p className="card-text text-center">
                  Tips on how to develop Reading Habit!!
                </p>
                <span className="position-absolute top-75 start-50 translate-middle mt-3">
                  <a
                    href="https://www.skillsyouneed.com/rhubarb/develop-reading-habit.html"
                    target="_blank"
                    className="btn btn-primary" rel="noreferrer"
                  >
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
