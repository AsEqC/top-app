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
import { StarIcon } from "@/public/icons/star-icon";
import { KeyboardEvent } from "react";

// eslint-disable-next-line react/display-name
export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [ratingArray, setRatingArray] = useState<ReactElement[]>(
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
            onMouseEnter={() => changeDispay(i + 1)}
            onMouseLeave={() => changeDispay(rating)}
            onClick={() => onClick(i + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    const changeDispay = (i: number) => {
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

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != "Space" || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div {...props} ref={ref}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
      </div>
    );
  },
);
