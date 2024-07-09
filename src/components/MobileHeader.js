import React from 'react';
import './MobileHeader.css';
import HeaderImage from '../background.webp'; // Replace with correct path to your main header image
import LogoImage from '../text.webp'; // Replace with correct path to your logo image
import XImage from '../twitter.webp'; //
import TGImage from '../tg.webp'; //
import DexImage from '../dexscreener.webp'; //

const MobileHeader = () => {
  return (
    <header className="relative flex flex-col items-center justify-center h-screen bg-arabic-beige text-white">
      <div className="absolute top-10 w-full flex flex-col items-center">
        <img
          src={LogoImage}
          alt="Jihadoge Logo"
          className="logo-image mb-4"
        />
        <img
          src={HeaderImage}
          alt="Jihadoge"
          className="header-image"
        />
      </div>
      <div className="fixed bottom-10 w-full flex justify-center space-x-4">
        <button className="button-image bg-cover" style={{ backgroundImage: `url(${TGImage})` }}></button>
        <button className="button-image bg-cover" style={{ backgroundImage: `url(${XImage})` }}></button>
        <button className="button-image bg-cover" style={{ backgroundImage: `url(${DexImage})` }}></button>

	</div>
    </header>
  );
};

export default MobileHeader;
