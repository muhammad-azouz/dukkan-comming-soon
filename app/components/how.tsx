import React from "react";

export default function HowToUse() {
  return (
    <section className="max-w-7xl  relative top-[-2.5rem] mx-auto">
      <h1 className="text-center text-3xl mb-10">كيف استخدم تطبيق دكان</h1>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <iframe
          className="w-full aspect-2"
          src="https://www.youtube.com/embed/r68cICgHrwM"
          title="الحصري سوره النجم"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="bg-black w-full text-white text-lg font-bold flex justify-center items-center">
          SOON
        </div>
        <div className="bg-black w-full text-white text-lg font-bold flex justify-center items-center">
          SOON
        </div>
      </div>
    </section>
  );
}
