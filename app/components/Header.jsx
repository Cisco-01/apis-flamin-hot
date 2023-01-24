import Link from 'next/link';
import { HeaderFont } from '../font';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
];

export default function Header() {
  return (
    <nav
      className={`flex space-x-6 py-3 text-sm mt-9
      md:text-base whitespace-nowrap justify-center px-6 text-white ${HeaderFont.className}`}
    >
      {links.map(({ label, route }) => (
        <p className="link" key={route}>
          <Link href={route}>{label}</Link>
        </p>
      ))}
      {/*<p className="link hidden sm:inline">More</p>*/}
    </nav>
  );
}
