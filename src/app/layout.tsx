import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arena Holdings Content MVNO · Proposal",
  description:
    "A content-led MVNO leveraging Arena Holdings' media, music, broadcasting, and events portfolio — unlike anything in Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
