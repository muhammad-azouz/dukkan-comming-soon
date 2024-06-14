import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

// const ibmPlex = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic", "latin"],
//   display: "swap",
//   weight: "400",
// });

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "تطبيق دكان",
  description:
    "قم بتحسين مبيعاتك ومعالجة المدفوعات في عملك باستخدام تطبيق دوكان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
