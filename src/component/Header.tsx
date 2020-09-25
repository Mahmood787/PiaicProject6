import React from 'react'

function Header() {
    return (
        <header >
                <div className="container-header">
                <div id="branding">
                    <h1><span className="highlight">Smart</span> Quiz</h1>
                </div>
                <nav >
                    <ul>
                        <li><a href="#" className="current">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                </div>            
        </header>
    )
}
export default Header
