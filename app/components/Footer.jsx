import Link from 'next/link';

function Footer() {
  return (
    <div className="text-center w-full bottom-0 py-2 h-12">
      <p className="">
        Built & Designed by
        <Link
          href="https://cgcl-portfolio.web.app"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500"
        >
          {' '}
          Giovanni Castañeda
        </Link>
      </p>
    </div>
  );
}

export default Footer;
