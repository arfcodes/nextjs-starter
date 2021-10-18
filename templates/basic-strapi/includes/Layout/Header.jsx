/**
 * includes/Layout/Header.js
 */
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <Link href="/">
      <a>My Site</a>
    </Link>
    <div className="header__nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </header>
);

export default Header;
