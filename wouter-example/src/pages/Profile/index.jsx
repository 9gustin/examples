import React from "react";
import { useRoute } from "wouter";

import Nav from "../../components/Nav";
import { PATHS } from "../../components/Router/paths";

const Profile = () => {
  const [, params] = useRoute(PATHS.profile);

  return (
    <>
      <Nav />
      Profile: {params.id}
    </>
  );
};

export default Profile;
