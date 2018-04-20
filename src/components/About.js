import React, { Component } from 'react';

class About extends Component {
  render() {
    return <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            Karthik&nbsp;
            <span className="text-primary">Panjaje</span>
          </h1>
          <div className="subheading mb-5">
            +919632434949&nbsp;
            <a href="mailto:name@email.com">karthik.panjaje@gmail.com</a>
          </div>
          <p className="mb-5">
            Full Stack Developer with 6+ years of experience in building responsive, performant
            and robust web application. Can build rapid web application prototypes as well
            quickly grasp existing work to complete it in time. A team player who constantly
            self-improves and helps others to grow as well. Proficient in <b>PHP</b>, <b>NodeJS</b> and&nbsp;
            <b>ReactJS</b>.
          </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/karthik.panjaje" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/karthik_panjaje" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/karthikpanjaje/" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/cyberinferno" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>;
  }
}

export default About;
