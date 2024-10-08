import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Informaticawetenschappen",
  description: "Cursussen informaticawetenschappen voor de 3de graad secundair onderwijs. Gecreëerd door Matthias Schuyten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://unpkg.com/@antonz/codapi@0.19.7/dist/snippet.css" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://unpkg.com/@antonz/codapi@0.19.7/dist/snippet.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
