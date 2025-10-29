import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
  return (
<>
   <section className="container">
<div>
    <nav className="body">
        <ul className="">
<a href="/">About</a>
<Link to="/Resume">Resume</Link>
<Link to="/Portfolio">Portfolio</Link>
<Link to="/Contact">Contact</Link>
        </ul>
    </nav>
</div>
</section>
</>
    )
}

export default navbar