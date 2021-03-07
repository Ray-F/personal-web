import React from "react";
import Link from "next/link";


function NavLink({ href, currentPage, children, className }: { href: string, currentPage: string, children: React.ReactNode, className?: string }) {
  if (currentPage === href) {
    return (
      <Link href={href}>
        <a><b className={className}>{children}</b></a>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <a><span className={className}>{children}</span></a>
      </Link>
    );
  }

}

export default NavLink;