import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Zuna Dev",
  description: "23 YO software engineer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.className} min-h-screen`}>
        <nav>
          <Navbar />
        </nav>
        <section>{children}</section>
        <footer></footer>
      </body>
    </html>
  );
};

export default RootLayout;
