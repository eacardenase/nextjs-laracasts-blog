import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mx-auto mt-4 max-w-4xl space-y-6 pt-10 lg:mt-6'>
      <article className='gap-x-10 lg:grid lg:grid-cols-12'>
        <div className='col-span-4 text-center'>
          <Image
            className='rounded-xl'
            src='/assets/images/illustration-1.png'
            alt='post image'
            width={293}
            height={227}
          />

          <p className='mt-4 block text-xs text-gray-400'>
            Published <time>1 day ago</time>
          </p>

          <div className='mt-4 flex items-center justify-center gap-2 text-sm'>
            <Image
              src='/assets/images/lary-avatar.svg'
              width={35}
              height={35}
              alt='Lary Avatar'
            />
            <div className='text-left'>
              <p className='text-xs'>Lary Laracore</p>
              <p className='text-xs text-gray-700'>{'Mascot at @Laracasts'}</p>
            </div>
          </div>
        </div>

        <div className='col-span-8'>
          <div className='-mt-10  mb-6 flex items-center justify-between'>
            <div>
              <Link
                href='/'
                className='-ml-2 mt-3 flex items-center justify-center text-lg transition-colors duration-300 hover:text-blue-500'
              >
                <Image
                  className='pointer-events-none mr-2 rotate-90 fill-current'
                  src='/assets/icons/chevron-down.svg'
                  alt='Select Arrow'
                  width={15}
                  height={15}
                />
                Back to Posts
              </Link>
            </div>
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
          </div>

          <h1 className='mb-10 text-4xl font-bold'>
            This is a big title and it should look great on two or even three
            lines. Wooohoo!
          </h1>
          <div className='space-y-4 text-lg'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>

            <h2 className='py-5 text-lg font-bold'>Sed quia consequuntur</h2>

            <p>
              Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>

            <p>
              {`Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?"`}
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
          <div>
            <Link
              href='/'
              className='-ml-2 mt-3 flex items-center justify-start text-lg transition-colors duration-300 hover:text-blue-500'
            >
              <Image
                className='pointer-events-none mr-2 rotate-90 fill-current'
                src='/assets/icons/chevron-down.svg'
                alt='Select Arrow'
                width={15}
                height={15}
              />
              Back to Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
