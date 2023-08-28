import styles from "./Up.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "@/icon-components/ButtonIcon/ButtonIcon";

export const Up = () => {
  const control = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    control.start({ opacity: y / document.body.scrollHeight });
  }, [y, control]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={styles.up}
      onClick={scrollToTop}
      animate={control}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon icon="up" appearance="primary" />
    </motion.div>
  );
};
