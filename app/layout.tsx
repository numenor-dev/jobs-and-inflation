import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en" className="antialiased">
      <body
        className="font-sans min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
