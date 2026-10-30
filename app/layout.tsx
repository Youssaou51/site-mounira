import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL('https://site-mounira.vercel.app'), // ⬅️ Change cette URL après déploiement
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    images: [siteContent.metadata.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    images: [siteContent.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
