import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const GridItemContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        height: "100%",
        px: { xs: 2, sm: 4, lg: 6 },
      }}
    >
      {children}
    </Stack>
  );
};

export default GridItemContainer;
