export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-dark mb-6 border-b-2 border-primary-dark pb-2">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <strong>DealVana</strong>, your privacy is important to us. This
          Privacy Policy outlines the types of information we collect and how we
          use it when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Personal Information (e.g., name, email) submitted via contact
            forms.
          </li>
          <li>
            Non-personal information such as browser type, device, and usage
            data.
          </li>
          <li>
            Affiliate tracking info such as product clicks and redirect data for
            analytics and commission purposes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To respond to your inquiries or contact form submissions.</li>
          <li>To analyze website traffic and user behavior.</li>
          <li>To track affiliate performance via third-party links.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Affiliate Links</h2>
        <p className="mb-4">
          Our website contains affiliate links to third-party stores. If you
          click on a product and make a purchase on the original seller’s site,
          we may earn a small commission. These external sites have their own
          privacy policies, which we recommend reviewing.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
        <p className="mb-4">
          We may use cookies to enhance your browsing experience. Cookies help
          us understand user activity and improve our website. You can disable
          cookies via your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Consent</h2>
        <p className="mb-4">
          By using our website, you consent to our Privacy Policy and agree to
          its terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, &nbsp;
          <a href="/contact-us" className="text-primary-dark underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
