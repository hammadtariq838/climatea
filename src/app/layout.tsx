import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Climatea",
  description: "Daily bite sized news on climate change and sustainability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
