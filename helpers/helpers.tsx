// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CoursesIcon from "./icons/courses.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ServicesIcon from "./icons/services.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BooksIcon from "./icons/books.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProductsIcon from "./icons/products.svg";
import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products }
];
