import Link from "next/link";
import { TitleFont } from "../font";

const links = [
  {
    label: "APIs Flamin Hot",
    route: "/",
  },
];

export default function Header() {
  return (
    <nav className={`text-center justify-center mx-auto flex w-full ${TitleFont.className}`}>
      {links.map(({ label, route }) => (
        <h1
          className="text-3xl cursor-pointer hover:scale-105 font-medium text-[#f0ffff] z-50 top-32 sticky"
          key={route}
        >
          <Link href={route}>{label}</Link>
        </h1>
      ))}
    </nav>
  );
}
