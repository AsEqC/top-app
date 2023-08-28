import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { StarIcon } from "@/icon-components/StarIcon";

// eslint-disable-next-line react/display-name
export const Rating = forwardRef(
  (
    { isEditable = false, error, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>),
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: ReactElement, i: number) => {
        return (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
          >
            <StarIcon tabIndex={isEditable ? 0 : -1} />
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
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
