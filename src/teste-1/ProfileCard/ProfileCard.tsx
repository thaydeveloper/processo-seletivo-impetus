import { Box, Typography, Button } from "@mui/material";
import fotoPeril from "../../assets/perfil-teste.jpeg";

import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>
      <Typography>Passe o Mouse No Card</Typography>
      <Box
        sx={{
          height: 400,
          overflow: "hidden",
          cursor: "pointer",
          transition: "height 0.5s ease-in-out",
          "&:hover": { height: 650 },
        }}
        className="rounded-lg bg-blue-400 shadow p-6  max-w-sm"
      >
        <img src={fotoPeril} className="rounded-full w-90 h-80 mx-auto" />
        <Box className="mb-5">
          <Typography className="text-2xl font-semibold text-gray-800">
            Thayrone Souza
          </Typography>
          <Typography className="text-gray-600">Frontend Developer</Typography>
        </Box>
        <Box className="mb-5 mt-10">
          <Typography className="text-2xl font-semibold text-gray-800">
            Frontend Skills
          </Typography>

          <Typography className="text-gray-600">
            JavaScript | React | Git | HTML | CSS | Type Script | Next.js |
            React Native | Angular |SCSS | Tailwind CSS | Material UI | Styled
            Components
          </Typography>
        </Box>
        <Link
          to={"https://www.linkedin.com/in/thayrone-souza/"}
          className="text-2xl font-semibold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Linkedin
        </Link>
      </Box>
    </>
  );
};

export default ProfileCard;
