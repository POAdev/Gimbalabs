import React from 'react'
import { Link } from 'react-router-dom';



function Menu() {

    return(
    <div>
        <nav class="navbar navbar-expand-lg">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/weather">Weather API</Link>
            </li>
            <li class="nav-item">
              <Link to="/ideas">Ideas</Link>
            </li>
            <li class="nav-item">
              <Link to="/metadata">Metadata</Link>
            </li>
          </ul>
        </nav>
            
            


    </div>
        
        
        



    )



}
export default Menu