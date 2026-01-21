import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MSYS DX Adapters Documentation">
      <main>
        <div className={styles.hero}>
          <div className="container">
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.products}>
          <div className="container">
            <h2 className={styles.productsHeading}>製品マニュアル</h2>
            <div className={styles.productGrid}>
              <Link className={styles.productCard} to="/msys-dx-adapters-docs/wmc/intro">
                <span className={styles.productPrefix}>WinActor for</span>
                <h3 className={styles.productTitle}>Manager on Cloud</h3>
              </Link>
              <Link className={styles.productCard} to="/msys-dx-adapters-docs/box/intro">
                <span className={styles.productPrefix}>WinActor for</span>
                <h3 className={styles.productTitle}>Box</h3>
              </Link>
              <Link className={styles.productCard} to="/msys-dx-adapters-docs/kintone/intro">
                <span className={styles.productPrefix}>WinActor for</span>
                <h3 className={styles.productTitle}>kintone</h3>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
