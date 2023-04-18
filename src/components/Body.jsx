import React from "react";

function Body() {
  return (
    <main class="w-11/12 mx-auto bg-eerie-black md:w-3/4">
      <div class="flex flex-col gap-y-4 md:grid md:grid-cols-6 md:grid-rows-3 md:gap-x-6 md:gap-y-8 md:w-full">
        <section class="h-28 bg-rose-pompadour text-5xl flex items-center justify-center md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-4">
          FRONTEND
        </section>
        <section class="h-28 bg-mint md:row-start-1 md:row-end-1 md:col-start-4 md:col-end-6"></section>
        <section class="h-28 bg-moonstone hidden md:row-start-1 md:row-end-1 md:col-start-6 md:col-end-7 md:block"></section>

        <section class="h-28 bg-african-violet hidden row-start-2 row-end-2 col-start-1 col-end-2 md:block"></section>
        <section class="h-28 bg-mustard text-5xl flex items-center justify-center row-start-2 row-end-2 col-start-2 col-end-5">
          UI/UX
        </section>
        <section class="h-28 bg-rose-pompadour md:row-start-2 md:row-end-2 md:col-start-5 md:col-end-7"></section>

        <section class="h-28 bg-mint hidden md:row-start-3 md:row-end-3 md:col-start-1 md:col-end-3 md:block"></section>
        <section class="h-28 bg-moonstone hidden md:row-start-3 md:row-end-3 md:col-start-3 md:col-end-4 md:block"></section>
        <section class="h-28 bg-mustard text-5xl flex items-center justify-center md:row-start-3 md:row-end-3 md:col-start-4 md:col-end-7">
          BACKEND
        </section>
      </div>
    </main>
  );
}

export default Body;
