import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="profilePicture" src="media/IMG_0149.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          harum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Movies</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
<p className="text-lg">Follow us on social media:</p>
<div className="flex space-x-4 mt-4">
<a href="https://web.facebook.com/" className="text-white hover:text-gray-300">
<FaFacebook size={24} />
</a>
<a href="https://twitter.com/" className="text-white hover:text-gray-300">
<FaTwitter size={24} />
</a>
<a href="https://www.instagram.com/" className="text-white hover:text-gray-300">
<FaInstagram size={24} />
</a>
<a href="https://www.linkedin.com/" className="text-white hover:text-gray-300">
<FaLinkedin size={24} />
</a>
<a href="https://www.linkedin.com/" className="text-white hover:text-gray-300">
<FaGithub size={24} />
</a>
</div>
</div>
<div>
<h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
<form className="flex items-center">
<input
type="email"
placeholder="Enter your email"
className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
/>
<button
type="submit"
className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none"
>
Subscribe
</button>
</form>
</div>
</div>
</footer>
      </div>
    </div>
  );
}
export default Sidebar;
