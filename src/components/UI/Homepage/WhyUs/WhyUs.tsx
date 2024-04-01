import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import ChooseUsImage from "@/assets/choose-us.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>

          <Grid container spacing={2} my={5}>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "rgba(245,245,245,1)",
                  padding: "15px",
                  textAlign: "start",
                  borderRadius: "10px 10px 100px 10px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={servicesData[0].imageSrc}
                    width={50}
                    height={50}
                    alt="Awards"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component="h6" fontWeight={600}>
                    {servicesData[0].title}
                  </Typography>
                  <Typography
                    // variant="p"
                    color="primary.body1"
                    // fontWeight={300}
                  >
                    {servicesData[0].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "rgba(245,245,245,1)",
                  padding: "15px",
                  textAlign: "start",
                  borderRadius: "10px 100px 10px 10px",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={servicesData[1].imageSrc}
                    width={50}
                    height={50}
                    alt="Awards"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component="h6" fontWeight={600}>
                    {servicesData[1].title}
                  </Typography>
                  <Typography
                    // variant="p"
                    color="primary.body1"
                    // fontWeight={300}
                  >
                    {servicesData[1].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "rgba(245,245,245,1)",
                  padding: "15px",
                  textAlign: "start",
                  borderRadius: "10px 10px 100px 10px",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={servicesData[2].imageSrc}
                    width={50}
                    height={50}
                    alt="Awards"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component="h6" fontWeight={600}>
                    {servicesData[2].title}
                  </Typography>
                  <Typography
                    // variant="p"
                    color="primary.body1"
                    // fontWeight={300}
                  >
                    {servicesData[2].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "rgba(245,245,245,1)",
                  padding: "15px",
                  textAlign: "start",
                  borderRadius: "10px 100px 10px 10px",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={servicesData[3].imageSrc}
                    width={50}
                    height={50}
                    alt="Awards"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component="h6" fontWeight={600}>
                    {servicesData[3].title}
                  </Typography>
                  <Typography
                    // variant="p"
                    color="primary.body1"
                    // fontWeight={300}
                  >
                    {servicesData[3].description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ display: "flex" }}>
              <Box sx={{ margin: "0 auto", justifyContent: "center" }}>
                <Image src={ChooseUsImage} width={400} alt="Choose Us Image" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyUs;