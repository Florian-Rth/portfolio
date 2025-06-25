"use client"; // Required for useContext and event handlers

import * as React from "react";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material";

export default function Home() {
  const { mode, setMode } = useColorScheme();

  return (
    <div>
      Test
      <Button
        variant="outlined"
        onClick={() =>
          mode === "dark" ? setMode("light") : setMode("dark")
        }
        sx={{ m: 1 }}
      >
        Toggle Dark Mode
      </Button>
    </div>
  );
}
