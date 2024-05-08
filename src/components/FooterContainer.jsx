import React from 'react';

export const Icons = [
{ name: " Ⓜ ", link: "https://web.facebook.com/" },
{ name: " 🅾 ", link: "https://twitter.com/" },
{ name: " 🐈 ", link: "https://github.com " },
{ name: " 🛅 ", link: "https://www.linkedin.com/" },
{ name: " ℹ ", link: "https://www.instagram.com/" },
];

function SocialIcons({ Icons }) {
return (
<div className="text-teal-500">
{Icons.map((icon) => (
<span
key={icon.name}
className="p-2 cursor-pointer inline-flex items-center
rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
duration-300 "
>
<ion-icon name={icon.name}></ion-icon>
</span>
))}
</div>
);
};

function FooterContainer() {

return (
<footer className="bg-gray-900 text-white">
<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
<h1
className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
md:w-2/5">
<span className="text-teal-400">Free</span> Keep in Touch Today </h1>
<div>
<input
type="text"
placeholder="Enter Your ph.no"
className="text-gray-800
sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
/>
<button
className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
rounded-md text-white md:w-auto w-full"
>
Request Code
</button>
</div>
</div>

<div
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
text-center pt-2 text-gray-400 text-sm pb-8"
>
<span>© 2020 Appy. All rights reserved.</span>
<span>Terms · Privacy Policy</span>
<SocialIcons Icons={Icons} />
</div>
</footer>
)
}

export default FooterContainer;
