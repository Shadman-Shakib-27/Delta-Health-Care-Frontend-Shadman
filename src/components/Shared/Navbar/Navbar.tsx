import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

// Stack is a container component for arranging elements vertically or horizontally.
// The Box component is a generic, theme-aware container with access to CSS utilities from MUI System.
// Use typography to present your design and content as clearly and efficiently as possible.

const Navbar = () => {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          <Box component="span" color="primary.main">
            D
          </Box>
          ELTA HEALTH CARE
        </Typography>

        <Stack direction="row" gap={4}>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography component={Link} href="/login">
            Medicine
          </Typography>
          <Typography component={Link} href="/login">
            Diagonistics
          </Typography>
          <Typography component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
