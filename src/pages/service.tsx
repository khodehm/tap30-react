import { Banner } from "../components/banner";
import {CarouselAdd, IImages}from '../assets/images/images'
import { MiniCard } from "../components/miniCard";
import { Card } from "../components/card";
import * as react from 'react';
import * as reactRouter from 'react-router-dom';
import { Skeleton } from "../components/skeleton";
import { InstallPrompt } from "../components/install";

export default function Services (){
    const [activeIndex,setActiveIndex]=react.useState(0);
    const route= reactRouter.useNavigate();
    const [dataReady,setDataReady]=react.useState(false)
 
    
    return (
        <>
        <section className="flex flex-col gap-4 mb-8">
             <InstallPrompt/>   
            <div className="flex w-full">
             <Banner/>
            </div>
            <section className="p-4">
                {/* {dataReady? */}
                <div className="grid grid-cols-3 gap-[1rem] w-full max-w-[440px]" dir="rtl">
                  {IImages.map((e:any,i:number)=>{
                      return(
                        <div key={i} onClick={()=>route(e.path)}>

                            <MiniCard className={'flex justify-center  md:max-h-[150]'} key={i} src={e.src} topBanner={e.banner} bannerTitle={e.bannerTitle}title={e.title}/>
                        </div>
                        )
                    })}  
                </div> 
                {/* : */}
                {/* <div className="relative overflow-hidden">

                    <Skeleton className={'bg-[var(--bg-3)] overflow-hidden absolute'} height={"200px"} />               
                </div> */}
                {/* } */}
            </section>
            <section className="flex flex-wrap w-full p-4 overflow-x-auto scroll-snap-x scroll-smooth ease-linear  min-h-[40vh]">
                <div className="flex gap-4  space-x-4 " 
                // onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}  onTouchEnd={handleTochEnd}
                        >
                    {CarouselAdd.map((e:any,i:number)=>{
                        return(
                            <Card key={i} id={i} title={e.title} dsc={e.dsc} color={e.color} src={e.src} hasBtn={e.hasBtn} className={""} btnText={e.btnText} btnBg={e.btnColor}/>

                        )
                    })}
                </div>
            </section>
        </section>
        :
        <section>
            <Skeleton height={"200px"}/>
        </section>
        </>
    )
}