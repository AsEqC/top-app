import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag, Tag } from "@/components";
import styles from "./TopPageComponent.module.css";
import { HhData } from "@/components/HhData/HhData";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { HhDataProps } from "@/components/HhData/HhData.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag color="gray" size="m">
          {products && products.length}
        </Tag>
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && (
        <HhData {...(page.hh as HhDataProps)} />
      )}
    </div>
  );
};
