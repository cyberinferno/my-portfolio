import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Tech Lead Platforms</h3>
              <div className="subheading mb-3">Zibanka Media Services Pvt. Ltd.</div>
              <p>
                Responsible for re-building and deploying the ad automation web platform
                including REST APIs with modern technologies. Also responsible for mentoring
                interns and maintaining legacy application in the company.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2017 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Senior Software Engineer</h3>
              <div className="subheading mb-3">Talview</div>
              <p>
                Responsible for building and maintaining online job interiew automation product
                as well as application tracking system. Also built online remote fraud detection
                system in online tests using experimental WebRTC technology.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2014 - Jan 2017</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">PrivyTv</div>
              <p>
                Built PHP web application using CodeIgniter framework which helps to manage
                Android Devices powering ad delivery to retail stores. Also built RESTful services to
                manipulate data from MongoDB.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2012 - Feb 2014</span>
            </div>
          </div>
        </div>
      </section>;
  }
}

export default Experience;
