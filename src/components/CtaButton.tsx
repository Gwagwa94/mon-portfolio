import React from 'react';
import Link from 'next/link';

interface CtaButtonProps {
  children: React.ReactNode;
  href: string; // The link destination
  target?: string; // Optional target attribute for the link
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, href, target }) => {
  return (
    <Link href={href} passHref target={target ?? "_self"}>
      <button className="group relative overflow-hidden
      bg-gradient-to-r from-ctaBackground to-auroraGreen
      text-white font-bold
      py-3 px-8 m-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        {/* Green gradient that slides from the left on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-auroraGreen to-ctaBackground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        {/* Button text, placed above the gradient */}
        <span className="relative z-10">{children}</span>
      </button>
    </Link>
  );
};

export default CtaButton;
