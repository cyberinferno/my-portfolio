import React, { Component } from 'react';

class Interests extends Component {
  render() {
    return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time playing online computer games. I am a veteran MMORPG gamer who
            also enjoys MOBA too when time permits. I play titles like Guild Wars 2, Skyforge, Mu Legend and Dota 2.
          </p>
          <p className="mb-0">
            Other than that I am also interested in online game server emulation. I have built game server emulator and other tools for
            the MMORPG named A3 online. For further information you can check my Github account.
          </p>
        </div>
      </section>;
  }
}

export default Interests;
