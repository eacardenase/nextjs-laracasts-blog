import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Laracasts Logo"
            width={165}
            height={16}
          />
        </Link>
      </div>

      <div>
        <Link href="/" className="text-xs font-bold">
          Home Page
        </Link>
        <Link
          href="/"
          className="text-xs bg-blue-500 text-white rounded-full px-3 py-1.5 ml-3"
        >
          SUBSCRIBE FOR UPDATES
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
