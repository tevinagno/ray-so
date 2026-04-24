import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import { showBackgroundAtom } from "../../store";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./AgnoFrame.module.css";

const AgnoFrame = () => {
  const [padding] = useAtom(paddingAtom);
  const [showBackground] = useAtom(showBackgroundAtom);
  const darkMode = useAtomValue(themeDarkModeAtom);

  return (
    <div
      className={classNames(
        sharedStyles.frame,
        styles.frame,
        darkMode ? styles.darkMode : styles.lightMode,
        !showBackground && sharedStyles.noBackground,
      )}
      style={{ padding, ["--frame-padding" as string]: `${padding}px` }}
    >
      {!showBackground && <div data-ignore-in-export className={sharedStyles.transparentPattern}></div>}
      <div className={styles.window}>
        <Editor />
      </div>
      {showBackground && (
        <div className={styles.overlay} aria-hidden>
          <span className={classNames(styles.line, styles.topLeftLine)}></span>
          <span className={classNames(styles.line, styles.topCenterLine)}></span>
          <span className={classNames(styles.line, styles.topRightLine)}></span>
          <span className={classNames(styles.line, styles.bottomLeftLine)}></span>
          <span className={classNames(styles.line, styles.bottomCenterLine)}></span>
          <span className={classNames(styles.line, styles.bottomRightLine)}></span>
          <span className={classNames(styles.line, styles.leftTopLine)}></span>
          <span className={classNames(styles.line, styles.leftCenterLine)}></span>
          <span className={classNames(styles.line, styles.leftBottomLine)}></span>
          <span className={classNames(styles.line, styles.rightTopLine)}></span>
          <span className={classNames(styles.line, styles.rightCenterLine)}></span>
          <span className={classNames(styles.line, styles.rightBottomLine)}></span>
          <span className={classNames(styles.marker, styles.topLeft)}></span>
          <span className={classNames(styles.marker, styles.topRight)}></span>
          <span className={classNames(styles.marker, styles.bottomLeft)}></span>
          <span className={classNames(styles.marker, styles.bottomRight)}></span>
        </div>
      )}
    </div>
  );
};

export default AgnoFrame;
