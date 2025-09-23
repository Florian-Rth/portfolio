"use client";
import React, { type FC } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Stack,
  Toolbar,
  Link,
  Button,
  useColorScheme,
} from "@mui/material";

const AppBar: FC = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <MuiAppBar>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          flex={1}
        >
          <Box>
            <p>LOGO</p>
          </Box>

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ ml: 4 }}
          >
            <Link
              href="/Test"
              color="inherit"
              underline="none"
              sx={{ textTransform: "uppercase" }}
            >
              Home
            </Link>
            <Link
              href="/Test2"
              color="inherit"
              underline="none"
              sx={{ textTransform: "uppercase" }}
            >
              About
            </Link>
            <Link
              href="/Test2"
              color="inherit"
              underline="none"
              sx={{ textTransform: "uppercase" }}
            >
              Projects
            </Link>
          </Stack>

          <Stack justifyContent="center">
            <Button
              variant="outlined"
              onClick={() =>
                mode === "dark" ? setMode("light") : setMode("dark")
              }
              sx={{ m: 1 }}
            >
              Toggle Dark Mode
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
