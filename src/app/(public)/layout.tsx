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
        <main className="min-h-dvh">{children}</main>
        <p>Footer</p>
      </ThemeProvider>
    </div>
  );
};

export default PublicLayout;