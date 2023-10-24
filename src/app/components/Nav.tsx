import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            alt='Laracasts Logo'
            width={165}
            height={16}
          />
        </Link>
      </div>

      <div>
        <Link href='/' className='text-xs font-bold uppercase'>
          HOME PAGE
        </Link>
        <Link
          href='/'
          className='ml-3 rounded-full bg-blue-500 px-[23px] py-3 text-xs font-semibold uppercase text-white'
        >
          SUBSCRIBE FOR UPDATES
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
