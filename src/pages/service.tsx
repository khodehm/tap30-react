import { Banner } from "../components/banner";
import {CarouselAdd, IImages}from '../assets/images/images'
import { MiniCard } from "../components/miniCard";
import { Card } from "../components/card";
import * as react from 'react';
export default function Services (){
    const [activeIndex,setActiveIndex]=react.useState(0);
    const [onTouchStart,setOnTouchStart]= react.useState(null);
    const [onTouchEnd,setOnTouchEnd]= react.useState(null);
    const handleTouchStart = (e:any)=>{
        setOnTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove=(e:any)=>{
      setOnTouchEnd(e.targetTouches[0].clientX)

    }
    const handleTochEnd = ()=>{
        if(!onTouchStart || !onTouchEnd) return;
        const distence= onTouchStart- onTouchEnd;
        const swipeHold =50;
        if(distence>swipeHold){
            setActiveIndex((prev)=>(prev + 1)% IImages.length)
        }
        else if(distence< -swipeHold){
            setActiveIndex((prev)=>(prev-1 +IImages.length)%IImages.length)
        }
        setOnTouchStart(null);
        setOnTouchEnd(null);
    }



    return (
        <>
        <section className="flex flex-col gap-4 overflow-x-hidden">
            <div className="flex w-full">
             <Banner/>
            </div>
            <section className="p-4">
                <div className="grid grid-cols-3 gap-[1rem] w-full max-w-[440px]" dir="rtl">
                  {IImages.map((e:any,i:number)=>{
                      return(
                          <MiniCard className={'flex justify-center  md:max-h-[150]'} key={i} src={e.src} topBanner={e.banner} bannerTitle={e.bannerTitle}title={e.title}/>
                        )
                    })}  
                </div>                
            </section>
            <section className="w-full p-4 overflow-x-auto scroll-snap-x scroll-smooth ease-linear">
                <div className="flex gap-4 " onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}  onTouchEnd={handleTochEnd}
                        >
                    {CarouselAdd.map((e:any,i:number)=>{
                        return(
                            <Card key={i} id={i} title={e.title} dsc={e.dsc} color={e.color} src={e.src} hasBtn={true} className={""} btnText={e.btnText} btnBg={e.btnColor}/>

                        )
                    })}
                </div>
            </section>
        </section>
        </>
    )
}