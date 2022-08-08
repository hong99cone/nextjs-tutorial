import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Hong😜";
export const siteTitle = "Next.js Sample Website";

// ; 하나 잘못붙였다고 error 뜬다  오타아아아악!!!!!!!!!!!!!!
export default function Layout({children, home}) {
    return (
      <div className="{style.container}">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content = {siteTitle} />
          <meta name ="twitter:card"  content = "summary_large_image" />
        </Head>
        <header className={styles.header}>
            {home? (
                <>
                {/* 이미지 안뜨는 이유 도대체 뭔데에에ㅔㅔㅔㅔㄱ!!!!!!!!!!!!! */}
                {/* 업그레이드 해야함 11.05 이후로 업데이트 시켜줘야함! */}
                <Image
                    priority
                    src = '/images/sample.png'
                    className = {utilStyles.borderCircle}
                    height = {140}
                    width = {140}
                    alt = {name}
                />
                <h1 className="{utillStyles.heading2Xl}">{name}</h1>
                </>
            ) : (
                <>
                    <Link href = '/'>
                        <a>
                            <Image
                                priority
                                src ='/images/profile.png'
                                className={utilStyles.borderCircle}
                                height = {108}
                                width = {108}
                                alt = {name}
                            />
                        </a>
                    </Link>
                    <h2 className = {utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href ='/'>
                    <a>Back to home</a>
                </Link>
            </div>
        )}
      </div>
    );
}