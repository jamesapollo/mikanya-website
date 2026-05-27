import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mikanya Logistics — Trusted tasks. Reliable providers. Professionally managed.',
  description: 'Painting. Plumbing. Drivers. Catering. Hair, beauty and more. Submit a request — a Mikanya associate reviews, picks the right person, and stays with you until it\'s done.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
