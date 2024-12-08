import Link from 'next/link';

function Footer() {
  return (
    <div className='sticky mb-4'>
      <p className="text-center text-xs text-zinc-500">
        Built & Designed by
        <Link
          href="https://giovcasle.vercel.app/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-zinc-400"
        >
          {' '}
          Giovanni Castañeda
        </Link>
      </p>
    </div>
  );
}

export default Footer;
