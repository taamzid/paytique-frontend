import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 lg:flex lg:items-center lg:justify-between lg: gap-96">
        {/* Left Column with Logo and Address */}
        <div className="lg:w-1/4 flex flex-col items-center justify-center mb-8 lg:mb-0">
          <img src="/path/to/logo.png" alt="Logo" className="w-16 h-16 mb-4" />
          <p>123 Main Street</p>
          <p>City, Country</p>
        </div>

        {/* Right Column with 4 Columns */}
        <div className="lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <p className="font-bold">Legal</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Licenses</p>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-bold">Company</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Licenses</p>
          </div>

          {/* Column 3 */}
          <div>
            <p className="font-bold">Product</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Licenses</p>
          </div>

          {/* Column 4 */}
          <div>
            <p className="font-bold">Support</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Licenses</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
