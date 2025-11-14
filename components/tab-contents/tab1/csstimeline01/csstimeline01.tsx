"use client";

import React from "react";
import styles from "./csstimeline01.module.css";

const Csstimeline01: React.FC = () => {
  const uid = React.useId().replace(/:/g, "");
  const group = `works-${uid}`;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>5 步驟搞懂桌上型水質檢測儀：實驗室標準流程</h2>
      <p className={styles.note}>
        本篇適用於實驗室日常水質測量，內容涵蓋儀器安裝、pH 標準液校準、<strong>自動穩定功能</strong>、<strong>Auto timing</strong> 記錄器的間隔設定，以及隨身碟/PC 的資料導出。
      </p>
      <ul className={styles.timeline}>
        <li className="work">
          <input
            className={styles.radio}
            id={`work5-${uid}`}
            name={group}
            type="radio"
            defaultChecked
          />
          <div className={styles.relative}>
            <label className={styles.label} htmlFor={`work5-${uid}`}>
              桌上型水質檢測儀設置與探頭連接
            </label>
            <span className={styles.date}>步驟 1</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、連接電源： 將電源供應器連接至水質檢測儀（電源供應規格為 DC 12V）。<br />
              2、連接探頭： 將玻璃複合 pH 探頭（如 DPH-G）和不鏽鋼溫度探頭（DTEMP）連接到水質檢測儀後方。<br />
              3、準備配件： 對於觸控螢幕機型，建議使用隨附的磁力攪拌器和靈活探頭支架進行測量。
            </p>
          </div>
        </li>

        <li className="work">
          <input
            className={styles.radio}
            id={`work4-${uid}`}
            name={group}
            type="radio"
          />
          <div className={styles.relative}>
            <label className={styles.label} htmlFor={`work4-${uid}`}>
              執行 pH 自動校準
            </label>
            <span className={styles.date}>步驟 2</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、進入校準模式： 透過水質檢測儀的使用者介面或按鍵進入校準（CAL）功能。<br />
              2、多點校準： DLAB 水質檢測儀支援 1~5點的 pH 自動校準(觸控型), 或1~3點(標準型)。選擇您所需的校準點數。<br />
              3、依序校準： 將 pH 探頭依序浸入標準緩衝溶液中（例如 pH 4.00/7.00/10.01）。<br />
              4、確認儲存： 水質檢測儀會自動等待讀數穩定；一旦穩定，按下確認鍵或螢幕按鈕，儲存該校準點。<br />
              ＊提示： 水質檢測儀具備**自動溫度補償（ATC）**功能，能自動校正溫度對 pH 測量的影響。
            </p>
          </div>
        </li>

        <li className="work">
          <input
            className={styles.radio}
            id={`work3-${uid}`}
            name={group}
            type="radio"
          />
          <div className={styles.relative}>
            <label className={styles.label} htmlFor={`work3-${uid}`}>
              測量與讀數鎖定
            </label>
            <span className={styles.date}>步驟 3</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、開始測量： 將探頭浸入待測水樣中，若使用觸控螢幕機型，可實現 pH/Cond/DO 同時顯示。<br />
              2、等待穩定： 水質檢測儀會提供自動讀數穩定指示，請等待指示出現，確保數據穩定。<br />
              3、記錄讀數： 讀數穩定後，即可記錄或將其納入數據記錄器中。
            </p>
          </div>
        </li>

        <li className="work">
          <input
            className={styles.radio}
            id={`work2-${uid}`}
            name={group}
            type="radio"
          />
          <div className={styles.relative}>
            <label className={styles.label} htmlFor={`work2-${uid}`}>
              啟用定時數據記錄器
            </label>
            <span className={styles.date}>步驟 4</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、進入設定： 透過圖形和文字的使用者介面，進入智能功能選單或參數設定。<br />
              2、啟用記錄器： 選擇並開啟 <strong>Auto. timing data logger（定時數據記錄器）</strong>功能。<br />
              3、設定間隔： 根據您的需求設定記錄間隔，水質檢測儀將按時自動儲存數據，包括參數、值、溫度、日期和時間。<br />
              ＊儲存容量： 觸控螢幕系列水質檢測儀可儲存 500 組讀數/參數；標準型系列水質檢測儀可儲存 450 組讀數。
            </p>
          </div>
        </li>

        <li className="work">
          <input
            className={styles.radio}
            id={`work1-${uid}`}
            name={group}
            type="radio"
          />
          <div className={styles.relative}>
            <label className={styles.label} htmlFor={`work1-${uid}`}>
              將數據導出至外部設備
            </label>
            <span className={styles.date}>步驟 5</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、選擇導出介質： 進入水質檢測儀的數據管理或導出菜單。<br />
              2、數據傳輸： 您可以選擇將數據導出至 <strong>Flash disk（隨身碟）</strong>或透過 PC cable 連接至電腦。<br />
              3、選配印表機： DLAB 水質檢測儀亦支援連接無線印表機（Wireless printer）（選配）進行即時列印報告。<br />
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Csstimeline01;

