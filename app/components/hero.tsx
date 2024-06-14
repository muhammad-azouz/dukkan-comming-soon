"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import appImg from "../../public/new-bill.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <section className="text-center mx-auto pb-[100px] pt-10">
        <h1 className="text-4xl mx-auto max-w-3xl mb-7 text-stone-800">
          تنظيم مبيعاتك اصبح سهلا.
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          حوِّل حاسٌوبك أو جهازك اللوحي إلى نقطة بيع قوية. أدر مبيعاتك والمخزون
          والموظفين بسهولة، سواء كنت تملك
          متجرًا واحدًا أو عدة متاجر، فإن أدواتنا تساعدك على تشغيل عملك بكل
          سهولة.
        </p>

        <button
          onClick={() => {
            router.push("https://my.dokaan.co/register");
          }}
          className="my-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl"
        >
          ابدا تجربتك المجانيه لمدة 14 يوم
        </button>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Tilt className="max-w-7xl mx-auto transition ease-in-out">
            <Image className="mx-auto z-10" src={appImg} alt="" />
          </Tilt>
        </motion.div>
      </section>
    </>
  );
}
