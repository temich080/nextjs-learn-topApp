import Head from 'next/head';
import {Button} from "../../../../../../components/Button/Button";

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Index tsx</title>
                <meta name="description" content="Страница направлений" />
            </Head>

            <Button type={'primary'}>Кнопашка</Button>
            <Button type={'secondary'}>Кнопашка2</Button>

            <a href={"/about"}>LINK TO ABOUT PAGE</a>
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <p>Абзац</p>
        </div>
    )
}
