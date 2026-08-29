import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-mkemp.com"),
  title: "Ann-Marie Kemp",
  description: "Ann-Marie Kemp Portfolio Site",
  openGraph: {
    title: "Ann-Marie Kemp",
    description: "Ann-Marie Kemp Portfolio Site",
    url: "https://a-mkemp.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
