import Head from 'next/head';
import {Htag} from "../components";
import {Button} from "../components/Button/Button";

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Index tsx</title>
                <meta name="description" content="Главная страница проекта" />
            </Head>

            <Htag tag={'h1'}>
                Привет, я в Интернете теперь!!!
            </Htag>
            <Htag tag={'h2'}>
                Заголовок h2 тоже работает корректно
            </Htag>
            <Htag tag={'h3'}>
                h3 здесь
            </Htag>

            <Button onClick={()=>null} type={'primary'} className={'dddd'}>Кнопашка</Button>
            <Button type={'secondary'}>Кнопашка2</Button>

            <a href={"/about"}>LINK TO ABOUT PAGE</a>
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <p>Абзац</p>
        </div>
    )
}
