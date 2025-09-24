import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title || 'Home'} description={siteConfig.tagline || 'Welcome'}>
      <main className={styles.hero}>
        <div className={styles.inner}>
          {/* hero tagline */}
          <h1 className={styles.taglineLarge}>{siteConfig.tagline || 'Documentation site'}</h1>

          <section className={styles.features}>
            <div className={styles.feature}>
              <h3>Mess-free backend</h3>
              <p>Minimal setup, simple APIs, runs anywhere.</p>
            </div>
            <div className={styles.feature}>
              <h3>Easy to learn</h3>
              <p>Clear docs and examples get you productive fast.</p>
            </div>
            <div className={styles.feature}>
              <h3>Animate fluidly</h3>
              <p>Smooth animations that feel natural and responsive.</p>
            </div>
            <div className={styles.feature}>
              <h3>Light as feathers</h3>
              <p>Small footprint with excellent performance.</p>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h3>It's time to make UI better</h3>
            <p>It's open-source and free, so give it a spin and see what you think.</p>
          </section>

          <div className={styles.buttons}>
            <a href="/docs/API" className={styles.button}>API</a>
            <a href="/blog" className={styles.buttonSecondary}>Blog</a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
