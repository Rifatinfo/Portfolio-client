
const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
    return (
        <div>
            <p>Navbar</p>
            <main className="min-h-dvh">{children}</main>
            <p>Footer</p>
        </div>
    );
};

export default PublicLayout;