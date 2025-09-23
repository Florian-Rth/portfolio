import { Grid, Stack } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Grid container>
        <Grid
          size={6}
          sx={{
            background: "green",
          }}
        >
          <h1>Welcome to my Portfolio</h1>
        </Grid>
        <Grid
          size={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Test lol</p>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WelcomeSection;
