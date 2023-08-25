import { ProductIcon } from "@/public/icons/product-icon";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { CoursesIcon } from "@/public/icons/courses-icon";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { ServicesIcon } from "@/public/icons/services-icon";
import { BookIcon } from "@/public/icons/book-icon";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "[type]",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");
