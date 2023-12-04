import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const titleFont = localFont({
  src: './fonts/integralCE/integralcf-regular.otf',
  display: 'swap',
  variable: '--font-title'
});

const paragraphFont = Lexend({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-paragraph'
});

export const metadata = {
  title: 'Dynamic Landing Page',
  description: 'Dynamic Landing Page with Animations'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${paragraphFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
