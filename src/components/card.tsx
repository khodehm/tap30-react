import { GoArrowLeft } from "react-icons/go";

interface ICardProps{
    id:number
    title:any;
    dsc:any;    
    color:any;
    src:any;
    hasBtn:boolean
    btnText?:any;
    btnBg:any;
    className?: any

}
export const Card = ({id,title,src,hasBtn,dsc,color,className,btnText,btnBg}:ICardProps)=>{
    return(
        <>
        {title&&
        
            <section className={`${className} flex flex-shrink-0 scroll-snap-center p-3 relative h-[9rem] rounded-xl  min-w-full`} style={{backgroundColor:color}}>
                <div className="  flex flex-col gap-2  ">
                    <p className="text-md text-[var(--black)] font-semibold text-md  " style={{color:id===1? "var(--balck)":"var(--light)"}}>{title}</p>
                    <p className="text-sm " style={{color:id===2? "var(--text-2)":"var(--text-1)"}}>{dsc}</p>
                </div>
                {hasBtn && 
                    <div className={`absolute bottom-8 right-8 rounded-full py-1 px-2 `} style={{background:btnBg}} >
                       <button className="flex justify-center gap-2">{btnText} <span className="text-xl"><GoArrowLeft /></span>  </button>
                    </div>
                }
                {src&&
                    <div className={`absolute bottom-2 w-28 h-28  overflow-hidden  left-0`} style={{borderRadius:id===1? '50%':''}}>
                        <img className="h-full w-full object-fill" src={src} alt="random picture"/>
                    </div>
                }
            </section>
        }
        </>
    )
}