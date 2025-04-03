import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationHeader from "@/components/header";
import InfoFooter from "@/components/footer";

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stian Closs Walmann",
  description: "My web based cv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-gray-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationHeader />
          <main className="pt-20">{children}</main>
          <InfoFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
