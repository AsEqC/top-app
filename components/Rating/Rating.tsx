import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { ReactElement, useEffect, useState } from "react";
import { StarIcon } from "@/public/icons/star-icon";

export const Rating = ({
  className,
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<ReactElement[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currRating: number) => {
    const updatedArray = ratingArray.map((el, i) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currRating,
            [styles.editable]: isEditable,
          })}
          onClick={() => onClick(i + 1)}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div className={cn()} {...props}>
      {ratingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};
