import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LumièRe Aesthetic Studio | Med Spa Scottsdale, AZ',
  description:
    'Boutique med spa in Scottsdale, AZ. Botox, dermal fillers, laser resurfacing, HydraFacial, and more. Led by Renata Voss, board-certified nurse practitioner with 14+ years experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${jost.variable}`}>
      <body className="bg-brand-background text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
