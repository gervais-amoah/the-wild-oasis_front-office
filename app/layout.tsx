import Logo from '@/components/Logo';
import Navigations from '@/components/Navigations';
import { ClickProvider } from '@/context/counter';

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
        <ClickProvider>
          <header>
            <Logo />
            <Navigations />
          </header>
          <main>{children}</main>
        </ClickProvider>
      </body>
    </html>
  );
}
