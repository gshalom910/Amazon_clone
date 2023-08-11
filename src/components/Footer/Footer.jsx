import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import icon_16 from "./media/16.png";
import "./footer.css";

function Footer() {
  const handleScrollToHeader = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer-wrapper">
      <div className="footer-back-top">
        <Link onClick={handleScrollToHeader} className="footer-back-top-link">
          Back to top
        </Link>
      </div>
      <div className="container">
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-6 col-md-3">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">About Amazon</Link>
              </li>
              <li>
                <Link to="#">Investor Relations</Link>
              </li>
              <li>
                <Link to="#">Amazon Devices </Link>
              </li>
              <li>
                <Link to="#">Amazon Science</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-6 col-md-3">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <Link to="#">Sell products on Amazon</Link>
              </li>
              <li>
                <Link to="#">Sell on Amazon Business</Link>
              </li>
              <li>
                <Link to="#">Sell apps on Amazon</Link>
              </li>
              <li>
                <Link to="#">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="#">Advertise Your Products</Link>
              </li>
              <li>
                <Link to="#">Self-Publish with Us</Link>
              </li>
              <li>
                <Link to="#">Host an Amazon Hub</Link>
              </li>
              <li>
                <Link to="#">›See More Make Money with Us</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-6 col-md-3">
            <h3>Amazon Payment Products</h3>

            <ul>
              <li>
                <Link to="#">Amazon Business Card</Link>
              </li>
              <li>
                <Link to="#">Shop with Points </Link>
              </li>
              <li>
                <Link to="#">Reload Your Balance </Link>
              </li>
              <li>
                <Link to="#">Amazon Currency Converter</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-6 col-md-3">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <Link to="#">Amazon and COVID-19</Link>
              </li>
              <li>
                <Link to="#">Your Account</Link>
              </li>
              <li>
                <Link to="/orders" onClick={handleScrollToHeader}>
                  Your Orders{" "}
                </Link>
              </li>
              <li>
                <Link to="#">Shipping Rates & Policies</Link>
              </li>
              <li>
                <Link to="#">Returns & Replacements</Link>
              </li>
              <li>
                <Link to="#">Manage Your Content and Devices</Link>
              </li>
              <li>
                <Link to="#">Amazon Assistant </Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-links-terms">
          <span>
            <Link to="/" onClick={handleScrollToHeader}>
              <img
                className="footer__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </Link>
          </span>
          <span>
            <div className="footer-spans">
              <div className="footer-container">
                <div className="footer-globe">
                  <LanguageIcon />
                </div>
                <div className="px-2">English</div>
                <div className="footer-upDown-arrow">
                  <UnfoldMoreIcon />
                </div>
              </div>
              <div className="footer-container mx-2">
                <div className="footer-globe">$</div>
                <div className="px-2">USD - U.S. Dollar</div>
              </div>
              <div className="footer-container mx-2">
                <div className="footer-globe">
                  <img src={icon_16} />
                </div>
                <div className="px-2">United States</div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
