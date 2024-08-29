import React from 'react'
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import config from '@/config.json';
import '@/styles/global.scss'

const inter = Open_Sans({
	subsets: ["latin", "vietnamese", "latin-ext"],
	display: "auto",
});

export const metadata: Metadata = {
  title: config.title,
  description: config.slogan,
  viewport: { width: "device-width", initialScale: 1 },
  themeColor:  [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  authors: [{
    name: config.author.name, url: config.author.socialNetwork.facebook
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
    title: config.title,
    description: config.slogan,
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
