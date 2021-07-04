import React from "react";
import { Link } from "wouter";
import { PATHS } from "../Router/paths";

const profileId = 123;

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href={PATHS.home}>Home</Link>
      </li>
      <li>
        <Link href={PATHS.profile.replace(':id', profileId)}>Ver mi perfil</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
