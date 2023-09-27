import Link from 'next/link';

function Footer() {
  return (
    <div className='mt-4 sticky bg-black/75 z-50 py-4 backdrop-blur-md rounded-t-full'>
      <p className="text-center">
        Built & Designed by
        <Link
          href="https://giovcasle.vercel.app/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-400"
        >
          {' '}
          Giovanni Castañeda
        </Link>
      </p>
    </div>
  );
}

export default Footer;
