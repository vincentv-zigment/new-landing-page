import navigation from "@/config/navigation.json";

// Components
import Header3 from "@/components/elements/header/header3";
import Footer1 from "@/components/elements/footer/footer1";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";
import Header from "@/components/elements/zigment/header";
import Footer from "@/components/elements/zigment/footer";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="tropiline-bold root-layout" theme-setting="style-3">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>{children}</div>
          <Footer footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
