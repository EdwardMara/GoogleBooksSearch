import React from "react";
// component footer to be placed at the bottom of the page....Shocker.
function Footer() {
  return (
    <footer>
      <hr />
      {/* Declaration made at the bottom of page justified right */}
      <p className="pull-right">

        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

export default Footer;
