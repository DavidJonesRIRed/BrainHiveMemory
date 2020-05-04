import React from 'react';

const Navbar = (props) => {
    return(
        <div className="header">
          <h1 className="title">
            <a href="/">Welcome to BrainHive</a>
          </h1>
          <div className="navigation">
            <a href="/addResource">Add Resource</a>
          </div>
        </div>
    )
}
export default Navbar;