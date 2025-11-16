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
              src="./dlab_logo.png"
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
                  imageUrl: "./desktop_card.png",
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
                  imageUrl: "./Portable pHCondDO meter02 - card.png",
                },
                {
                  value: "tab-3",
                  icon: <Layout className="h-auto w-8 shrink-0" />,
                  label: "筆　型",
                  content: <Tab3Content />,
                  imageUrl: "./pen_card.png",
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

              // HowTo: Tab1 桌上型
              const howtoBench = {
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: "5 步驟搞懂桌上型水質檢測儀：實驗室標準流程",
                description:
                  "本篇適用於實驗室日常水質測量，內容涵蓋儀器安裝、pH 標準液校正、自動穩定功能、Auto timing 記錄器的間隔設定，以及隨身碟/PC 的資料導出。",
                inLanguage: "zh-Hant",
                url: `${canonical}#howto-bench`,
                step: [
                  {
                    "@type": "HowToStep",
                    name: "桌上型水質檢測儀設置與電極連接",
                    text:
                      "1、連接電源： 將電源供應器連接至水質檢測儀（電源供應規格為 DC 12V）。\n" +
                      "2、連接電極： 將玻璃複合 pH 電極（如 DPH-G）和不鏽鋼溫度電極（DTEMP）連接到水質檢測儀後方。\n" +
                      "3、準備配件： 對於觸控螢幕機型，建議使用隨附的磁力攪拌器和靈活電極支架進行測量。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "執行 pH 自動校正",
                    text:
                      "1、進入校正模式： 透過水質檢測儀的使用者介面或按鍵進入校正（CAL）功能。\n" +
                      "2、多點校正： DLAB 水質檢測儀支援 1~5點的 pH 自動校正(觸控型), 或1~3點(標準型)。選擇您所需的校正點數。\n" +
                      "3、依序校正： 將 pH 電極依序浸入標準緩衝溶液中（例如 pH 4.00/7.00/10.01）。\n" +
                      "4、確認儲存： 水質檢測儀會自動等待讀數穩定；一旦穩定，按下確認鍵或螢幕按鈕，儲存該校正點。\n" +
                      "提示： 水質檢測儀具備自動溫度補償（ATC）功能，能自動校正溫度對 pH 測量的影響。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "測量與讀數鎖定",
                    text:
                      "1、開始測量： 將電極浸入待測水樣中，若使用觸控螢幕機型，可實現 pH/Cond/DO 同時顯示。\n" +
                      "2、等待穩定： 水質檢測儀會提供自動讀數穩定指示，請等待指示出現，確保數據穩定。\n" +
                      "3、記錄讀數： 讀數穩定後，即可記錄或將其納入數據記錄器中。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "啟用定時數據記錄器",
                    text:
                      "1、進入設定： 透過圖形和文字的使用者介面，進入智慧功能選單或參數設定。\n" +
                      "2、啟用記錄器： 選擇並開啟 Auto. timing data logger（定時數據記錄器）功能。\n" +
                      "3、設定間隔： 根據您的需求設定記錄間隔，水質檢測儀將按時自動儲存數據，包括參數、值、溫度、日期和時間。\n" +
                      "儲存容量： 觸控螢幕系列水質檢測儀可儲存 500 組讀數/參數；標準型系列水質檢測儀可儲存 450 組讀數。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "將數據導出至外部設備",
                    text:
                      "1、選擇導出介面： 進入水質檢測儀的數據管理或導出選單。\n" +
                      "2、數據傳輸： 您可以選擇將數據導出至 Flash disk（隨身碟）或透過 PC cable 連接至電腦。\n" +
                      "3、選配印表機： DLAB 水質檢測儀亦支援連接無線印表機（Wireless printer）（選配）進行即時列印報告。",
                  },
                ],
                supply: [
                  { "@type": "HowToSupply", name: "pH 緩衝液（4.00/7.00/10.01）" },
                  { "@type": "HowToSupply", name: "蒸餾水" },
                  { "@type": "HowToSupply", name: "擦拭布/紙巾" },
                ],
                tool: [
                  { "@type": "HowToTool", name: "DLAB 桌上型水質檢測儀" },
                  { "@type": "HowToTool", name: "玻璃杯/燒杯" },
                  { "@type": "HowToTool", name: "Type‑C 充電線" },
                ],
              };

              // HowTo: Tab2 掌上型
              const howtoHandheld = {
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: "掌上型水質檢測儀怎麼用？5 大步驟從啟動到高階解析度調整一次掌握",
                description:
                  "從儀器開機、切換測量模式、執行多點 pH 校正，到現場測量數據鎖定與定時記錄器啟用，全流程簡單明瞭。文章也會說明 Type-C 充電方式與 0.001 解析度的 pH 高精度模式，是戶外採樣與環境監測的最佳教學指南。",
                inLanguage: "zh-Hant",
                url: `${canonical}#howto-handheld`,
                step: [
                  {
                    "@type": "HowToStep",
                    name: "啟動掌上型水質檢測儀與選擇測量參數",
                    text:
                      "1、確認電極（如 BNC 電極、溫度/電導度電極）已正確連接。\n" +
                      "2、長按水質檢測儀上的電源鍵啟動設備。\n" +
                      "3、使用參數選擇鍵切換至您所需的測量模式（如 pH、電導度或 DO）。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "執行 pH 自動校正",
                    text:
                      "1、按下 CAL 鍵進入校正模式。\n" +
                      "2、水質檢測儀支援 1~3 點自動校正。請依序將電極浸入標準緩衝溶液中。\n" +
                      "3、等待讀數穩定後，按下 Start/Enter 鍵確認並儲存校正點。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "測量與讀數鎖定",
                    text:
                      "1、將電極浸入待測水樣中，水質檢測儀會開始測量。\n" +
                      "2、讀數穩定後，按下數據鎖定鍵，即可手動鎖定當前的測量數據。\n" +
                      "3、數據鎖定有助於在環境波動時，精準記錄數值。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "啟用智慧定時數據記錄",
                    text:
                      "1、水質檢測儀具備智慧功能，包含自動定時數據記錄器 (Auto. timing data logger)。\n" +
                      "2、進入參數設定，啟用此功能並設定記錄間隔。\n" +
                      "3、之後可透過特定按鍵查看儲存的數據（包括編號、參數、數值、日期和時間）。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "掌上型水質檢測儀充電與進階解析度調整",
                    text:
                      "1、水質檢測儀使用可充電鋰電池。請透過 Type-C 充電插座充電，此規格符合歐洲新規範要求。\n" +
                      "2、進階提示： 在 pH 模式下，長按參數設定鍵可將 pH 解析度調整為 0.1/0.01/0.001。",
                  },
                ],
                supply: [
                  { "@type": "HowToSupply", name: "pH 緩衝液（4.00/7.00/10.01）" },
                  { "@type": "HowToSupply", name: "蒸餾水" },
                  { "@type": "HowToSupply", name: "擦拭布/紙巾" },
                ],
                tool: [
                  { "@type": "HowToTool", name: "DLAB 掌上型水質檢測儀" },
                  { "@type": "HowToTool", name: "玻璃杯/燒杯" },
                  { "@type": "HowToTool", name: "Type‑C 充電線" },
                ],
              };

              // HowTo: Tab3 筆型
              const howtoPen = {
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: "這樣用最準！筆型水質檢測儀 5 步驟完整教學",
                description:
                  "若你想確保水質量測結果更穩定，本篇教你如何依循五大步驟完成完整操作，包括儀器啟動、模式切換、三點 pH 校正、手動/自動鎖定讀數，以及藍牙連線使用技巧。非常適合實驗室、戶外採樣與水質管理使用者。",
                inLanguage: "zh-Hant",
                url: `${canonical}#howto-pen`,
                step: [
                  {
                    "@type": "HowToStep",
                    name: "筆型水質檢測儀啟動與電池狀態檢查",
                    text:
                      "1、開啟水質檢測儀： 當水質檢測儀處於關閉狀態時，短按電源鍵（Power key）即可啟動測試筆。\n" +
                      "2、電源確認： 筆型水質檢測儀使用 4×1.5V AAA 鹼性電池。水質檢測儀具備低電壓指示功能，若偵測到電壓低，請及時更換電池，確保現場測試的穩定性。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "快速切換參數與狀態識別",
                    text:
                      "1、切換參數： 短按 MODE 鍵即可在不同的測量參數間切換，涵蓋 pH、ORP、電導度等多種組合。\n" +
                      "2、識別狀態： 水質檢測儀背光顏色具有狀態提示功能：白色=測量模式、綠色=校正模式、紅色=警報模式。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "執行 pH 自動校正 (多點)",
                    text:
                      "1、進入校正模式： 長按 CAL/ENT 鍵即可進入校正模式。\n" +
                      "2、選擇標準： 儀器提供 CH、USA、NIST 三種標準緩衝液可供選擇。請確保使用正確的標準液進行校正。\n" +
                      "3、完成校正： 儀器支援 1~3 點自動校正。請根據螢幕提示依序將電極浸入標準溶液中，並等待水質檢測儀完成讀數穩定和儲存。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "手動鎖定測量讀數",
                    text:
                      "1、鎖定操作： 在測量模式下，短按 CAL/ENT 鍵即可手動鎖定（lock）或解鎖（unlock）當前的讀數。\n" +
                      "2、自動鎖定： 水質檢測儀也具備讀數指示器功能，當讀數穩定時，會自動進行數據鎖定。",
                  },
                  {
                    "@type": "HowToStep",
                    name: "使用藍牙 APP 進行雙控與數據分享（藍牙系列）",
                    text:
                      "1、開啟藍牙： 長按 MODE 鍵即可開啟或關閉藍牙連接。\n" +
                      "2、APP 雙控： 連接行動 APP 後，您將進入雙控模式，可在手機上管理水質檢測儀。\n" +
                      "3、數據管理： 行動 APP 支援強大的數據儲存功能，並提供四種顯示模式：圖形（Graph mode）、表格（Table mode）、轉盤（Dial mode）和一般模式（General mode）。\n" +
                      "4、分享數據： 您可以利用 APP 進行樣本 ID 分類 和測量資訊分享。",
                  },
                ],
                supply: [
                  { "@type": "HowToSupply", name: "pH 緩衝液（4.00/7.00/10.01）" },
                  { "@type": "HowToSupply", name: "蒸餾水" },
                  { "@type": "HowToSupply", name: "擦拭布/紙巾" },
                ],
                tool: [
                  { "@type": "HowToTool", name: "DLAB 筆型水質檢測儀" },
                  { "@type": "HowToTool", name: "玻璃杯/燒杯" },
                  { "@type": "HowToTool", name: "4×1.5V AAA 鹼性電池" },
                ],
              };

              return [
                { ...org, "@id": `${SITE_URL}#organization` },
                webPage,
                itemList,
                doc,
                breadcrumb,
                howtoBench,
                howtoHandheld,
                howtoPen,
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
