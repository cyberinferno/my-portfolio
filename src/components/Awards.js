import React, { Component } from 'react';

class Awards extends Component {
  render() {
    return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Recognised by Mediafire for reporting security vulnerability
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Mentioned in Nokia Siemens Network (NSN) responsible disclosure
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Microsoft Certified Systems Engineer
            </li>
          </ul>
        </div>
      </section>;
  }
}

export default Awards;
