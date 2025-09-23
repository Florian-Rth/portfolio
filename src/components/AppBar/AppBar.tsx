"use client";
import React, { type FC, useState, useEffect } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Stack,
  Toolbar,
  Link,
  IconButton,
  Typography,
  useColorScheme,
  Chip,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const AppBar: FC = () => {
  const { mode, setMode } = useColorScheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <MuiAppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? mode === "dark"
              ? "rgba(18, 18, 18, 0.95)"
              : "rgba(255, 255, 255, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${
                mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)"
              }`
            : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          py: scrolled ? 0.5 : 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#home"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background:
                      mode === "dark"
                        ? "linear-gradient(45deg, #667eea 30%, #764ba2 90%)"
                        : "linear-gradient(45deg, #4facfe 30%, #00f2fe 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                  }}
                >
                  FR
                </Typography>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{
                display: { xs: "none", md: "flex" },
                flex: 1,
                justifyContent: "center",
              }}
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={item.href}
                    color="inherit"
                    underline="none"
                    sx={{
                      position: "relative",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: "-4px",
                        left: "50%",
                        backgroundColor: "primary.main",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </Stack>

            {/* Right Side Actions */}
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* Status Chip */}
              <Chip
                label="🟢 Available"
                size="small"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(76, 175, 80, 0.1)"
                      : "rgba(76, 175, 80, 0.1)",
                  color: mode === "dark" ? "#81c784" : "#388e3c",
                  border: "1px solid",
                  borderColor:
                    mode === "dark"
                      ? "rgba(76, 175, 80, 0.3)"
                      : "rgba(76, 175, 80, 0.3)",
                  fontWeight: 500,
                }}
              />

              {/* Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={() =>
                    setMode(mode === "dark" ? "light" : "dark")
                  }
                  sx={{
                    color: "text.primary",
                    backgroundColor:
                      mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      backgroundColor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  {mode === "dark" ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>

              {/* Mobile Menu Button */}
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "text.primary",
                }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <Box
                sx={{
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(18, 18, 18, 0.98)"
                      : "rgba(255, 255, 255, 0.98)",
                  backdropFilter: "blur(20px)",
                  borderTop: `1px solid ${
                    mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                  px: 2,
                  py: 3,
                }}
              >
                <Stack spacing={2}>
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        color="inherit"
                        underline="none"
                        onClick={() => setMobileMenuOpen(false)}
                        sx={{
                          display: "block",
                          py: 1.5,
                          px: 2,
                          borderRadius: 2,
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor:
                              mode === "dark"
                                ? "rgba(255, 255, 255, 0.05)"
                                : "rgba(0, 0, 0, 0.05)",
                            color: "primary.main",
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Status */}
                  <Box sx={{ px: 2, pt: 2 }}>
                    <Chip
                      label="🟢 Available for Projects"
                      size="small"
                      sx={{
                        backgroundColor:
                          mode === "dark"
                            ? "rgba(76, 175, 80, 0.1)"
                            : "rgba(76, 175, 80, 0.1)",
                        color:
                          mode === "dark" ? "#81c784" : "#388e3c",
                        border: "1px solid",
                        borderColor:
                          mode === "dark"
                            ? "rgba(76, 175, 80, 0.3)"
                            : "rgba(76, 175, 80, 0.3)",
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </MuiAppBar>
    </motion.div>
  );
};

export default AppBar;
