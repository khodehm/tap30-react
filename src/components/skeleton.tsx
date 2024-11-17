import '../styles/components/skeleton.scss';
class ISkeletonProps{
    height:any;
    width?:any='100%';
    className?:any=''
}
export const Skeleton = ({height,width,className}:ISkeletonProps)=>{
    const ShimmerEffect ="before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

    return(
        <div className={`${ShimmerEffect} ${className} relative overflow-hidden`} style={{height:height,width:width}}>

        </div>
    )
}