import Logo from '@/components/Logo';
import Navigations from '@/components/Navigations';
import { ClickProvider } from '@/context/counter';
import '@/styles/globals.css';

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
