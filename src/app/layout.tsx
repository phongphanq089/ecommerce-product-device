import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@/components/layout/Layout";

const nunitor = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Home page | Ecommerce - x",
  description: "High-quality tech gadgets and accessories",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitor.className} suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
