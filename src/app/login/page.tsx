"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { patientLogin } from "@/services/actions/patientLogin";
import { useRouter } from "next/navigation";

export type TFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    console.log(data);
    try {
      const res = await patientLogin(data);
      console.log(res);
      router.push("/");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login Delta Health Care
              </Typography>
            </Box>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    {...register("email")}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    {...register("password")}
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">
                  <Box
                    component="span"
                    color="primary.main"
                    sx={{ marginLeft: "5px" }}
                  >
                    Please Register First
                  </Box>
                </Link>
              </Typography>

              <Box
                component="span"
                color="primary.main"
                sx={{ marginLeft: "165px" }}
              >
                Forgot Password?
              </Box>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
