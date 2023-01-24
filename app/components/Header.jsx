import Link from 'next/link';
import { TitleFont } from '../font';

const links = [
  {
    label: 'APIs Flamin Hot',
    route: '/',
  },
];

export default function Header() {
  return (
    <nav
      className={`flex py-4 mt-8 justify-center ${TitleFont.className}`}
    >
      {links.map(({ label, route }) => (
        <h1
          className="text-3xl cursor-pointer hover:scale-105 font-medium text-[#f0ffff]"
          key={route}
        >
          <Link href={route}>{label}</Link>
        </h1>
      ))}
    </nav>
  );
}
