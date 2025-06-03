import Icon from "./Icon";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 w-full bg-gray-950 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid gap-10 px-6 md:grid-cols-3">
        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-transparent bg-clip-text font-bold">
            DealVana
          </h2>
          <p className="text-white text-sm leading-6">
            Discover trending deals and top-rated products from leading
            eCommerce stores. We earn a commission for qualifying purchases at
            no extra cost to you.
          </p>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-primary-light text-lg font-semibold border-b-2 border-primary-dark pb-2">
            Explore
          </h3>
          <div className="flex flex-col gap-2 *:text-white *:text-sm *:hover:text-primary-light">
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/categories">Categories</Link>
          </div>
        </div>

        {/* Legal + Social Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-primary-light text-lg font-semibold border-b-2 border-primary-dark pb-2">
            Legal & Social
          </h3>
          <div className="flex flex-col gap-2 *:text-white *:text-sm *:hover:text-primary-light">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>

          <div className="flex gap-4 mt-4">
            <IconBox iconName={faXTwitter} />
            <IconBox iconName={faFacebook} />
            <IconBox iconName={faEnvelope} />
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-primary-dark mt-10 pt-4 text-center text-white text-sm">
        &copy; 2025 DealVana. All rights reserved.
      </div>
    </footer>
  );
}

function IconBox({ iconName }) {
  return (
    <div className="bg-white size-7 hover:bg-primary-dark transition-all justify-center flex  rounded-full">
      <Icon
        icon={iconName}
        className="text-black hover:text-white transition-all place-self-center"
        size="md"
      />
    </div>
  );
}
