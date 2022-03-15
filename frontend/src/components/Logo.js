import React from 'react';

const Logo = () => {
    return (
      <div className="logo">
        {/* Les images importées depuis la balise img sont accessibles dans "public" */}
        <img src="./icon-left-font-monochrome-black.png" alt="Logo Groupomania" />
        {/* <h3>Groupomania</h3> */}
      </div>
    );
};

export default Logo;