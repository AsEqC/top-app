import { ProductIcon } from "@/helpers/icons/product-icon";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { CoursesIcon } from "@/helpers/icons/courses-icon";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { ServicesIcon } from "@/helpers/icons/services-icon";
import { BookIcon } from "@/helpers/icons/book-icon";

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
