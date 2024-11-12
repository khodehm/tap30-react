import * as react from 'react';
import { EmptyDisCount } from '../assets/svgs/emptyDiscount';
export default function Discounts (){
    const [discounts,setDiscounts]=react.useState([]);
    const [tabIndex,setTabIndex]=react.useState<number>(0);
    const btnList=[
        {id:1,text:"همه"},
        {id:2,text:"تپسی"},
        {id:3,text:"پیک فوری"},
    ]
    return (
        <article className=' flex flex-col gap-4 h-full'>
            <p className='mt-4   text-xl '>تخفیف های شما</p>
            <div className='flex gap-3  bg-[var(--bg-1)]'>
                {btnList.map((e:any,i:number)=>{
                    return(

                        <button key={i} className={`bg-[var(--light)] text-[var(--black)] p-2 min-w-16 rounded-full ${tabIndex===i? 'bg-[var(--tab-btn)] border-[1px] border-solid border-[var(--black)] ':''}`}
                         onClick={()=>setTabIndex(i)}>{e.text}</button>

                    )
                })} 
            </div>
            <section className=''>
                {discounts.length>0?
                discounts!.map(()=>{return ""})
                :
                <div className=' flex justify-center items-center h-[75vh]  bg-[var(--bg-3)] overflow-hidden'>
                    <div className='flex flex-col justify-center items-center p-4'>
                        <EmptyDisCount/>
                        <p className='font-vazir-black font-bold text-xl text-[var(--text-1)]'>شما در حال حاضر کد تخفیفی ندارید.</p>
                    </div>
                </div>
                }
            </section>
        </article>
    )
}