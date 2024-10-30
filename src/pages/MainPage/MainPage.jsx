import HeroSection from "./HeroSection";
import ProjectsSectionMainPage from "./ProjectsSectionMainPage/ProjectsSectionMainPage";
import VideoSectionMainPage from './VideoSectionMainPage';
import LocationSectionMainPage from './LocationSectionMainPage';

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSectionMainPage />
      <VideoSectionMainPage />
      <LocationSectionMainPage />
    </>
  );
}
