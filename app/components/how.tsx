import React from "react";

export default function HowToUse() {
  return (
    <section className="max-w-7xl  relative top-[-2.5rem] mx-auto">
      <h1 className="text-center text-3xl mb-10">كيف استخدم تطبيق دكان</h1>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="bg-black w-full text-white text-lg font-bold flex justify-center items-center flex-col">
          <video className="w-full h-full" controls>
            <source
              src="https://www.dropbox.com/scl/fi/gs0wgf75ns3on7pin4ma2/.mp4?rlkey=3lhl1z7n8dm0dvh9luw0puyhs&st=8hlc1l76&raw=1"
              type="video/mp4"
            />
          </video>
          <div>الاشتراك بالتطبيق</div>
        </div>
        <div className="bg-black w-full text-white text-lg font-bold flex justify-center items-center flex-col">
          <video width="100%" height="100%" controls={true}>
            <source
              src="https://www.dropbox.com/scl/fi/hd5itizzwlc16wkw9ehaz/.mp4?rlkey=fcfk8ylxmbg4pxm0qelru2mqs&st=hqfkwsj3&raw=1"
              type="video/mp4"
            />
          </video>
          <div>الاصناف</div>
        </div>
        <div className="bg-black w-full text-white text-lg font-bold flex justify-center items-center flex-col">
          SOON
          {/* <video className="w-full h-full" controls> */}
          {/*   <source */}
          {/*     src="https://www.dropbox.com/scl/fi/gs0wgf75ns3on7pin4ma2/.mp4?rlkey=3lhl1z7n8dm0dvh9luw0puyhs&st=8hlc1l76&raw=1" */}
          {/*     type="video/mp4" */}
          {/*   /> */}
          {/* </video> */}
          {/* <div>الاشتراك بالتطبيق</div> */}
        </div>
      </div>
    </section>
  );
}
