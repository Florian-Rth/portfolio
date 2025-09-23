"use client"; // Required for useContext and event handlers

import * as React from "react";
import { Box } from "@mui/material";
import WelcomeSection from "@/features/WelcomeSection";
import WelcomeSectionV1 from "@/features/WelcomeSectionV1";

export default function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <WelcomeSection />
      <WelcomeSectionV1 />
    </Box>
  );
}
