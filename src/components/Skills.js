import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-html5" title="HTML5" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3" title="CSS3" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript" title="JavaScript" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-php" title="PHP" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-nodejs" title="NodeJS" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-yii" title="Yii2" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery" title="jQuery" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap" title="Bootstrap" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-react" title="ReactJS" />
            </li>
          </ul>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-postgresql" title="Postgresql" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-grunt" title="Grunt" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-git" title="Git" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-npm" title="NPM" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bower" title="Bower" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-composer" title="Composer" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-aws" title="AWS" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bitbucket" title="Bitbucket" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-github" title="Github" />
            </li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Browser Testing &amp; Debugging
            </li>
          </ul>
        </div>
      </section>;
  }
}

export default Skills;
