"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';
import { LucideDollarSign, LucideUser, LucideNewspaper } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          leftButtonText="Menu"
          rightButtonText="Contact"
          onLeftButtonClick={() => console.log('Menu clicked')}
          onRightButtonClick={() => console.log('Contact clicked')}
          className="text-white"
          containerClassName="flex justify-between items-center"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Xeven" subtitle="Your gateway to the future of SaaS" />
      </div>
      <div id="about" data-section="about">
        <CtaAbout title="About Us" descriptions={["Discover innovative solutions to common problems.", "Join us on our mission to redefine the SaaS landscape."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Understand the product", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics Overview" description="Understanding our token distribution and usage." kpiItems={[{ value: "60%", description: "Market Liquidity", icon: LucideDollarSign }, { value: "25%", description: "Team Allocation", icon: LucideUser }, { value: "15%", description: "Reserve Funds", icon: LucideNewspaper }]} />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ items={[{ title: "What is Xeven?", content: "Xeven is a comprehensive SaaS platform that provides tools for managing tasks effectively." }, { title: "How do I sign up?", content: "Simply click on the 'Get started' button on the homepage to create an account." }, { title: "What payment methods do you accept?", content: "We accept all major credit cards and PayPal." }, { title: "Can I cancel my subscription?", content: "Yes, you can cancel your subscription at any time through the account settings." }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Xeven Logo" logoText="Xeven" items={[{ label: "Privacy Policy", onClick: () => console.log('Privacy policy clicked') }, { label: "Terms of Service", onClick: () => console.log('Terms of service clicked') }, { label: "Contact Us", onClick: () => console.log('Contact clicked') }]} className="text-white" containerClassName="p-5" gradientClassName="bg-gradient-to-br from-purple-600 to-blue-500" />
      </div>
    </SiteThemeProvider>
  );
}