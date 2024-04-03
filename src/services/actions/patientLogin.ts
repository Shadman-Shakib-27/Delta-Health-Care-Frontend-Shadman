"use server";

import { TFormData } from "@/app/login/page";

export const patientLogin = async (data: TFormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const patientInfo = await res.json();
  return patientInfo;
};
