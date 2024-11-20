import { DiscountSvg } from '../assets/svgs/discountSvg';
import { EmptyDisCount } from '../assets/svgs/emptyDiscount';
import name from '../assets/svgs/void.svg';
export const Empty = (props:any)=>{
    const detectSvgType = ()=>{
        switch (props.svg){
            case "discount":
            return <EmptyDisCount/>;
        }
    }
    return(
        <>
        <section className='flex flex-col justify-center items-center gap-8 w-full'>
            <div className=' w-full justify-center items-center'>
                <div className='object-contain'>
                    {detectSvgType()}

                </div>
                {/* <img className='w-full' src={detectSvgType()} alt="svg" /> */}
            </div>
            <div>
                <p className='font-bold text-xl text-[var(--text-1)]'>{props.title}</p>
            </div>
        </section>
        </>
    )
}