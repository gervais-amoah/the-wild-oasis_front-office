import Logo from '@/components/Logo';
import Navigations from '@/components/Navigations';

export const metadata = {
  title: 'The Wild Oasis',
  description: 'Welcome to Paradise !',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigations />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
