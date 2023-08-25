import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import { CheckIcon } from "@/components/Advantages/icons/check-icon";

export const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
