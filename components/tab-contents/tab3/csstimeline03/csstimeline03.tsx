"use client";

import React from "react";
import styles from "./csstimeline03.module.css";

const Csstimeline03: React.FC = () => {
  const uid = React.useId().replace(/:/g, "");
  const group = `works-${uid}`;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>這樣用最準！筆型水質檢測儀 5 步驟完整教學</h2>
      <p className={styles.note}>
        若你想確保水質量測結果更穩定，本篇教你如何依循五大步驟完成完整操作，包括儀器啟動、模式切換、三點 pH 校準、手動/自動鎖定讀數，以及藍牙連線使用技巧。非常適合實驗室、戶外採樣與水質管理使用者。
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
              筆型水質檢測儀啟動與電池狀態檢查
            </label>
            <span className={styles.date}>步驟 1</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、開啟水質檢測儀： 當水質檢測儀處於關閉狀態時，<strong>短按電源鍵（Power key）</strong>即可啟動測試筆。<br />
              2、電源確認： 筆型水質檢測儀使用 4×1.5V AAA 鹼性電池。水質檢測儀具備低電壓指示功能，若偵測到電壓低，請及時更換電池，確保現場測試的穩定性。
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
              快速切換參數與狀態識別
            </label>
            <span className={styles.date}>步驟 2</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
             1、切換參數： 短按 MODE 鍵即可在不同的測量參數間切換，涵蓋 pH、ORP、電導度等多種組合。<br />
             2、識別狀態： 水質檢測儀背光顏色具有狀態提示功能：<br />
    ◦ 白色：表示儀器處於測量模式。<br />
    ◦ 綠色：表示儀器處於校準模式。<br />
    ◦ 紅色：表示警報模式已啟動。
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
              執行 pH 自動校準 (多點)
            </label>
            <span className={styles.date}>步驟 3</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、進入校準模式： 長按 CAL/ENT 鍵即可進入校準模式。<br />
              2、選擇標準： 儀器提供 CH、USA、NIST 三種標準緩衝液可供選擇。請確保使用正確的標準液進行校準。<br />
              3、完成校準： 儀器支援 1~3 點自動校準。請根據螢幕提示依序將探頭浸入標準溶液中，並等待水質檢測儀完成讀數穩定和儲存。
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
              手動鎖定測量讀數
            </label>
            <span className={styles.date}>步驟 4</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、鎖定操作： 在測量模式下，短按 CAL/ENT 鍵即可<strong>手動鎖定（lock）或解鎖（unlock）</strong>當前的讀數。<br />
              2、自動鎖定： 水質檢測儀也具備讀數指示器功能，當讀數穩定時，會自動進行數據鎖定。<br />
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
              使用藍牙 APP 進行雙控與數據分享（藍牙系列）
            </label>
            <span className={styles.date}>步驟 5</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、開啟藍牙： 長按 MODE 鍵即可開啟或關閉藍牙連接。<br />
              2、APP 雙控： 連接行動 APP 後，您將進入雙控模式，可在手機上管理水質檢測儀。<br />
              3、數據管理： 行動 APP 支援強大的數據儲存功能，並提供四種顯示模式：圖形（Graph mode）、表格（Table mode）、轉盤（Dial mode）和一般模式（General mode）。<br />
              4、分享數據： 您可以利用 APP 進行樣本 ID 分類 和測量資訊分享。
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Csstimeline03;

