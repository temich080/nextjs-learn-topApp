import Head from 'next/head';

export default function Home():JSX.Element {
    return (
        <div>
            <Head>
            <title>Index tsx</title>
            <meta name="description" content="Главная страница проекта" />
            </Head>

            <a href={"/about"}>LINK TO ABOUT PAGE</a>
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <p>Абзац</p>
        </div>
    )
}
