import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-[140px] py-[80px]">
      <div>
        <Link href="/">
          <Image src="logo.svg" alt="logo" width={180} height={25} />
        </Link>
      </div>
      <div className="flex gap-14 items-center">
        <Link href="/">
          <Image src="search.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="/" className="text-[1rem] text-[#FDFDFD]">
          Home
        </Link>
        <Link href="/trending" className="text-[1rem] text-[#FDFDFD]">
          Trending
        </Link>
        <Link href="/notifications">
          <Image src="notification.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link href="/profile">
          <Image src="profile.svg" alt="profile" width={20} height={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
