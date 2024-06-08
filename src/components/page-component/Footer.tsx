import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-4">
      <div className="container mx-auto text-center flex justify-between items-center">
        <p>&copy; 2024 Coderscups. All rights reserved.</p>
        <p>
          Designed with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by b.biruly
        </p>
      </div>
    </footer>
  );
};

export default Footer;
