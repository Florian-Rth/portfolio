"use client";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Chip,
  useColorScheme,
  Button,
  IconButton,
} from "@mui/material";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Download,
  GitHub,
  LinkedIn,
  Mail,
} from "@mui/icons-material";

const WelcomeSection = () => {
  const { mode } = useColorScheme() || { mode: "light" };
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for cursor tracking
  const springX = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 700 });

  // Transform values for parallax effects
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
    "Python",
    "Docker",
    "AWS",
    "PostgreSQL",
  ];

  const socialLinks = [
    { icon: GitHub, href: "#", label: "GitHub" },
    { icon: LinkedIn, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
        delay: 0.3,
      },
    },
  };

  const floatingVariants: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ height: "100%" }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
        py={4}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: { xs: "auto", lg: "70vh" },
              px: { xs: 2, sm: 4, lg: 6 },
            }}
          >
            <motion.div variants={containerVariants}>
              {/* Greeting */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  >
                    👋
                  </motion.span>
                  Hallo, ich bin
                </Typography>
              </motion.div>

              {/* Name with simple animation */}
              <motion.div variants={titleVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3.5rem",
                      lg: "4.5rem",
                    },
                    fontWeight: 800,
                    mb: 2,
                    background:
                      mode === "dark"
                        ? "linear-gradient(45deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
                        : "linear-gradient(45deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.1,
                  }}
                >
                  Florian Rätsch
                </Typography>
              </motion.div>

              {/* Role with typewriter effect */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{ height: "80px", overflow: "hidden", mb: 3 }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: {
                          xs: "1.5rem",
                          sm: "2rem",
                          lg: "2.5rem",
                        },
                        fontWeight: 600,
                        color: "text.primary",
                        borderRight: "3px solid",
                        borderColor: "primary.main",
                        pr: 1,
                      }}
                    >
                      Full-Stack Developer
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    maxWidth: "500px",
                    mb: 4,
                  }}
                >
                  Ich erschaffe digitale Erlebnisse mit modernen
                  Technologien und leidenschaftlicher Aufmerksamkeit
                  für Details. Lass uns gemeinsam deine Ideen zum
                  Leben erwecken.
                </Typography>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mb: 4,
                  }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.8 + index * 0.1,
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          backgroundColor:
                            mode === "dark" ? "grey.800" : "grey.100",
                          color: "text.primary",
                          fontWeight: 600,
                          px: 1,
                          cursor: "pointer",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 3,
                    alignItems: { xs: "stretch", sm: "center" },
                    mb: 3,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Download />}
                      sx={{
                        background:
                          mode === "dark"
                            ? "linear-gradient(45deg, #667eea 30%, #764ba2 90%)"
                            : "linear-gradient(45deg, #4facfe 30%, #00f2fe 90%)",
                        px: 4,
                        py: 1.5,
                        borderRadius: "12px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      Lebenslauf downloaden
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: "12px 24px",
                      background:
                        mode === "dark"
                          ? "rgba(102, 126, 234, 0.1)"
                          : "rgba(79, 172, 254, 0.1)",
                      borderRadius: "12px",
                      border: "1px solid",
                      borderColor:
                        mode === "dark"
                          ? "rgba(102, 126, 234, 0.3)"
                          : "rgba(79, 172, 254, 0.3)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.75rem" }}
                    >
                      Status
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="primary.main"
                    >
                      🟢 Verfügbar für Projekte
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mr: 1 }}
                  >
                    Kontakt:
                  </Typography>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          color: "text.secondary",
                          "&:hover": {
                            color: "primary.main",
                            backgroundColor:
                              mode === "dark"
                                ? "grey.800"
                                : "grey.100",
                          },
                        }}
                      >
                        <social.icon fontSize="small" />
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Side - 3D Model Placeholder */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: { xs: "400px", lg: "70vh" },
              position: "relative",
            }}
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  animate={{
                    scale: isHovering ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  style={{
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                      mode === "dark"
                        ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%)"
                        : "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 50%, rgba(67, 233, 123, 0.1) 100%)",
                    border: "2px solid",
                    borderColor:
                      mode === "dark"
                        ? "rgba(102, 126, 234, 0.3)"
                        : "rgba(79, 172, 254, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {/* Animated border gradient */}
                  <motion.div
                    animate={{
                      background: [
                        mode === "dark"
                          ? "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea)"
                          : "linear-gradient(45deg, #4facfe, #00f2fe, #43e97b, #4facfe)",
                        mode === "dark"
                          ? "linear-gradient(90deg, #764ba2, #f093fb, #667eea, #764ba2)"
                          : "linear-gradient(90deg, #00f2fe, #43e97b, #4facfe, #00f2fe)",
                        mode === "dark"
                          ? "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea)"
                          : "linear-gradient(45deg, #4facfe, #00f2fe, #43e97b, #4facfe)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      borderRadius: "50%",
                      zIndex: -1,
                      opacity: 0.6,
                    }}
                  />

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "3rem", sm: "4rem" },
                      opacity: 0.3,
                      color: "text.secondary",
                    }}
                  >
                    🎭
                  </Typography>
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </motion.div>
  );
};

export default WelcomeSection;
