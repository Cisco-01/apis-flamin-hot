import Link from 'next/link';

function Footer() {
  return (
    <p className="text-center py-2">
      Built & Designed by
      <Link
        href="https://cgcl-portfolio.web.app"
        rel="noreferrer"
        target="_blank"
        className="hover:text-indigo-400"
      >
        {' '}
        Giovanni Castañeda
      </Link>
    </p>
  );
}

export default Footer;
