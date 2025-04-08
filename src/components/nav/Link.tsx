import React from "react";

import "./Link.css";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="nav-link">
      {children}
    </a>
  );
}

export default Link;
