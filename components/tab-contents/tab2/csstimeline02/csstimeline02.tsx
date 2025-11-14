"use client";

import React from "react";
import styles from "./csstimeline02.module.css";

const Csstimeline02: React.FC = () => {
  const uid = React.useId().replace(/:/g, "");
  const group = `works-${uid}`;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>CSS3 Timeline</h2>
      <p className={styles.note}>
        Please set the $vertical variable to false to see the horizontal
        version.
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
              Lorem ipsum dolor sit amet
            </label>
            <span className={styles.date}>12 May 2013</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
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
              Lorem ipsum dolor sit amet
            </label>
            <span className={styles.date}>11 May 2013</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
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
              Lorem ipsum dolor sit amet
            </label>
            <span className={styles.date}>10 May 2013</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
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
              Lorem ipsum dolor sit amet
            </label>
            <span className={styles.date}>09 May 2013</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
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
              Lorem ipsum dolor sit amet
            </label>
            <span className={styles.date}>08 May 2013</span>
            <span className={styles.circle}></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Csstimeline02;

