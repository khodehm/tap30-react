import { Link } from 'react-router-dom';
import * as react from 'react';
import pic from '../assets/svgs/void.svg';
export default function NoMatch (){
    react.useEffect(()=>{
        document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", "#fff");
    },[])
    return(
        <>
        <section className="flex justify-center flex-col gap-4 items-center text-center h-[100vh]">
            <p className="text-3xl font-bold">Oops! That's  404 </p>
            <div className='flex justify-center  h-[50%]'>
                <img src={pic} alt="" />
            </div>
          <button className="flex gap-3 mt-2 justify-center bg-[var(--black)] w-[5rem] text-[var(--light)] text rounded-full p-1"
           >{<Link to={'/'}>بازگشت</Link>}</button>
        </section>
        </>
    )
}