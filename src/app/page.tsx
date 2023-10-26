import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mx-auto mt-6 max-w-6xl space-y-6'>
      <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
        <div className='flex p-5'>
          <div className='flex-1'>
            <Image
              className='rounded-xl'
              src='/assets/images/illustration-1.png'
              width={554}
              height={430}
              alt='Blog Post Illustration'
            />
          </div>

          <div className='flex flex-1 flex-col justify-between px-9'>
            <header>
              <div className='flex gap-6'>
                <Link
                  className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                  href='/'
                >
                  Techniques
                </Link>
                <Link
                  className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                  href='/'
                >
                  Updates
                </Link>
              </div>

              <div className='mt-4'>
                <h1 className='font-sans text-3xl'>
                  This is a big title and it will look great on two or even
                  three lines. Wooohoo!
                </h1>
                <span className='mt-2 block text-sm text-gray-400'>
                  Published <time>1 day ago</time>
                </span>
              </div>
            </header>

            <div className='mt-2 text-xs text-gray-600'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                deleniti quam cupiditate consequatur amet aut natus omnis. Modi
                neque eaque obcaecati provident beatae! Fugit quod rerum, ut
                dolorem libero omnis.
              </p>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo facere autem, a illum temporibus tenetur.
              </p>
            </div>

            <footer className='mt-4 flex items-center justify-between'>
              <div className='flex items-center justify-between gap-2'>
                <Image
                  src='/assets/images/lary-avatar.svg'
                  width={35}
                  height={35}
                  alt='Lary Avatar'
                />
                <div>
                  <p className='text-xs'>Lary Laracore</p>
                  <p className='text-xs text-gray-400'>
                    {"Does it All'er @Laracasts"}
                  </p>
                </div>
              </div>
              <Link
                className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                href='/'
              >
                Read All About It
              </Link>
            </footer>
          </div>
        </div>
      </article>
      <div className='grid grid-cols-2 gap-2'>
        <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex-1'>
              <Image
                className='rounded-xl'
                src='/assets/images/illustration-1.png'
                width={554}
                height={430}
                alt='Blog Post Illustration'
              />
            </div>

            <div className='flex flex-1 flex-col justify-between'>
              <header>
                <div className='flex gap-4'>
                  <Link
                    className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                    href='/'
                  >
                    Techniques
                  </Link>
                  <Link
                    className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                    href='/'
                  >
                    Updates
                  </Link>
                </div>

                <div className='mt-4'>
                  <h1 className='font-sans text-3xl'>
                    This is a big title and it will look great on two or even
                    three lines. Wooohoo!
                  </h1>
                  <span className='mt-2 block text-sm text-gray-400'>
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>

              <div className='mt-4 text-xs text-gray-600'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti quam cupiditate consequatur amet aut natus omnis.
                  Modi neque eaque obcaecati provident beatae! Fugit quod rerum,
                  ut dolorem libero omnis.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo facere autem, a illum temporibus tenetur.
                </p>
              </div>

              <footer className='mt-4 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2'>
                  <Image
                    src='/assets/images/lary-avatar.svg'
                    width={35}
                    height={35}
                    alt='Lary Avatar'
                  />
                  <div>
                    <p className='text-xs'>Lary Laracore</p>
                    <p className='text-xs text-gray-400'>
                      {"Does it All'er @Laracasts"}
                    </p>
                  </div>
                </div>
                <Link
                  className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                  href='/'
                >
                  Read All About It
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex-1'>
              <Image
                className='rounded-xl'
                src='/assets/images/illustration-2.png'
                width={554}
                height={430}
                alt='Blog Post Illustration'
              />
            </div>

            <div className='flex flex-1 flex-col justify-between'>
              <header>
                <div className='flex gap-4'>
                  <Link
                    className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                    href='/'
                  >
                    Techniques
                  </Link>
                  <Link
                    className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                    href='/'
                  >
                    Updates
                  </Link>
                </div>

                <div className='mt-4'>
                  <h1 className='font-sans text-3xl'>
                    This is a big title and it will look great on two or even
                    three lines. Wooohoo!
                  </h1>
                  <span className='mt-2 block text-sm text-gray-400'>
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>

              <div className='mt-4 text-xs text-gray-600'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti quam cupiditate consequatur amet aut natus omnis.
                  Modi neque eaque obcaecati provident beatae! Fugit quod rerum,
                  ut dolorem libero omnis.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo facere autem, a illum temporibus tenetur.
                </p>
              </div>

              <footer className='mt-4 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2'>
                  <Image
                    src='/assets/images/lary-avatar.svg'
                    width={35}
                    height={35}
                    alt='Lary Avatar'
                  />
                  <div>
                    <p className='text-xs'>Lary Laracore</p>
                    <p className='text-xs text-gray-400'>
                      {"Does it All'er @Laracasts"}
                    </p>
                  </div>
                </div>
                <Link
                  className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                  href='/'
                >
                  Read All About It
                </Link>
              </footer>
            </div>
          </div>
        </article>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex-1'>
              <Image
                className='rounded-xl'
                src='/assets/images/illustration-3.png'
                width={554}
                height={430}
                alt='Blog Post Illustration'
              />
            </div>

            <div className='flex flex-1 flex-col justify-between'>
              <header>
                <div className='flex gap-4'>
                  <Link
                    className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                    href='/'
                  >
                    Techniques
                  </Link>
                  <Link
                    className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                    href='/'
                  >
                    Updates
                  </Link>
                </div>

                <div className='mt-4'>
                  <h1 className='font-sans text-3xl'>
                    This is a big title and it will look great on two or even
                    three lines. Wooohoo!
                  </h1>
                  <span className='mt-2 block text-sm text-gray-400'>
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>

              <div className='mt-4 text-xs text-gray-600'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti quam cupiditate consequatur amet aut natus omnis.
                  Modi neque eaque obcaecati provident beatae! Fugit quod rerum,
                  ut dolorem libero omnis.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo facere autem, a illum temporibus tenetur.
                </p>
              </div>

              <footer className='mt-4 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2'>
                  <Image
                    src='/assets/images/lary-avatar.svg'
                    width={35}
                    height={35}
                    alt='Lary Avatar'
                  />
                  <div>
                    <p className='text-xs'>Lary Laracore</p>
                    <p className='text-xs text-gray-400'>
                      {"Does it All'er @Laracasts"}
                    </p>
                  </div>
                </div>
                <Link
                  className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                  href='/'
                >
                  Read All About It
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex-1'>
              <Image
                className='rounded-xl'
                src='/assets/images/illustration-4.png'
                width={554}
                height={430}
                alt='Blog Post Illustration'
              />
            </div>

            <div className='flex flex-1 flex-col justify-between'>
              <header>
                <div className='flex gap-4'>
                  <Link
                    className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                    href='/'
                  >
                    Techniques
                  </Link>
                  <Link
                    className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                    href='/'
                  >
                    Updates
                  </Link>
                </div>

                <div className='mt-4'>
                  <h1 className='font-sans text-3xl'>
                    This is a big title and it will look great on two or even
                    three lines. Wooohoo!
                  </h1>
                  <span className='mt-2 block text-sm text-gray-400'>
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>

              <div className='mt-4 text-xs text-gray-600'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti quam cupiditate consequatur amet aut natus omnis.
                  Modi neque eaque obcaecati provident beatae! Fugit quod rerum,
                  ut dolorem libero omnis.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo facere autem, a illum temporibus tenetur.
                </p>
              </div>

              <footer className='mt-4 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2'>
                  <Image
                    src='/assets/images/lary-avatar.svg'
                    width={35}
                    height={35}
                    alt='Lary Avatar'
                  />
                  <div>
                    <p className='text-xs'>Lary Laracore</p>
                    <p className='text-xs text-gray-400'>
                      {"Does it All'er @Laracasts"}
                    </p>
                  </div>
                </div>
                <Link
                  className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                  href='/'
                >
                  Read All About It
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article className='border border-transparent border-opacity-0 transition-all ease-in-out hover:cursor-pointer hover:rounded-xl hover:border-black hover:border-opacity-5 hover:bg-gray-100'>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex-1'>
              <Image
                className='rounded-xl'
                src='/assets/images/illustration-5.png'
                width={554}
                height={430}
                alt='Blog Post Illustration'
              />
            </div>

            <div className='flex flex-1 flex-col justify-between'>
              <header>
                <div className='flex gap-4'>
                  <Link
                    className='rounded-full border border-cyan-300 px-5  py-1 text-[10px] font-semibold uppercase text-cyan-300'
                    href='/'
                  >
                    Techniques
                  </Link>
                  <Link
                    className='rounded-full border border-red-300 px-5  py-1 text-[10px] font-semibold uppercase text-red-300'
                    href='/'
                  >
                    Updates
                  </Link>
                </div>

                <div className='mt-4'>
                  <h1 className='font-sans text-3xl'>
                    This is a big title and it will look great on two or even
                    three lines. Wooohoo!
                  </h1>
                  <span className='mt-2 block text-sm text-gray-400'>
                    Published <time>1 day ago</time>
                  </span>
                </div>
              </header>

              <div className='mt-4 text-xs text-gray-600'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti quam cupiditate consequatur amet aut natus omnis.
                  Modi neque eaque obcaecati provident beatae! Fugit quod rerum,
                  ut dolorem libero omnis.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo facere autem, a illum temporibus tenetur.
                </p>
              </div>

              <footer className='mt-4 flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2'>
                  <Image
                    src='/assets/images/lary-avatar.svg'
                    width={35}
                    height={35}
                    alt='Lary Avatar'
                  />
                  <div>
                    <p className='text-xs'>Lary Laracore</p>
                    <p className='text-xs text-gray-400'>
                      {"Does it All'er @Laracasts"}
                    </p>
                  </div>
                </div>
                <Link
                  className='rounded-full bg-gray-200 px-6 py-2 text-xs text-gray-700'
                  href='/'
                >
                  Read All About It
                </Link>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
