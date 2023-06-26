import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components";
import frame1 from "@/public/frame1.png";
import frame2 from "@/public/frame2.png";
import frame3 from "@/public/frame3.png";

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.container}>
    //     <p className={styles.title}>Our lab is cooking 🧪</p>
    //     <div className={styles.bottle}>
    //       <div className={styles.bottleGap}>
    //         <div className={styles.bottleLiquid}></div>
    //       </div>
    //     </div>
    //     <div className={styles.cup}>
    //       <div className={styles.cupGap}>
    //         <div className={styles.cupLiquid}></div>
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //       </div>
    //     </div>
    //     <div className={styles.filter}>
    //       <div className={styles.filterGap}>
    //         <div className={styles.filterLiquid}></div>
    //       </div>
    //     </div>
    //     <div className={styles.support}>
    //       <div className={styles.supportCross}>
    //         <div className={styles.dot}></div>
    //       </div>
    //     </div>
    //     <div className={styles.supportBase}>
    //       <div className={styles.dot}></div>
    //     </div>
    //     <div className={styles.desk}></div>
    //     <div className={styles.bubble1}></div>
    //     <div className={styles.bubble2}></div>
    //     <div className={styles.bubble3}></div>
    //     <div className={styles.drip}></div>
    //   </div>
    // </main>
    <main>
      <Navbar />
      <section className={`relative ${styles.headerSection} `}>
        <div className="grid grid-cols-6 gap-4 justify-evenly">
          <div className="col-start-1 col-end-5 gap-10 px-10 py-10">
            <h1 className="max-md:text-5xl text-6xl font-bold leading-relaxed text-white md:mt-32">
              Bring Your Idea <br /> into Reality
              <span className={`${styles.bussinessText} font-semibold`}>
                Bussiness
              </span>
            </h1>
            <p className="text-lg text-white mt-10">
              Create your product and let us be the part of your bussines
              journey <br /> to build your own product , we’re really experience
              with our field
            </p>
            <div className="mt-10">
              <button className="rounded-none mt-3 px-4 py-4 drop-shadow-3xl bg-custom-yellow text-black font-medium hover:bg-yellow-200 hover:drop-shadow-4xl mr-10">
                Free Initial Consultations
              </button>
              <button className="rounded-none mt-3 px-4 py-4 drop-shadow-3xl bg-custom-red text-black font-medium hover:bg-red-300 hover:drop-shadow-4xl">
                Contact US
              </button>
            </div>
          </div>
          <div className=" max-md:hidden max-lg:hidden xl:block ">
            <div></div>
            <div className={styles.frameThree}>
              <Image src={frame3} width={370} height={377} />
            </div>
            <div className={styles.frameOne}>
              <Image src={frame2} width={370} height={377} />
            </div>
            <div className={styles.frameTwo}>
              <Image src={frame1} width={370} height={377} />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-20"></section> */}
    </main>
  );
}
