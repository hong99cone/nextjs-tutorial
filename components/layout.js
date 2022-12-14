import Head from "next/head";
import Image from "next/image";
import profileImg from '/images/sample.png';
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Hongπ";
export const siteTitle = "My First Next.js Page";

// ; νλ μλͺ»λΆμλ€κ³  error λ¬λ€  μ€νμμμμ!!!!!!!!!!!!!!
export default function Layout({children, home}) {
    return (
      <div className={styles.container}>
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
                {/* μ΄λ―Έμ§ μλ¨λ μ΄μ  λλμ²΄ λ­λ°μμγγγγγ±!!!!!!!!!!!!! */}
                {/* μκ·Έλ μ΄λ ν΄μΌν¨ 11.05 μ΄νλ‘ μλ°μ΄νΈ μμΌμ€μΌν¨! -> latest μΈλ°?!!!! μ μλκΉμ~~*/}
                <Image
                    priority
                    src = {profileImg}
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
                                src ='/images/sample.png'
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

