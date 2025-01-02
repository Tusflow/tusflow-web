import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const calSans = localFont({
  display: 'swap',
  src: './CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});
