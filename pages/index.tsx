import Head from 'next/head';
import {HTag, PTag, Button} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Index tsx</title>
                <meta name="description" content="Главная страница проекта" />
            </Head>

            <HTag tag={'h1'}>
                Привет, я в Интернете теперь!!!
            </HTag>
            <HTag tag={'h2'}>
                Заголовок h2 тоже работает корректно
            </HTag>
            <HTag tag={'h3'}>
                h3 здесь
            </HTag>
            <PTag>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore nam obcaecati voluptate! Atque commodi consequuntur cupiditate dignissimos dolorum ducimus, eligendi nihil nulla numquam optio quas quasi qui sunt voluptate?
            </PTag>
            <PTag size={'small'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore nam obcaecati voluptate! Atque commodi consequuntur cupiditate dignissimos dolorum ducimus, eligendi nihil nulla numquam optio quas quasi qui sunt voluptate?
            </PTag>
            <PTag size={'medium'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore nam obcaecati voluptate! Atque commodi consequuntur cupiditate dignissimos dolorum ducimus, eligendi nihil nulla numquam optio quas quasi qui sunt voluptate?
            </PTag>
            <PTag size={'large'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore nam obcaecati voluptate! Atque commodi consequuntur cupiditate dignissimos dolorum ducimus, eligendi nihil nulla numquam optio quas quasi qui sunt voluptate?
            </PTag>

            <Button onClick={()=>null} type={'primary'} className={'dddd'}>Кнопашка</Button>
            <Button type={'secondary'}>Кнопашка2</Button>

            <a href={"/about"}>LINK TO ABOUT PAGE</a>
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <p>Абзац</p>
        </div>
    )
}
