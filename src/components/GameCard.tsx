/**
 * @file GameCard.tsx
 * @brief A card display used to describe a game.
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

import { FC } from "react";

import Link from "./Link";

import "./GameCard.css";

interface GameCardProps {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  desc: string;
}

/**
 * A card containing information about a game.
 */
const GameCard: FC<GameCardProps> = ({ href, imgSrc, alt, title, desc }) => {
  return (
    <div className="game-card">
      <Link href={href}>
        <img src={imgSrc} alt={alt} />
      </Link>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default GameCard;
