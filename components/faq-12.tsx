"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Faq = {
  isActive?: boolean;
  question: string;
  answer: string;
};

const faqList: Faq[] = [
  {
    isActive: true,
    question: "01、我需要檢測多種水質參數，DLAB水質檢測儀可以一次滿足我的需求嗎？",
    answer:
      "可以。DLAB水質檢測儀提供多參數組合電極設計，讓您不必攜帶多台儀器。例如，筆型DPC1/DPC1+ 型號結合了 pH、電導度（Cond）、TDS、電阻率（RES）和鹽度（Sal.），並可額外購買ORP電極，實現一機多用。此外，掌上型與桌上型多參數檢測設備能同時顯示 pH、電導度、溶解氧（DO）等多項數據。",
  },
  {
    isActive: false,
    question: "02、DLAB水質檢測儀是否支援數據記錄和導出功能，方便我進行報告分析？",
    answer:
      "是的，支援數據管理是 DLAB水質檢測儀的特點之一。</br>儲存容量：掌上型檢測設備數據儲存量高達3000 組, 桌上型檢測設備500 組（如 Benchtop 觸控螢幕系列）。</br>導出方式： 您可以透過多種方式導出數據，包括 Flash disk（隨身碟）、PC、無線印表機（選配），或透過行動 APP 實現數據儲存和分享。",
  },
  {
    isActive: false,
    question: "03、如何啟動或關閉DLAB水質檢測儀，以及快速切換背光模式？",
    answer:"操作方式非常直覺。 以筆型（如 DPC1/DPC1+）為例：</br>開機： 在關機狀態下，短按電源鍵即可。</br>關機： 在開機狀態下，長按電源鍵即可。</br>背光/退出設定： 在開機狀態下，短按電源鍵可開啟/關閉背光或退出設定模式。",
  },
  {
    isActive: false,
    question: "04、我如何手動鎖定（Hold）當前的測量讀數？",
    answer:
      "要手動鎖定讀數，您需要使用 CAL/ENT 鍵。 短按 CAL/ENT 鍵可以手動鎖定或解鎖讀數。某些可攜式檢測設備也有專門的「數據鎖定鍵」供您按下以啟動數據鎖定。當讀數穩定時，檢測設備通常也會有讀數指示器並執行自動數據鎖定。",
  },
  {
    isActive: false,
    question: "05、DLAB水質檢測儀是否有低電壓提示，確保我不會在關鍵時刻因沒電而中斷測量？",
    answer:
      "有的，DLAB水質檢測儀設計有低電壓指示功能，確保您可以及時更換電池或充電。筆型水質檢測儀使用 4 顆 1.5V AAA 鹼性電池，而掌上型使用可充電鋰電池，並配備 Type-C 或 USB 充電插槽，符合歐洲新規範要求，桌上型則使用變壓器供給電源。",
  },
  {
    isActive: false,
    question: "06、DLAB水質檢測儀有提供標準的校正溶液嗎？",
    answer:
      "是的，DLAB水質檢測儀通常隨附標準解決方案和所需配件。 不同的檢測設備套件會包含對應的校正緩衝液、標準液、樣品瓶和浸泡溶液等。例如，pH 檢測設備套件會包含 pH 4.00/7.00/10.01 緩衝溶液。",
  },
  {
    isActive: false,
    question: "07、如果我需要更換電極，DLAB是否提供容易替換的設計？更換電極的費用高嗎？",
    answer:
      "DLAB水質檢測儀採用了可替換電極設計，這簡化了維護過程並降低了長期成本。 無論是筆型（如 DPC1/DPC1+）還是掌上型，都強調了可更換的組合電極設計，以滿足不同的應用需求。您可以根據測量參數選擇對應的替換電極，如 DPH1-S、DORP1-S、DEC1-S 或 DPC1-S 等。",
  },
  
];

// 將 <br>、</br>、<br/>（大小寫皆可）或換行符轉換為實際的換行
const renderWithBreaks = (text: string) => {
  const parts = text.split(/(?:<\s*\/?br\s*\/?>(?:\s*)?|\r?\n)/gi);
  return parts.map((part, idx) => (
    <React.Fragment key={idx}>
      {part}
      {idx < parts.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
};

const FaqItem: React.FC<{ faq: Faq }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(!!faq.isActive);

  const toggleFaq = () => setIsOpen((v) => !v);

  return (
    <div className={isOpen ? "active" : undefined}>
      <button
        type="button"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center lg:text-[1.2rem]"
        onClick={toggleFaq}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <div className={`${isOpen ? "block" : "hidden"} border-l-2 border-blue-600 mb-4`}>
        <div className="px-6">
          <p className="opacity-70 lg:text-[1.2rem]">{renderWithBreaks(faq.answer)}</p>
        </div>
      </div>
    </div>
  );
};

const Faq12: React.FC = () => {
  return (
    <section className="ezy__faq12 light py-14 md:py-24 bg-white text-zinc-900">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 xl:px-11 text-center">
            <h2 className="text-[#2E3458] font-bold text-[25px] md:text-[45px] leading-none mb-4">
              DLAB 水質檢測儀
            </h2>
            <p className="text-3xl opacity-70">
              常見問答與使用指南
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-10 lg:col-start-2">
            <div
              className="bg-white p-6 md:p-10 rounded-2xl"
              style={{ boxShadow: "0 30px 60px rgba(2,39,89,0.08), 0 40px 120px rgba(2,39,89,0.06)" }}
            >
              {faqList.map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}


            </div>
          </div>
        </div>
      </div>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqList.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  // 將 <br/> 標籤移除為換行，避免在結構化資料中混入 HTML
                  text: (f.answer || "").replace(/<\/?br\s*\/?/gi, "\n"),
                },
              })),
            },
            null,
            2
          ),
        }}
      />
    </section>
  );
};

export default Faq12;
