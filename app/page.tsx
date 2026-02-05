import FeatureSection from "./components/FeatureSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileHighlight from "./components/ProfileHighlight";
import ReportSection from "./components/ReportSection";
import SiteFooter from "./components/SiteFooter";
import WaitlistSection from "./components/WaitlistSection";

export default function Home() {
  return (
    <div className="bg-noise">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <Header />
        <ProfileHighlight />
        <Hero />
        <FeatureSection />
        <ReportSection />
        <WaitlistSection />
        <SiteFooter />
      </main>
    </div>
  );
}
