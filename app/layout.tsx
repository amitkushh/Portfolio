import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Kushwaha",
  description:
    "I'm a Full-stack developer who enjoys building and exploring new projects. With a passion for clean code and creative problem-solving.",
  authors: [
    { name: "Amit Kushwaha", url: "https://www.amitkush.com/" },
    { name: "Amit Kush", url: "https://www.amitkush.com/" },
    { name: "Amit Kushh", url: "https://www.amitkush.com/" },
    { name: "AmitKushh", url: "https://www.amitkush.com/" },
    { name: "Amit Kushh", url: "https://x.com/amitkushh" },
    { name: "AmitKushh", url: "https://x.com/amitkushh" },
    { name: "AmitKushh", url: "https://www.linkedin.com/in/amitkushh/" },
    { name: "Amit Kushwaha", url: "https://www.linkedin.com/in/amitkushh/" },
    { name: "Amit Kushwaha", url: "https://x.com/amitkushh" },
    { name: "Amit Kushh", url: "https://github.com/amitkushh" },
    { name: "Amit Kushwaha", url: "https://github.com/amitkushh" },
    { name: "Amit Kushwaha", url: "https://peerlist.io/amitkushh" },
    { name: "Amit Kushh", url: "https://peerlist.io/amitkushh" },
  ],

  keywords: [
    "amit kushh",
    "amit kushwaha",
    "amit kushwaha portfolio",
    "amit kushwaha developer",
    "amit kushwaha full stack developer",
    "amit kushwaha frontend developer",
    "amit kushwaha mern stack dev",
    "Amit Kushh",
    "AmitKushh",
    "Amit Kushwaha",
    "Amit Kushwaha portfolio",
    "Amit Kushwaha developer",
    "Amit Kushwaha full stack developer",
    "Amit Kushwaha frontend developer",
    "Amit Kushwaha mern stack dev",
    "Amit Kushh portfolio",
    "Amit Kushh developer",
    "Amit Kushh full stack developer",
    "Amit Kushh frontend developer",
    "Amit Kushh mern stack dev",
    "AmitKushh portfolio",
    "AmitKushh developer",
    "AmitKushh full stack developer",
    "AmitKushh frontend developer",
    "AmitKushh mern stack dev",
    "amit kushh portfolio",
    "amit kushh developer",
    "amit kushh full stack developer",
    "amit kushh frontend developer",
    "amit kushh mern stack dev",
    "amitkushh portfolio",
    "amitkushh developer",
    "amitkushh full stack developer",
    "amitkushh frontend developer",
    "amitkushh mern stack dev",
    "Amit Kushh portfolio",
    "Amit Kushh developer",
    "Amit Kushh full stack developer",
    "Amit Kushh frontend developer",
    "Amit Kushh mern stack dev",
    "Amit Kushh portfolio",
    "Amit Kushh developer",
    "Amit Kushh full stack developer",
    "Amit Kushh frontend developer",
    "Amit Kushh mern stack dev",
    "AmitKushh portfolio",
    "AmitKushh developer",
    "AmitKushh full stack developer",
    "AmitKushh frontend developer",
    "AmitKushh mern stack dev",
    "amitkush portfolio",
    "amitKush developer",
    "amitKush full stack developer",
    "amitKush frontend developer",
    "amitKush mern stack dev",
  ],
  creator: "Amit Kushwaha",
  publisher: "amit kushh",
  metadataBase: new URL("https://www.amitkush.com/"),
  openGraph: {
    title: "Amit Kushwaha",
    description:
      "I'm a Full-stack developer who enjoys building and exploring new projects. With a passion for clean code and creative problem-solving.",
    url: "https://www.amitkush.com/",
    siteName: "Amit Kushwaha",
    images: [
      {
        url: "/og-image.png",
        height: 720,
        width: 1280,
        alt: "Amit Kushwaha",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kushwaha",
    description:
      "I'm a Full-stack developer who enjoys building and exploring new projects. With a passion for clean code and creative problem-solving.",
    creator: "@amitkushh",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
