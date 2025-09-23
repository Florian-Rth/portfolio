"use client";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Chip,
  useColorScheme,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";

// Animationen definieren
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const typeWriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const WelcomeSection = () => {
  const { mode } = useColorScheme() || { mode: "light" };
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
  ];

  return (
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
          {/* Haupt-Begrüßung */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                opacity: 0,
                animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
                color: "text.secondary",
                fontWeight: 500,
                mb: 2,
              }}
            >
              👋 Hallo, ich bin
            </Typography>

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
                opacity: 0,
                animation: `${fadeInUp} 0.8s ease-out 0.4s forwards`,
                background:
                  mode === "dark"
                    ? "linear-gradient(45deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
                    : "linear-gradient(45deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                "&": {
                  animation: `${fadeInUp} 0.8s ease-out 0.4s forwards, ${gradientShift} 8s ease-in-out infinite`,
                },
              }}
            >
              Florian Rätsch
            </Typography>

            {/* Typewriter Effekt für Rolle */}
            <Box sx={{ height: "60px", overflow: "hidden", mb: 3 }}>
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
                  opacity: showTypewriter ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  borderRight: showTypewriter ? "3px solid" : "none",
                  borderColor: "primary.main",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "inline-block",
                  width: showTypewriter ? "auto" : 0,
                  animation: showTypewriter
                    ? `${typeWriter} 2s steps(20) forwards, ${blink} 1s step-end infinite 2s`
                    : "none",
                  "&::after": {
                    content: '"|"',
                    animation: `${blink} 1s step-end infinite`,
                  },
                }}
              >
                Full-Stack Developer
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                opacity: 0,
                animation: `${fadeInUp} 0.8s ease-out 1.2s forwards`,
                color: "text.secondary",
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: "500px",
                mb: 4,
              }}
            >
              Ich erschaffe digitale Erlebnisse mit modernen
              Technologien und leidenschaftlicher Aufmerksamkeit für
              Details. Lass uns gemeinsam deine Ideen zum Leben
              erwecken.
            </Typography>

            {/* Skills Chips */}
            <Box
              sx={{
                opacity: 0,
                animation: `${fadeInUp} 0.8s ease-out 1.6s forwards`,
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mb: 4,
              }}
            >
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    backgroundColor:
                      mode === "dark" ? "grey.800" : "grey.100",
                    color: "text.primary",
                    fontWeight: 600,
                    px: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Box>

            {/* Call-to-Action Bereich */}
            <Box
              sx={{
                opacity: 0,
                animation: `${fadeInUp} 0.8s ease-out 2s forwards`,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                alignItems: { xs: "stretch", sm: "center" },
              }}
            >
              <Box
                sx={{
                  px: 3,
                  py: 1.5,
                  background:
                    mode === "dark"
                      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                      : "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor:
                    mode === "dark"
                      ? "rgba(102, 126, 234, 0.3)"
                      : "rgba(79, 172, 254, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      mode === "dark"
                        ? "0 8px 32px rgba(102, 126, 234, 0.2)"
                        : "0 8px 32px rgba(79, 172, 254, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.75rem" }}
                >
                  Verfügbar für
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color="text.primary"
                >
                  Neue Projekte
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                📍 Basiert in Deutschland
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: { xs: "300px", lg: "70vh" },
            position: "relative",
          }}
        >
          {/* Platzhalter für 3D Modell */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              animation: `${fadeInUp} 0.8s ease-out 1s forwards`,
            }}
          >
            <Box
              sx={{
                width: { xs: 250, sm: 350, lg: 400 },
                height: { xs: 250, sm: 350, lg: 400 },
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
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  borderRadius: "50%",
                  background:
                    mode === "dark"
                      ? "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea)"
                      : "linear-gradient(45deg, #4facfe, #00f2fe, #43e97b, #4facfe)",
                  backgroundSize: "200% 200%",
                  animation: `${gradientShift} 8s ease-in-out infinite`,
                  zIndex: -1,
                  opacity: 0.6,
                },
              }}
            >
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WelcomeSection;
