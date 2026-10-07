import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ONLINE SHOPPING */}

        <div className="footer-section">

          <h3>ONLINE SHOPPING</h3>

          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/beauty">Beauty</a>
          <a href="/cart">Gift Cards</a>

        </div>


        {/* CUSTOMER POLICIES */}

        <div className="footer-section">

          <h3>CUSTOMER POLICIES</h3>

          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>

        </div>


        {/* USEFUL LINKS */}

        <div className="footer-section">

          <h3>USEFUL LINKS</h3>

          <a href="/">Home</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/cart">My Bag</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>

        </div>


        {/* EXPERIENCE */}

        <div className="footer-section">

          <h3>EXPERIENCE MYNTRA APP</h3>

          <p>
            Shop the latest fashion trends
            anytime, anywhere.
          </p>

          <div className="app-buttons">

            <button>
              📱 Google Play
            </button>

            <button>
              📱 App Store
            </button>

          </div>

        </div>


        {/* SOCIAL */}

        <div className="footer-section">

          <h3>KEEP IN TOUCH</h3>

          <div className="social-icons">

            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>

          </div>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Myntra Clone. All rights reserved.
        </p>

        <p>
          Made with ❤️ using React
        </p>

      </div>

    </footer>
  );
}

export default Footer;