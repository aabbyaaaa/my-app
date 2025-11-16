import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dgs.com.tw"),
  title: "DLAB智慧水質檢測系列｜德記儀器 — 實驗室到現場一次搞定",
  description:
    "DLAB 智慧水質檢測儀，桌上型、掌上型、筆型完整產品線；支援 pH/mV/ORP、導電度/鹽度/電阻率、溶氧等多參數。下載規格比較，快速選型，從實驗室到現場一次搞定。",
  alternates: {
    canonical: "/hotcategory/DLAB-water-analysis/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://dgs.com.tw/hotcategory/DLAB-water-analysis/",
    title: "DLAB智慧水質檢測系列｜德記儀器 — 實驗室到現場一次搞定",
    description:
      "DLAB 智慧水質檢測儀，桌上型、掌上型、筆型完整產品線；支援 pH/mV/ORP、導電度/鹽度/電阻率、溶氧等多參數。下載規格比較，快速選型，從實驗室到現場一次搞定。",
    images: [
      {
        url: "https://dgs.com.tw/pic/00/01/40/02-5b9dc4259919f916.jpg",
        width: 1200,
        height: 630,
        alt: "DLAB 智慧水質檢測系列",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLAB智慧水質檢測系列｜德記儀器 — 實驗室到現場一次搞定",
    description:
      "DLAB 智慧水質檢測儀，桌上型、掌上型、筆型完整產品線；支援 pH/mV/ORP、導電度/鹽度/電阻率、溶氧等多參數。下載規格比較，快速選型，從實驗室到現場一次搞定。",
    images: ["https://dgs.com.tw/pic/00/01/40/02-5b9dc4259919f916.jpg"],
  },
  icons: {
    icon: [{ url: "https://dgs.com.tw/img/favicon.ico?v=20221116" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
        >{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KH2VPC8');
        `}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH2VPC8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
