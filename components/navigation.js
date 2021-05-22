import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Ana sayfa</a>
      </Link> <br />
      <Link href="/about">
        <a>Hakkımızda</a>
      </Link> <br />
      <Link href="/contact">
        <a>Contact</a>
      </Link> <br />
      <Link href="/footer">
        <a>Footer</a>
      </Link>
    </nav>
  );
}

export default Navigation;
