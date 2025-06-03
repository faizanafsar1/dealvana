import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className=" mt-[60px]">{children}</div>
      <Footer />
    </>
  );
}
