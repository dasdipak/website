import { Component } from "react";

class footer extends Component{
    render(){
        return(
         
          <div className="footer">
                <div class="col">
            <h6>About</h6>
            <p class="text-justify"><strong>Nirdhan Utthan Laghubitta Bittiya Sanstha</strong>, "the bank for upliftment of the poor" is a microfinance bank established in November 1998 under Company Act of Nepal 1997 (now Company Act 2006)</p>
          </div>
          <div class="col">
            <h6>Products</h6>
            <ul class="footer-links">
              <li><a href="">C</a></li>
              <li><a href="">UI Design</a></li>
              <li><a href="">PHP</a></li>
              <li><a href="">Java</a></li>
              <li><a href="">Android</a></li>
              <li><a href="">Templates</a></li>
            </ul>
          </div>

          <div class="col">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
          </div>
        )
    }
}
export default footer;