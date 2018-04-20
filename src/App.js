import React, { Component } from 'react';
import $ from 'jquery';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Education from './components/Education';

class App extends Component {
  componentDidMount() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        window.location.hostname == this.hostname
      ) {
        var t = $(this.hash);
        if ((t = t.length ? t : $('[name=' + this.hash.slice(1) + ']')).length)
          return (
            $('html, body').animate(
              {
                scrollTop: t.offset().top
              },
              1e3,
              'easeInOutExpo'
            ),
            !1
          );
      }
    });
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    $('body').scrollspy({
      target: '#sideNav'
    });
  }

  render() {
    return <div>
        <Navigation />
        <About />
        <Experience />
        <Skills />
        <Interests />
        <Awards />
        <Education />
      </div>;
  }
}

export default App;
