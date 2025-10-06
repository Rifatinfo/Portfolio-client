import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </ThemeProvider>
    </div>
  );
};

export default PublicLayout;