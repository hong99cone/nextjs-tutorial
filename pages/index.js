import Head from "next/head";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lofi 🎵 / Activity 🏸 / Noodle 🍜 </p>
        <p>
          (welcome to my next.js page!{" "}
          <a target='_blank' href="https://hawaiian-pizza-it.tistory.com/">my blog is here!</a>.)
        </p>
      </section>


      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
