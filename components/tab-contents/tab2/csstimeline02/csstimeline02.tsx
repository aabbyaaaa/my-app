"use client";

import React from "react";
import styles from "./csstimeline02.module.css";

const Csstimeline02: React.FC = () => {
  const uid = React.useId().replace(/:/g, "");
  const group = `works-${uid}`;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>掌上型水質檢測儀怎麼用？5 大步驟從啟動到高階解析度調整一次掌握</h2>
      <p className={styles.note}>
        從儀器開機、切換測量模式、執行多點 pH 校準，到現場測量數據鎖定與定時記錄器啟用，全流程簡單明瞭。文章也會說明 Type-C 充電方式與 0.001 解析度的 pH 高精度模式，是戶外採樣與環境監測的最佳教學指南。
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
              啟動掌上型水質檢測儀與選擇測量參數
            </label>
            <span className={styles.date}>步驟 1</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、確認探頭（如 BNC 探頭、溫度/電導度探頭）已正確連接。<br />
              2、長按水質檢測儀上的電源鍵啟動設備。<br />
              3、使用參數選擇鍵切換至您所需的測量模式（如 pH、電導度或 DO）。
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
              1、按下 CAL 鍵進入校準模式。<br />
              2、水質檢測儀支援 1~3 點自動校準。請依序將探頭浸入標準緩衝溶液中。<br />
              3、等待讀數穩定後，按下 Start/Enter 鍵確認並儲存校準點。
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
              1、將探頭浸入待測水樣中，水質檢測儀會開始測量。<br />
              2、讀數穩定後，按下數據鎖定鍵，即可手動鎖定當前的測量數據。<br />
              3、數據鎖定有助於在環境波動時，精準記錄數值。
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
              啟用智能定時數據記錄
            </label>
            <span className={styles.date}>步驟 4</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、水質檢測儀具備智能功能，包含自動定時數據記錄器 (Auto. timing data logger)。<br />
              2、進入參數設定，啟用此功能並設定記錄間隔。<br />
              3、之後可透過特定按鍵查看儲存的數據（包括編號、參數、數值、日期和時間）。<br />
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
              水質檢測儀充電與進階解析度調整
            </label>
            <span className={styles.date}>步驟 5</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              1、水質檢測儀使用可充電鋰電池。請透過 Type-C 充電插座充電，此規格符合歐洲新規範要求。<br />
              2、進階提示： 在 pH 模式下，長按參數設定鍵可將 pH 解析度調整為 0.1/0.01/0.001。<br />
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Csstimeline02;

