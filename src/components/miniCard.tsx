class IMiniCardProps{
  src:string='';
  title:any='';
  bannerTitle:any='';
  className?:any=null;
  topBanner?:boolean=false 
}
export const MiniCard = ({className,src,title,topBanner,bannerTitle}:IMiniCardProps)=>{
  return(
    <article className={`${className}`}>
    <section className="relative flex w-[150px] h-[100px]  overflow-hidden flex-col justify-center items-center text-center   bg-[var(--bg-2)] rounded-md p-4">
      {topBanner&&<div className="absolute top-0 left-0 px-1 py-[0.1rem] flex justify-center items-centertext-center  bg-[var(--primaryColor)] text-[var(--light)] text-sm rounded-full"> <p className="text-center">{bannerTitle}</p></div>}
      <div className="flex justify-center h-full w-full"> <img className="min-h-[60px]" src={src} alt="card picture" /></div>
      <div className="flex justify-center items-center h-full  p-1">
        <p className="font-vazir-rg font-semibold text-[12px]">{title}</p>
      </div>
    </section>
    </article>
  )

}