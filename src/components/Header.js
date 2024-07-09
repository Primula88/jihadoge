import React, { useEffect } from 'react';
import './Header.css';
import HeaderImage from '../background.webp'; // Assuming you have your main header image here
import LogoImage from '../text.webp'; // Assuming you have your logo image here
import BoomImage from '../islam.png'; // Assuming you have your boom image here
import XImage from '../twitter.webp'; //
import TGImage from '../tg.webp'; //
import CAImage from '../copyca.webp'; //
import DexImage from '../dexscreener.webp'; //

const Header = () => {
  useEffect(() => {
    // Trigger animation after a delay (e.g., 100ms) to ensure styles are applied
    const timeout = setTimeout(() => {
      const headerImage = document.querySelector('.header-image');
      if (headerImage) {
        headerImage.classList.add('fadeInUp');
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);  

return (
    <header className="relative flex items-center justify-center h-screen bg-arabic-beige text-white">
      <div className="absolute left-0 p-8" style={{ top: '30%' }}>
        <img
          src={LogoImage}
          alt="Jihadoge Logo"
          className="logo-image opacity-0 fadeInLeft"
        />
      </div>
      <div className="absolute right-0 p-8" style={{ top: '30%' }}>
        <img
          src={BoomImage}
          alt="Boom Image"
          className="boom-image opacity-0 fadeInRight"
        />
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src={HeaderImage}
          alt="Jihadoge"
          className="header-image opacity-0"
        />
      </div>
      <div className="fixed bottom-5 w-full flex justify-center space-x-4">
        <a href="https://t.me/jihadogesol" target="_blank" rel="noopener noreferrer">
	<button className="button-image bg-cover" style={{ backgroundImage: `url(${TGImage})` }}></button></a>
        <a href="https://x.com/jihadogesol" target="_blank" rel="noopener noreferrer">
	<button className="button-image bg-cover" style={{ backgroundImage: `url(${XImage})` }}></button></a>
        <button className="button-image bg-cover" style={{ backgroundImage: `url(${DexImage})` }}></button>
	<button
  onClick={() => navigator.clipboard.writeText('twat')}
  className="button-image bg-cover"
  style={{ backgroundImage: `url(${CAImage})` }}
>
  {/* Button content goes here */}
</button>
</div>
    </header>
  );
};

export default Header;
