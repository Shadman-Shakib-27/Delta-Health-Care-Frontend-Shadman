import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "../../../assets/index";

// SX is a Object Where We Can Use Raw CSS In MUI.
const HeroSection = () => {
  return (
    <Container
      sx={{ display: "flex", my: 16, justifyContent: "space-between" }}
    >
      <Box sx={{ flex: "1", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "900px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="Grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>

        <Typography
          component="p"
          fontWeight={600}
          sx={{ width: "85%", textAlign: "justify", my: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa
          beatae hic, necessitatibus omnis vitae corporis neque voluptates
          suscipit sunt perspiciatis, ducimus, minus ratione nulla cumque
          assumenda dolorum optio natus.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appoinment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      {/* Right */}
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="doctor3"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
