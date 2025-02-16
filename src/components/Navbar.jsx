import React from "react";

function Navbar() {
    return (
        <header className="Navbar">
            <div className="Logo">
                Facebook
            </div>
            <input type="text" className="SearchBar" placeholder="Search..."/>
            <ul className="Menu">
                <li>Home</li>
                <li><i class="fa-solid fa-user-group"></i></li>
                <li><i class="fa-brands fa-facebook-messenger"></i></li>
                <li><i class="fa-solid fa-bell"></i></li>
                <li>|</li>
                <li><i class="fa-solid fa-circle-question"></i></li>
            </ul>
        </header>
    );
}

export default Navbar;