/**
 * @file Link.tsx
 * @brief Link component that contains an href attribute
 *        and can contain ReactNodes as children.
 *
 * @author @Zentiph
 */

import React from "react";

import "./Link.css";

/**
 * @param href     Link to resource
 * @param children HTML children
 *
 * @returns        Simplified anchor that can contain children
 */
const Link = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={"nav-link " + className}
      target={isExternal ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Link;
