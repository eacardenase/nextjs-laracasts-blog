import Image from 'next/image';
import Select from './Select';

const categoryOptions = [
  {
    value: 'category',
    label: 'Category',
  },
  {
    value: 'personal',
    label: 'Personal',
  },
  {
    value: 'business',
    label: 'Business',
  },
];

const otherFilters = [
  {
    value: 'other',
    label: 'Other Filters',
  },
  {
    value: 'foo',
    label: 'Foo',
  },
  {
    value: 'bar',
    label: 'Bar',
  },
];

const Header = () => {
  return (
    <header className='mx-auto mt-20 max-w-4xl text-center'>
      <div className='max-w- xl mx-auto'>
        <h1 className='text-4xl text-black'>
          Latest <span className='text-blue-400'>Laravel from Scratch</span>{' '}
          News
        </h1>

        <h2 className='mt-2 inline-flex'>
          By Lary Laracore
          <Image
            className='ml-1'
            src='/assets/images/lary-head.svg'
            alt="Lary's head"
            width={30}
            height={30}
          />
        </h2>

        <p className='mt-14 text-sm'>
          {
            "Another year. Another update. We're refreshing the popular Laravel series with new content. I'm going to keep you guys up to speed with what's going on."
          }
        </p>

        <div className='mt-8 flex justify-center space-x-4'>
          <Select options={categoryOptions} />
          <Select options={otherFilters} />
          <span className='rounded-xl bg-gray-100 px-3 py-2'>
            <form action='#'>
              <div className='relative inline-flex items-center'>
                <Image
                  className='pointer-events-none absolute'
                  src='/assets/icons/search.svg'
                  alt='Select Arrow'
                  width={15}
                  height={15}
                />
                <input
                  className='ml-6 bg-transparent placeholder:text-gray-700'
                  type='text'
                  name='search'
                  placeholder='Find Something?'
                />
              </div>
            </form>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
