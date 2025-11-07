import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "FullstackAgent - Your AI Full-Stack Engineer",
  description: "An AI partner that truly writes, configures, and deploys full-stack applications. Not an assistant, but an engineer.",
  keywords: "AI, Full-Stack, Developer, Engineer, Claude, Next.js, PostgreSQL, Kubernetes",
  openGraph: {
    title: "FullstackAgent - Your AI Full-Stack Engineer",
    description: "An AI partner that truly writes, configures, and deploys full-stack applications.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
