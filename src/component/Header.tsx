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
                        <li><a className="current">Home</a></li>
                        <li><a >Services</a></li>
                        <li><a >Contact</a></li>
                    </ul>
                </nav>
                </div>            
        </header>
    )
}
export default Header
