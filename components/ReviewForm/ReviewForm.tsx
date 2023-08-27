import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Button, Input, Rating, Textarea } from "@/components";
import { CloseIcon } from "@/public/icons/close-icon";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IReviewForm } from "@/components/ReviewForm/ReviewForm.interface";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps) => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit: SubmitHandler<IReviewForm> = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register("name", { required: true })} placeholder="Имя" />
        <Input
          {...register("title")}
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                rating={field.value}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description")}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
