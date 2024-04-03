import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";
import "./globals.scss";

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
