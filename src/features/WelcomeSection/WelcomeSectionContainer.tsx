import { Stack, Box } from "@mui/material";
import { motion } from "motion/react";
import { containerVariants } from "./utils/motion-variants";
import { FC, PropsWithChildren } from "react";

const WelcomeSectionContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ height: "100%" }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {children}
      </Stack>
    </Box>
  );
};

export default WelcomeSectionContainer;
