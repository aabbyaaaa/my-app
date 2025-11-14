import { Header } from "@/components/header-2";
import { WavyBackground } from "../components/ui/shadcn-io/wavy-background";
import { Feature108Advanced } from "@/components/shadcnblocks-com-feature108-advanced";
import { Tab1Content } from "@/components/tab-contents/tab1/tab-1";
import { Tab2Content } from "@/components/tab-contents/tab2/tab-2";
import { Tab3Content } from "@/components/tab-contents/tab3/tab-3";
import { Component as IconTabs3D } from "@/components/3d-icon-tabs-1";
import { Zap, Layout, Pointer } from "lucide-react";
import RotatingText from "@/components/ui/rotating-text";
import { ScrollToTop } from "@/components/scroll-to-top";
import PromoButton from "@/components/promo-button";
import DownloadButton from "@/components/tab-contents/tab1/download-button";
import Footer from "@/components/footer";
import Faq12 from "@/components/faq-12";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section with WavyBackground - Full Width */}
      <WavyBackground
        containerClassName="w-full"
        className="w-full"
        colors={["#E1F6FA", "#B7E8F5", "#7ED6E6", "#47B9D7"]}
        backgroundFill="white"
        blur={10}
        waveOpacity={0.5}
        speed="slow"
      >
        <div className="max-w-[1200px] mx-auto py-20 px-4 text-center">
          {/* DLAB LOGO - 最上方 */}
          <div className="mb-12 flex justify-center">
            <img
              src="/dlab_logo.png"
              alt="DLAB Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* H1 大標：智慧水質檢測系列　實驗室到現場一次搞定 */}
          <h1 className="font-bold text-gray-900 mb-10 text-[2.1rem] leading-[1.3] lg:text-5xl lg:leading-[1]">
            智慧水質檢測系列
            <span className="hidden sm:inline">　</span>
            <br className="sm:hidden" />
            實驗室到現場一次搞定
          </h1>

          {/* RotatingText 區塊 */}
          {/* Mobile (<640px): 單行 + clamp 字級 */}
          <div className="sm:hidden inline-flex items-center justify-center whitespace-nowrap text-[clamp(1rem,5vw,1.125rem)] font-semibold text-gray-700">
            <span>一機掌握</span>
            <RotatingText
              texts={['快速', '準確', '全面']}
              mainClassName="inline-block px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
            />
            <span>，專業數據即時呈現</span>
          </div>

          {/* Tablet/Desktop (>=640px): 維持單行與原字級 */}
          <div className="hidden sm:inline-flex items-center whitespace-nowrap text-3xl font-semibold text-gray-700">
            <span>一機掌握</span>
            <RotatingText
              texts={['快速', '準確', '全面']}
              mainClassName="inline-block px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
            />
            <span>，專業數據即時呈現</span>
          </div>
        </div>
      </WavyBackground>

      {/* 限時優惠按鈕 */}
      <div className="bg-zinc-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex justify-center items-center py-8">
          <PromoButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex w-full flex-col items-center bg-white" style={{ maxWidth: '1440px' }}>
          <div className="w-full max-w-[1440px] mx-auto">
            <Feature108Advanced
              tabs={[
                {
                  value: "tab-1",
                  icon: <Zap className="h-auto w-8 shrink-0" />,
                  label: "桌上型",
                  content: <Tab1Content />,
                  imageUrl: "/desktop_card.png",
                  imageSize: 250,
                  imageLeftOffset: -30,
                  imageAreaWidth: "40%",
                  textAreaWidth: "60%",
                },
                {
                  value: "tab-2",
                  icon: <Pointer className="h-auto w-8 shrink-0" />,
                  label: "掌上型",
                  content: <Tab2Content />,
                  imageUrl: "/Portable pHCondDO meter02 - card.png",
                },
                {
                  value: "tab-3",
                  icon: <Layout className="h-auto w-8 shrink-0" />,
                  label: "筆　型",
                  content: <Tab3Content />,
                  imageUrl: "/pen_card.png",
                },
              ]}
            />
            {/* RWD overrides moved to globals.css to avoid styled-jsx in Server Component */}
          </div>
          
        </main>
        
      </div>

      {/* 回到頂部按鈕 */}
      <ScrollToTop />

      {/* CTA image link above DownloadButton */}
      <div className="bg-zinc-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 bg-white">
      <div className="flex justify-center items-center py-8">
        <a
          href="https://dgs.com.tw/product/collections/131"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://dgs.com.tw/pic/00/01/37/90-95de44b4258a61a4.png"
            alt="DLAB 水質檢測全系列 9 折優惠"
            className="h-auto max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </a>
      </div>
      <div className="flex justify-center items-center py-12">
        <DownloadButton />
      </div>
      {/* FAQ */}
      <div className="py-4">
        <Faq12 />
      </div>
        </div>
      </div>
      <Footer />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            (function () {
              const SITE_URL = "https://dgs.com.tw";
              const BASE_PATH = "/hotcategory/DLAB-water-analysis";
              const canonical = `${SITE_URL}${BASE_PATH}/`;
              const now = new Date().toISOString();
              const brand = {
                "@type": "Brand",
                name: "DLAB",
              };
              const org = {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "DGS德記儀器",
                legalName: "德記儀器有限公司",
                url: SITE_URL,
                logo: `${SITE_URL}/img/header/logo.svg`,
                sameAs: [
                  "https://zh-tw.facebook.com/pg/doggerco/posts/",
                ],
                contactPoint: [{
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  telephone: "+886-2-2684-1142",
                  email: "doggerco@ms42.hinet.net",
                  areaServed: "TW",
                  availableLanguage: ["zh-Hant"],
                }],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "建國一路310號5樓",
                  addressLocality: "新莊區",
                  addressRegion: "新北市",
                  postalCode: "242",
                  addressCountry: "TW",
                },
              };
              const products = [
                {
                  name: "DPH100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010200",
                  image: "https://dgs.com.tw/pic/00/01/27/85-6ff0612c8f98035c-w600h600.jpg",
                },
                {
                  name: "DEC100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010201",
                  image: "https://dgs.com.tw/pic/00/01/27/89-c4c622d361a9b19d-w600h600.jpg",
                },
                {
                  name: "DDO100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010202",
                  image: "https://dgs.com.tw/pic/00/01/37/40-e7db6bbeb857a623-w600h600.jpg",
                },
                {
                  name: "DPC100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010206",
                  image: "https://dgs.com.tw/pic/00/01/27/93-f89be6d6a344df60-w600h600.jpg",
                },
                {
                  name: "DPD100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010207",
                  image: "https://dgs.com.tw/pic/00/01/37/42-358bfab3e7bdae7e-w600h600.jpg",
                },
                {
                  name: "DCD100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010208",
                  image: "https://dgs.com.tw/pic/00/01/37/44-f3b681c76a92ea58-w600h600.jpg",
                },
                {
                  name: "DPCD100",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010209",
                  image: "https://dgs.com.tw/pic/00/01/37/46-e822d503d4823c42-w600h600.jpg",
                },
                {
                  name: "DPH100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010203",
                  image: "https://dgs.com.tw/pic/00/01/27/87-78c7cc9b82cd5632-w600h600.jpg",
                },
                {
                  name: "DEC100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010204",
                  image: "https://dgs.com.tw/pic/00/01/27/91-e9915cb0fc2f03e2-w600h600.jpg",
                },
                {
                  name: "DDO100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010205",
                  image: "https://dgs.com.tw/pic/00/01/37/33-fb972f68f70dc079-w600h600.jpg",
                },
                {
                  name: "DPC100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010210",
                  image: "https://dgs.com.tw/pic/00/01/27/95-2e44809aee4a08f4-w600h600.jpg",
                },
                {
                  name: "DPD100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010211",
                  image: "https://dgs.com.tw/pic/00/01/37/34-2c8d74e4a0855164-w600h600.jpg",
                },
                {
                  name: "DCD100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010212",
                  image: "https://dgs.com.tw/pic/00/01/37/36-2b17cb0a4fa555de-w600h600.jpg",
                },
                {
                  name: "DPCD100T",
                  url: "https://dgs.com.tw/product/headCode/AWE-4090010213",
                  image: "https://dgs.com.tw/pic/00/01/37/36-2b17cb0a4fa555de-w600h600.jpg",
                },
              ];

              const itemList = {
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: products.map((p, idx) => ({
                  "@type": "ListItem",
                  position: idx + 1,
                  item: {
                    "@type": "Product",
                    name: p.name,
                    image: p.image,
                    brand,
                    url: p.url,
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                    },
                  },
                })),
              };

              const doc = {
                "@context": "https://schema.org",
                "@type": "DigitalDocument",
                name: "DLAB水質檢測儀規格比較",
                fileFormat: "application/pdf",
                url: `${SITE_URL}/DLAB水質產品DM.pdf`,
              };

              const breadcrumb = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "DLAB 水質檢測系列",
                    item: canonical,
                  },
                ],
              };

              const webPage = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "DLAB智慧水質檢測系列｜德記儀器 — 實驗室到現場一次搞定",
                description:
                  "DLAB 智慧水質檢測儀，桌上型、掌上型、筆型完整產品線；支援 pH/mV/ORP、導電度/鹽度/電阻率、溶氧等多參數。下載規格比較，快速選型，從實驗室到現場一次搞定。",
                inLanguage: "zh-Hant",
                url: canonical,
                isPartOf: { "@id": `${SITE_URL}#organization` },
                dateModified: now,
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://dgs.com.tw/pic/00/01/40/02-5b9dc4259919f916.jpg",
                },
              } as const;

              return [
                { ...org, "@id": `${SITE_URL}#organization` },
                webPage,
                itemList,
                doc,
                breadcrumb,
              ];
            })(),
            null,
            2
          ),
        }}
      />
    </>
    
  );

}

// JSON-LD 結構化資料（首頁）：WebPage + Organization + ItemList(Product) + DigitalDocument + BreadcrumbList
// 注意：請確認 URL 與圖片路徑皆可公開訪問
export const dynamic = "force-static";
