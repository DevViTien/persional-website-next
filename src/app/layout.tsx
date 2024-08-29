import React from 'react'
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { APP_SLOGAN, APP_TITLE, AUTHOR_FACEBOOK, AUTHOR_NAME } from '@/constants/config';
import '@/styles/global.scss'

const inter = Open_Sans({
	subsets: ["latin", "vietnamese", "latin-ext"],
	display: "auto",
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_SLOGAN,
  viewport: { width: "device-width", initialScale: 1 },
  themeColor:  [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  authors: [{
    name: AUTHOR_NAME, url: AUTHOR_FACEBOOK
  }],
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
    { rel: "apple-touch-icon", sizes:"180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    title: APP_TITLE,
    description: APP_SLOGAN,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
      </body>
    </html>
  );
}
