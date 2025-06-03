import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import PageLayout from "./components/PageLayout";
import Products from "./pages/products";
import ProductBrief from "./pages/productbrief";
import AffiliateDisclosure from "./pages/affiliate-disclosure";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contactus";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndConditions from "./pages/terms-conditions";
import Categories from "./pages/categories";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductBrief />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
