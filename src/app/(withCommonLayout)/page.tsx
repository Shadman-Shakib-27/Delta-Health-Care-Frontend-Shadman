import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/Homepage/HowItWorks/HowItWorks";
import Specialists from "@/components/UI/Homepage/Specialists/Specialists";
import TopRatedDoctors from "@/components/UI/Homepage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialists />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
    </>
  );
};

export default HomePage;
