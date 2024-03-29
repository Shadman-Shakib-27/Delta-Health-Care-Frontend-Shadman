import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import facebookIcon from "../../../assets/landing_page/facebook.png";
import InstagramIcon from "../../../assets/landing_page/instagram.png";
import XIcon from "../../../assets/landing_page/twitter.png";
import linkedInIcon from "../../../assets/landing_page/linkedin.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagonistics
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>

        <Stack direction="row" gap={4} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="FB" />
          <Image src={InstagramIcon} width={30} height={30} alt="FB" />
          <Image src={XIcon} width={30} height={30} alt="FB" />
          <Image src={linkedInIcon} width={30} height={30} alt="FB" />
        </Stack>

        <div className="border-b-[1px] border-dashed border-white"></div>

        <Stack
          direction="row"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="white">
            &copy;2024 Delta Health Care By Shadman. All Rights Reserved.
          </Typography>

          <Typography
            color="white"
            variant="h5"
            component={Link}
            href="/"
            fontWeight={600}
          >
            <Box component="span" color="primary.main">
              D
            </Box>
            ELTA HEALTH CARE
          </Typography>

          <Typography color="white" component="p">
            Privacy Policy! Terms & Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
