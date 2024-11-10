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
    className:any

}
export const Card = ({id,title,src,hasBtn,dsc,color,className,btnText,btnBg}:ICardProps)=>{
    return(
        <>
            <section className={`${className} flex flex-shrink-0 scroll-snap-center p-3 relative h-[9rem] rounded-lg  min-w-full`} style={{backgroundColor:color}}>
              <div className="  flex flex-col gap-2 font-vazir-rg">
                    <p className="text-md text-[var(--black)] font-semibold text-md font-vazir-th" style={{color:id===1? "var(--balck)":"var(--light)"}}>{title}</p>
                    <p className="text-sm " style={{color:id===2? "var(--text-2)":"var(--text-1)"}}>{dsc}</p>
                </div>
                {hasBtn && 
                <div className={`absolute bottom-8 right-8 rounded-full py-1 px-2 `} style={{background:btnBg,color:id===2? "var(--light)" : "var(--black)"}} >
                   <button className="flex justify-center gap-2">{btnText} <span className="text-xl"><GoArrowLeft /></span>  </button>
                </div>}
                <div className={`absolute bottom-2 left-0 h-full`} >
                    <img className="w-[150px] h-[150px]" src={src} alt="random picture"/>
                </div>
            </section>
        </>
    )
}