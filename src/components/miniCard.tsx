type cardType={
  service:"service",
  profile:"profile"

}
class IMiniCardProps{
  src?:any=null;
  title:any='';
  bannerTitle:any='';
  className?:any=null;
  topBanner?:boolean=false;
  icon?:any;  
  type?:string
}
export const MiniCard = ({className,src,title,topBanner,bannerTitle,icon,type}:IMiniCardProps)=>{
  return(
    <article className={`${className}`}>
    <section className="relative  w-[130px] h-[100px]  overflow-hidden  flex flex-col  justify-center items-center text-center   bg-[var(--text-2)] rounded-lg p-4">
      {topBanner&&<div className="absolute top-0 left-0 px-1 py-[0.1rem] flex justify-center items-centertext-center  bg-[var(--primaryColor)] text-[var(--light)] text-sm rounded-full"> <p className="text-center">{bannerTitle}</p></div>}
      {src&&<div className="flex justify-center h-full w-full"> <img className="min-h-[60px]" src={src} alt="card picture" /></div>}
      {icon&&<div className="flex justify-center h-full w-full">{icon}</div> }
      {type==="service"?
      <div className="flex flex-wrap justify-center items-center h-full  p-1">
        <p className="w-64 font-semibold text-[12px] break-words">{title}</p>
      </div>
      :
      <div className="flex flex-wrap justify-center items-center h-full  p-1">
      <p className="text-md font-vazir w-64 break-words">{title}</p>
    </div>
      }

    </section>
    </article>
  )

}