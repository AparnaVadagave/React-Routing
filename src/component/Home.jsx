import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <div class="logo me-auto">
            <h1><a href="index.html">Lumia</a></h1>
            {/* <a href="index.html"><img src={require("../images/hero-bg.jpg")} alt="" class="img-fluid"/></a> */}

          </div>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/portfolio"}>Portfolio</Link>
              <Link to={"/testimonial"}>Testimonial</Link>
              <Link to={"/team"}>Team</Link>
              <Link to={"/contact"}> Contact</Link>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links d-flex align-items-center">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>
    </div>
  )
}
