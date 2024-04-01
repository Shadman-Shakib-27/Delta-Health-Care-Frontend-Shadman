import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HowItWorkImg from "@/assets/how-it-works-img.png";
import SearchDoctor from "@/assets/icons/search-icon.png";
import DoctorProfile from "@/assets/icons/doctor-icon.png";
import Appoinment from "@/assets/icons/appointment-icon.png";
import CharityIcon from "@/assets/icons/charity-icon.png";
import assets from "@/assets";

const HowItWorks = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          textAlign: "start",
        }}
      >
        <Typography variant="h6" color="primary.main" fontWeight={300}>
          How It Works
        </Typography>
        <Typography variant="h4" fontWeight={600} sx={{ my: 2 }}>
          4 Easy Steps To Get Your Solution
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18} mt={1}>
          Across to experts physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18} mt={1}>
          and top quality sergery facilities right here.
        </Typography>
      </Box>

      <Grid container spacing={2} my={5}>
        <Grid item md={6}>
          <Box>
            <Image
              src={HowItWorkImg}
              width={600}
              height={700}
              alt="How It Work"
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Stack direction="row" gap={2}>
            <Box
              sx={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "start",
              }}
            >
              <Box>
                <Image src={SearchDoctor} width={50} alt="Search" />
              </Box>
              <Box sx={{ margin: "10px 0px" }}>
                <Typography variant="h6" fontWeight={400}>
                  Search Doctor
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Dolor sit amet consectetur <br />
                  sceleresqu in eu mauris volutpat <br />
                  ornare.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "start",
              }}
            >
              <Box>
                <Image src={DoctorProfile} width={50} alt="DoctorProfile" />
              </Box>
              <Box sx={{ margin: "10px 0px" }}>
                <Typography variant="h6" fontWeight={400}>
                  Check Doctor Profile
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Dolor sit amet consectetur <br />
                  sceleresqu in eu mauris volutpat <br />
                  ornare.
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction="row" gap={2} my={2}>
            <Box
              sx={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "start",
              }}
            >
              <Box>
                <Image src={Appoinment} width={50} alt="Appoinment" />
              </Box>
              <Box sx={{ margin: "10px 0px" }}>
                <Typography variant="h6" fontWeight={400}>
                  Schedule Appointment
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Dolor sit amet consectetur <br />
                  sceleresqu in eu mauris volutpat <br />
                  ornare.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "start",
              }}
            >
              <Box>
                <Image src={CharityIcon} width={50} alt="CharityIcon" />
              </Box>
              <Box sx={{ margin: "10px 0px" }}>
                <Typography variant="h6" fontWeight={400}>
                  Get Your Solution
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Dolor sit amet consectetur <br />
                  sceleresqu in eu mauris volutpat <br />
                  ornare.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        gap={2}
        spacing={16}
        sx={{
          backgroundColor: "primary.main",
          padding: "50px",
          borderRadius: "15px",
          margin: "40px 0px",
        }}
      >
        <Box>
          <Typography variant="h3" color="white" fontWeight={200}>
            180+
          </Typography>
          <Typography variant="h6" color="white" fontWeight={200}>
            Expert Doctors
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" color="white" fontWeight={200}>
            26+
          </Typography>
          <Typography variant="h6" color="white" fontWeight={200}>
            Expert Services
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" color="white" fontWeight={200}>
            10K+
          </Typography>
          <Typography variant="h6" color="white" fontWeight={200}>
            Happy Patients
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" color="white" fontWeight={200}>
            150+
          </Typography>
          <Typography variant="h6" color="white" fontWeight={200}>
            Best Winning Awards
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default HowItWorks;
