export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-dark mb-6 border-b-2 border-primary-dark pb-2">
          About Us
        </h1>

        <p className="text-base leading-7 mb-4">
          Welcome to
          <span className="font-semibold text-primary-dark">DealVana</span> your
          trusted destination to discover top-quality products from major
          eCommerce platforms. We work as an affiliate partner, showcasing
          handpicked items so you can make smart buying decisions.
        </p>

        <p className="text-base leading-7 mb-4">
          Whether you're looking for the latest tech gadgets, trending fashion,
          or everyday essentials, our goal is to bring everything to one place.
          Each product listed on our site includes a direct link to the official
          seller, ensuring safe and secure purchases through platforms like
          Amazon, eBay, and others.
        </p>

        <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Curated collections of trending and high-rated products</li>
          <li>
            Affiliate links for safe purchases from trusted eCommerce brands
          </li>
          <li>
            No extra cost to you — we earn a small commission when you buy
          </li>
          <li>Fast, mobile-friendly, and user-focused browsing experience</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-base leading-7 mb-4">
          Our mission is to simplify online shopping by connecting users with
          genuine, high-value products — all while saving time and ensuring
          trust.
        </p>

        <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">
          Affiliate Disclosure
        </h2>
        <p className="text-base leading-7 mb-4">
          Some links on our website are affiliate links. This means we may earn
          a small commission if you click through and make a purchase. This
          comes at no extra cost to you and helps us keep improving our
          platform.
        </p>

        <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">
          Contact Us
        </h2>
        <p className="text-base leading-7">
          Got questions or suggestions? visit our
          <a href="/contact-us" className="text-primary-dark underline">
            Contact Us
          </a>
          page.
        </p>
      </div>
    </div>
  );
}
