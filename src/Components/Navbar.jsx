import React from "react";
const Navbar=()=>{
    return <>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a href="#"><img className="Loco" width={150}src="../Image/Loco.png"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Partners</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Why Cloudflare</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    
    
    
    
    </>





}
export default Navbar;