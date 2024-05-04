"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { patientLogin } from "@/services/actions/patientLogin";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import DeltaForm from "@/components/Forms/DeltaForm";
import DeltaInput from "@/components/Forms/DeltaInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

export const validationSchema = z.object({
  email: z.string().email("Please Enter a Valid Email Address!"),
  password: z.string().min(6, "Must Be At Least 6 Characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const res = await patientLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res.message);
        // console.log(res);
      }
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
          
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <DeltaForm
            onSubmit={handleLogin}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <DeltaInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <DeltaInput
                    name="password"
                    label="Password"
                    type="password"
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
          </DeltaForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
