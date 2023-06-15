import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Our lab is cooking 🧪</p>
        <div className={styles.bottle}>
          <div className={styles.bottleGap}>
            <div className={styles.bottleLiquid}>
            </div>
          </div>
        </div>
        <div className={styles.cup}>
          <div className={styles.cupGap}>
            <div className={styles.cupLiquid}>
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterGap}>
            <div className={styles.filterLiquid}>
            </div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.supportCross}>
            <div className={styles.dot}>

            </div>
          </div>
        </div>
        <div className={styles.supportBase}>
          <div className={styles.dot}>

          </div>
        </div>
        <div className={styles.desk}></div>
        <div className={styles.bubble1}></div>
        <div className={styles.bubble2}></div>
        <div className={styles.bubble3}></div>
        <div className={styles.drip}></div>

      </div>
    </main>
  )
}
