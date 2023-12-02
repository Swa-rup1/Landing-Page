import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="footer-left">
          <img src="" className="footer-logo" alt="Logo" />
          <p className="footer-p">
          "Explore the essence of natural freshness with our Cranberry products, crafted to delight your senses and invigorate your well-being. From our fields to your table, savor the goodness of Cranberry in every sip, a refreshing touch of nature in every moment."
          </p>
        </div>

        <ul className="footer_ul">
          <li className="footer_li">
            <h2 className="footer_h2">Quick Links</h2>
            <ul className="footer__ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Footer</a>
              </li>
            </ul>
          </li>

          <li className="footer__item footer__item--extra">
            <h2 className="footer_h2">Company</h2>
            <ul className="footer__ul footer__ul--extra">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </li>

          <li className="footer__item">
            <h2 className="footer_h2">Information</h2>
            <ul className="footer__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </li>
        </ul>

        <hr />
        <div className="legal">
          <p>Copyright&copy; 2023JuicyMO:MO All rights reserved.</p>
          <div className="legal__links">
            <span>Terms & Conditions</span>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
