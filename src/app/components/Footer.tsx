import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-16 cursor-pointer rounded-xl border border-black border-opacity-5 bg-gray-100 px-10 py-16 text-center'>
      <Image
        src='/assets/images/lary-newsletter-icon.svg'
        alt=''
        width={145}
        height={145}
        className='mx-auto'
      />
      <h5 className='-mt-9  text-2xl'>Stay in touch with the latest posts</h5>
      <p className='text-sm text-gray-600'>
        Promise to keep the inbox clean. No bugs.
      </p>

      <div className='mt-10'>
        <div className='relative mx-auto inline-block rounded-full lg:bg-gray-200'>
          <form action='#' method='post' className='text-sm lg:flex'>
            <div className='lg:flex lg:items-center lg:px-6 lg:py-3'>
              <label htmlFor='email' className='hidden lg:inline'>
                <Image
                  src='/assets/images/mailbox-icon.svg'
                  alt='mailbox letter'
                  width={20}
                  height={20}
                />
              </label>
              <input
                id='email'
                className='rounded-full px-5 py-2 focus:outline-none lg:ml-4 lg:rounded-none lg:bg-transparent lg:p-0'
                type='text'
                placeholder='Your email address'
              />
            </div>
            <button
              className='mt-4 rounded-full bg-blue-500 px-8 py-3 text-xs font-semibold uppercase text-white hover:bg-blue-600 lg:ml-3 lg:mt-0'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
