"use client";
import React, { type FC } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Stack,
  Toolbar,
  Link,
  Button,
} from "@mui/material";

const AppBar: FC = () => {
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
            <Button variant="contained">Test</Button>
          </Stack>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
