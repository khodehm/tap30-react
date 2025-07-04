import { DiscountSvg } from "../assets/svgs/discountSvg.tsx";
import { ProfileSvg } from "../assets/svgs/profileSvg.tsx";
import {ServiceSvg} from "../assets/svgs/serviceSvg.tsx";
import *as react from 'react';
import * as reactRouter  from 'react-router-dom';
export const NavigationMenu = ()=>{
    const [activeIndex,setActiveIndex]=react.useState<any>(null);
    const [isClicked,setIsClicked]=react.useState<boolean>(false);
    const route = reactRouter.useNavigate()
    const navItems:any[]= [
        {name:"سرویس ها",path:"services",color:"", icon:<ServiceSvg />},
        {name:"تخفیف ها",path:"discounts",color:"", icon:<DiscountSvg/>},
        {name:"پروفایل",path:"profile",color:"", icon:<ProfileSvg/>},

    ]
    const handlenavClick=(index:any,path:string)=>{
        setActiveIndex(index);
        setIsClicked(true);
        setTimeout(()=>{
            setIsClicked(false)

        },150)
        route(path)
    }

    return(
        <section className="fixed  bottom-0 left-0 z-50 w-full md:w-[400px] bg-[var(--bg-1)]/90 backdrop-blur-3xl md:flex justify-center md:items-center h-auto  border-t  border-[$border]" dir="rtl">
            <div className="flex justify-around mb-2 w-full gap-4 h-full max-w-lg mx-auto">
                {navItems.map((e:any,i:number)=>{
                   return(
                       <button key={i} type="button" className={`inline-flex flex-col-reverse  items-center justify-center p-4 text-sm transform transition-transform duration-150 ease-in-out ${isClicked&&activeIndex===i? 'scale-110':' scale-100'}`}   
                       onClick={()=>handlenavClick(i,e.path)}
                       >                           
                            <span className={`${activeIndex===i? 'text-[var(--black)]':'text-[var(--text-1)]'}`}>{e.name} </span>
                            <span className={`${activeIndex===i? ' text-[var(--light)] overflow-hidden':'text-[var(--text-1)]'}`}>{react.cloneElement(e.icon,{isActive:activeIndex===i})}</span>
                                            
                        </button>
                   ) 
                })}
            </div>
        </section>
    )

}
