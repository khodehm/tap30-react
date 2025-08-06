import { Banner } from "../components/banner";
import { CarouselAdd, IImages } from "../assets/images/images";
import { MiniCard } from "../components/miniCard";
import { Card } from "../components/card";
import * as react from "react";
import * as reactRouter from "react-router-dom";
import { Skeleton } from "../components/skeleton";
import { InstallPrompt } from "../components/install";

export default function Services() {
  return (
    <>
      <section className="flex flex-col gap-4 mb-8">
        <InstallPrompt />
        <div className="flex w-full">
          <Banner />
        </div>
        <ServiceGrid/>
        <AddsCarousel/>      
      </section>
      :
      <section>
        <Skeleton height={"200px"} />
      </section>
    </>
  );
}
function AddsCarousel(){
    return(
         <article className="flex flex-wrap w-full p-4 overflow-x-auto scroll-snap-x scroll-smooth ease-linear  min-h-[40vh]">
          <section className="flex gap-4 space-x-4">
            {CarouselAdd.map((e: any, i: number) => {
              return (
                <Card
                  key={i}
                  id={i}
                  title={e.title}
                  dsc={e.dsc}
                  color={e.color}
                  src={e.src}
                  hasBtn={e.hasBtn}
                  btnText={e.btnText}
                  btnBg={e.btnColor}
                />
              );
            })}
          </section>
        </article>
    )
}
function ServiceGrid(){
  const route = reactRouter.useNavigate();
    return(
        <article className="flex justify-center items-center px-4 sm:py-4">
          <section
            className="grid grid-cols-3 gap-4 w-full"
            dir="rtl"
          >
            {IImages.map((e: any, i: number) => {
              return (
                <div key={i} onClick={() => route(e.path)}>
                  <MiniCard
                    className={"flex justify-center md:max-h-[150]"}
                    key={i}
                    src={e.src}
                    topBanner={e.banner}
                    bannerTitle={e.bannerTitle}
                    title={e.title}
                  />
                </div>
              );
            })}
          </section>
        </article>
    )
}