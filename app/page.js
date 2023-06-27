"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components";
import frame1 from "@/public/frame1.png";
import frame2 from "@/public/frame2.png";
import frame3 from "@/public/frame3.png";
import frame4 from "@/public/frame4.png";
import frame5 from "@/public/frame5.png";
import frame6 from "@/public/frame6.png";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState("");
  const dataAccordion = [
    {
      title: "What are the benefits of MVP?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in dolores beatae reprehenderit, nobis aliquid labore animi, quas amet quos vel itaque odit rerum fugit a nihil odio omnis. Nemo suscipit quos mollitia. Veniam, temporibus illo. Fugiat atque cumque, veniam assumenda id iure laborum blanditiis fuga aspernatur quos obcaecati eligendi. Provident libero autem molestias veniam nisi numquam minima exercitationem. Maiores voluptas aut enim. Asperiores maiores eligendi reprehenderit ullam quaerat accusantium non vero veritatis, aliquid voluptates. Asperiores adipisci vitae aliquam ab repellendus quibusdam nisi similique magnam? Expedita ea, aut nihil doloremque quibusdam molestias tempora veniam laboriosam! Magnam odit minus ipsum beatae!",
      subText:
        "We value customer feedback and that’s why our workflow, proposals for changes are discussed with you in order to achieve the maximum desired product as soon as possible.",
    },
    {
      title: "How much should I budget for an MVP app?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in dolores beatae reprehenderit, nobis aliquid labore animi, quas amet quos vel itaque odit rerum fugit a nihil odio omnis. Nemo suscipit quos mollitia. Veniam, temporibus illo. Fugiat atque cumque, veniam assumenda id iure laborum blanditiis fuga aspernatur quos obcaecati eligendi. Provident libero autem molestias veniam nisi numquam minima exercitationem. Maiores voluptas aut enim. Asperiores maiores eligendi reprehenderit ullam quaerat accusantium non vero veritatis, aliquid voluptates. Asperiores adipisci vitae aliquam ab repellendus quibusdam nisi similique magnam? Expedita ea, aut nihil doloremque quibusdam molestias tempora veniam laboriosam! Magnam odit minus ipsum beatae!",
      subText:
        "We value customer feedback and that’s why our workflow, proposals for changes are discussed with you in order to achieve the maximum desired product as soon as possible.",
    },
    {
      title: "How long will it take to build MVP?",
      text: "To build a solid product, you need to get it prototyped, designed, developed and tested. To cover all these stages, it will take you about 3 months. So, yes, you need 3 months to build MVP. However, it’s hardly possible to claim something like ‘3 months to spend on MVP development, and I’ll be done with it’. In fact, you’ll never become ‘done’ - because product building is never a destination but an ongoing process. We believe an MVP development is an iterative and incremental process.",
      subText:
        "We value customer feedback and that’s why our workflow, proposals for changes are discussed with you in order to achieve the maximum desired product as soon as possible.",
    },
    {
      title: "So, why 3 months to build MVP?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in dolores beatae reprehenderit, nobis aliquid labore animi, quas amet quos vel itaque odit rerum fugit a nihil odio omnis. Nemo suscipit quos mollitia. Veniam, temporibus illo. Fugiat atque cumque, veniam assumenda id iure laborum blanditiis fuga aspernatur quos obcaecati eligendi. Provident libero autem molestias veniam nisi numquam minima exercitationem. Maiores voluptas aut enim. Asperiores maiores eligendi reprehenderit ullam quaerat accusantium non vero veritatis, aliquid voluptates. Asperiores adipisci vitae aliquam ab repellendus quibusdam nisi similique magnam? Expedita ea, aut nihil doloremque quibusdam molestias tempora veniam laboriosam! Magnam odit minus ipsum beatae!",
      subText:
        "We value customer feedback and that’s why our workflow, proposals for changes are discussed with you in order to achieve the maximum desired product as soon as possible.",
    },
  ];
  return (
    <main>
      <Navbar />
      <section className={`relative ${styles.headerSection} `}>
        <div className="grid grid-cols-6 gap-4 justify-evenly">
          <div className="col-start-1 col-end-5 gap-10 px-10 py-10">
            <h1 className="max-sm:text-center max-md:text-5xl text-6xl font-bold leading-relaxed text-white md:mt-32">
              Bring Your Idea <br /> into Reality
              <span className={`${styles.bussinessText} font-semibold`}>
                Bussiness
              </span>
            </h1>
            <p className="max-sm:text-center text-lg text-white mt-10">
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

      <section className="shadow-2xl pb-80">
        <div className="mt-20 container mx-auto">
          <h2 className="text-5xl font-semibold leading-snug text-center">
            Connect with customers <br /> easily and efficiently
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-500 leading-relaxed text-center">
            Create your product and let us be the part of your bussines journey{" "}
            <br /> to build your own product , we’re really experience with our
            field
          </p>
        </div>
      </section>

      <section className="shadow-2xl pb-28">
        <div className="mt-20 container mx-auto">
          <h2 className="text-5xl font-semibold leading-snug  w-11/12">
            Our process to create a magnificent MVP Product from your idea.
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-500 leading-relaxed w-5/6">
            The key component of the MVP development services for startups is
            the time to market. To launch MVP in 3 months we strictly follow the
            process.
          </p>
          <div className="mt-20 image grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
            <div className="">
              <Image src={frame4} width={370} height={377} />
            </div>
            <div className="">
              <Image src={frame5} width={370} height={377} />
            </div>
            <div className="">
              <Image src={frame6} width={370} height={377} />
            </div>
          </div>
        </div>
      </section>
      <section className="shadow-2xl pb-28">
        <div className="mt-20 container mx-auto">
          <h2 className="text-5xl font-semibold leading-snug  w-11/12">FAQs</h2>
          <p className="mt-6 text-lg font-normal text-gray-500 leading-relaxed w-5/6">
            The key component of the MVP development services for startups is
            the time to market. To launch MVP in 3 months we strictly follow the
            process.
          </p>
          <div className="mt-20 accordion">
            {dataAccordion.map((value, index) => {
              if (expand === value.title) {
                return (
                  <div
                    key={index}
                    className="px-10 py-7 my-6 cursor-pointer shadow-3xl border text-lg border-black font-semibold bg-custom-blue text-white"
                  >
                    <p>{value.title}</p>
                    <p className="text-sm font-light mt-5 leading-loose">
                      {value.text}
                    </p>
                    <p className="mt-11 text-sm font-light mt-5 leading-loose">
                      {value.subText}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="px-10 py-7 my-6 cursor-pointer shadow-3xl border text-lg border-black font-semibold"
                    onClick={() => setExpand(value.title)}
                  >
                    {value.title}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
