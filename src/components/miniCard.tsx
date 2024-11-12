class IMiniCardProps{
  src?:any=null;
  title:any='';
  bannerTitle:any='';
  className?:any=null;
  topBanner?:boolean=false;
  icon?:any;
  
}
export const MiniCard = ({className,src,title,topBanner,bannerTitle,icon}:IMiniCardProps)=>{
  return(
    <article className={`${className}`}>
    <section className="relative  w-[130px] h-[100px]  overflow-hidden  flex flex-col  justify-center items-center text-center   bg-[var(--text-2)] rounded-lg p-4">
      {topBanner&&<div className="absolute top-0 left-0 px-1 py-[0.1rem] flex justify-center items-centertext-center  bg-[var(--primaryColor)] text-[var(--light)] text-sm rounded-full"> <p className="text-center">{bannerTitle}</p></div>}
      {src&&<div className="flex justify-center h-full w-full"> <img className="min-h-[60px]" src={src} alt="card picture" /></div>}
      {icon&&<div className="flex justify-center h-full w-full">{icon}</div> }
      <div className="flex flex-wrap justify-center items-center h-full  p-1">
        <p className="    font-semibold text-[12px]">{title}</p>
      </div>
    </section>
    </article>
  )

}