import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://denver.dev"),
  title: {
    default: "Denver | 실제로 쓰이는 제품을 만드는 프론트엔드 개발자",
    template: "%s | Denver",
  },
  description:
    "교육, 교회, 연구 환경에서 필요한 도구를 만들고 개선하는 프론트엔드 개발자 Denver의 포트폴리오입니다.",
  keywords: [
    "Denver",
    "Frontend Developer",
    "Product Builder",
    "Next.js",
    "TypeScript",
    "Firebase",
    "Portfolio",
  ],
  authors: [{ name: "Denver" }],
  creator: "Denver",
  openGraph: {
    title: "Denver | 실제로 쓰이는 제품을 만드는 프론트엔드 개발자",
    description:
      "교육, 교회, 연구 환경에서 필요한 도구를 만들고 개선하는 프론트엔드 개발자 Denver의 포트폴리오입니다.",
    url: "https://denver.dev",
    siteName: "Denver Portfolio",
    images: [
      {
        url: "/profile/in-front-of-spiderman.jpeg",
        width: 1080,
        height: 1440,
        alt: "Denver standing in front of a Spider-Man mural",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denver | Product-Minded Frontend Developer",
    description:
      "A frontend developer building real products for education, church operations, and research workflows.",
    images: ["/profile/in-front-of-spiderman.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#050506] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
