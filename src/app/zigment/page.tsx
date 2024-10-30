import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import CRMHomeAbout from "@/components/elements/about/crm-home-about";
import Brand1 from "@/components/elements/brand/brand1";
import CRMCounter from "@/components/elements/counter/crm-counter";
import CRMFeature from "@/components/elements/feature/crm-feature";
import CRMHero from "@/components/elements/hero/crm-hero";
import Newsletter3 from "@/components/elements/newsletter/newsletter3";
import CRMPricing from "@/components/elements/pricing/crm-pricing";
import CRMService from "@/components/elements/service/crm-service";
import CRMTestimonial from "@/components/elements/testimonial/crm-testimonial";
import ZigmentHero from "@/components/elements/zigment/zigment-hero";
import Brand from "@/app/zigment/brand";
import Counter from "@/components/elements/zigment/zigment-counter";
import Service from "@/components/elements/zigment/service";
import CustomerServiceCounter from "@/components/elements/counter/customer-service-counter";
import RealBuisness from "@/components/elements/zigment/real-buisness";
import RealBusiness from "@/components/elements/zigment/real-buisness";
import LeadConversion from "@/components/elements/zigment/lead-conversion";
import ZigmentRetention from "@/components/elements/zigment/zigment-retention";
import Testimonial from "@/components/elements/zigment/testimonial";
import MeetZig from "@/components/elements/zigment/meet-zig";
import EnterpriseGradeAI from "@/components/elements/zigment/enterprise-grade-AI";
import WorkflowsSection from "@/components/elements/zigment/workflows-section";
import Integration from "@/components/elements/zigment/integration";
import GoLive from "@/components/elements/zigment/go-live";
import FAQ from "@/components/elements/zigment/FAQ";

export default function Page() {
  const testimonial = getMainPage("/testimonials/crm-testimonial.mdx");

  return (
    <main>
      <SeoData />
      <ZigmentHero/>
      <Brand />
      <Counter/>
      <Service/>
      <RealBusiness/>
      <LeadConversion/>
      <ZigmentRetention/>
      <Testimonial/>
      <MeetZig/>
      <EnterpriseGradeAI/>
      <WorkflowsSection/>
      <Integration/>
      <GoLive/>
      <FAQ/>
      <Newsletter3 />
    </main>
  );
}
