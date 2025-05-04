import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection  from "@/sections/ExperienceSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";



export const meta = {
  description:
    "I’m a full-stack developer based in [Your City, Country]. I’m passionate about writing clean, efficient code and building web applications that solve real-world problems with creativity and purpose.",
  author: "Chirag Sharma",
  type: "website",
  siteName: "Chirag Sharma",
  imageAlt: "Chirag Sharma portfolio website",
};

const Home = ({}) => {
  return (
    <>
      <AppHead
        title="Portfolio - My work, skills, and projects — all in one place"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Chirag.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};



export default Home;
