import React from "react";
import { IconButton } from "@mui/material";
import { FavoriteIcon, ShareIcon } from "@mui/icons-material";
import simCard from "./Card";
import CurrentUser from "./currentUser";
import Button from "./Button";

function User() {
  return (
    <>
      <simCard>
        <CurrentUser />
        <Button />
      </simCard>
    </>
  );
}

export default User;
