/**
 * @file  Link.tsx
 * @brief Link component that contains an href attribute
 *        and can contain ReactNodes as children.
 * @author @Zentiph
 *
 * @copyright Copyright (C) 2025  CodeQuilt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import { FC } from "react";

import "./Link.css";

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A simplified anchor.
 * This component will automatically open external links in a new tab.
 *
 * @param href      - Link to resource
 * @param className - Classes to apply to the link
 * @param children  - HTML children
 */
const Link: FC<LinkProps> = ({ href, className, children }) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={"link " + className}
      target={isExternal ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Link;
