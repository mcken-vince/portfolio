import Link from "next/link";

export const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white">
        {label}
      </a>
    </Link>
  );
};
