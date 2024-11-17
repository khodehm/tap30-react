import * as react from 'react';
import { EmptyDisCount } from '../assets/svgs/emptyDiscount';
import { Empty } from '../components/empty';
export default function Discounts (){
    const [discounts,setDiscounts]=react.useState([]);
    const [tabIndex,setTabIndex]=react.useState<number>(0);
    const btnList=[
        {id:1,text:"همه"},
        {id:2,text:"تپسی"},
        {id:3,text:"پیک فوری"},
    ]
    return (
        <article className='h-full'>
            <section className='p-4 flex flex-col gap-5 '>
            <p className='font-medium text-lg '>تخفیف های شما</p>
            <div className='flex gap-3  bg-[var(--bg-1)]'>
                {btnList.map((e:any,i:number)=>{
                    return(
                        <button key={i} className={`bg-[var(--light)] text-[var(--black)] border-solid border-[1px] p-2 min-w-16 rounded-full `}
                        style={{background:tabIndex===i?"var(--tab-btn)":"",borderColor:tabIndex===i? "border-[var(--black)] ":""}}
                        onClick={()=>setTabIndex(i)}>{e.text}</button>
                    )
                })} 
            </div>
            </section>
            <section className=''>
                {discounts.length>0?
                discounts!.map(()=>{return ""})
                :
                <div className=' flex justify-center items-center h-[75vh]  bg-[var(--bg-3)] overflow-hidden'>
                    <div className='flex flex-col justify-center items-center w-full p-4'>
                        <Empty title={"شما در حال حاضر کد تخفیفی ندارید."} svg={"discount"}/>
                    </div>
                </div>
                }
            </section>
        </article>
    )
}