import {withLayout} from "../../layout/Layout";
import {MenuItem} from '../../interfaces/menu.interface';
import {TopPageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";

function Search(): JSX.Element {
    return (
        <>
            COURSES PAGE
        </>
    )
}

export default withLayout(Search);

interface SearchProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
    page: TopPageModel;
    products: ProductModel[];
}