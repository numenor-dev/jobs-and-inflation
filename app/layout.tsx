import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Jobs and Inflation Data",
  description: "A data visualization of jobs and inflation over the last 15 years.",
  openGraph: {
    type: "website",
    url: "https://jobsandinflation.vercel.app/",
    title: "Jobs and Inflation Data",
    description: "A data visualization of jobs and inflation over the last 15 years.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="font-sans min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}