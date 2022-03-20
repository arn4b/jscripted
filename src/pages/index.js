import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import './index.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Features from '../components/Features';

import js from '../../static/img/logo.png'
import skeleton from '../../static/img/skeleton.png'

// import ReactGA from 'react-ga';
// ReactGA.initialize('G-N00B3QEC13');
// ReactGA.pageview(window.location.pathname + window.location.search);

// const pageViewsTracking = (props) => {
//   const pathname = props.match.path

//   let pageView
//   if(pathname === "*") pageView = '/not-found'
//   else pageView = pathname

//   ReactGA.pageview(pageView)
// }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <img src={skeleton} className={styles.skeleton}/>

      <div className={styles.container}>
        <img src={js} className={styles.img}/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="JavaScript made simple for Frontend Interviews">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <Features />
      </main>
    </Layout>
  );
}
