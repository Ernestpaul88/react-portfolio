import React from "react";

function Header(props) {
    return (
        <header class="top-0 z-index-fixed position-absolute my-3 start-0 end-0 mx-4">
            <p class="headline ms-sm-3 ms-xs-3">Ernest Paul: Interactive Portfolio</p>
            {props.children}
        </header>
    );
  }


  export default Header;