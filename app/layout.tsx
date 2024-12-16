import Logo from '@/components/Logo';
import Navigations from '@/components/Navigations';
import { ClickProvider } from '@/context/counter';
import '@/styles/globals.css';

export const metadata = {
  title: {
    default: 'Welcome | The Wild Oasis',
    template: '%s | The Wild Oasis',
  },
  description:
    'Luxury cabin hotel, located in the heart of the African continent.',
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
