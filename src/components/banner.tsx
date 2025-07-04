import { GoArrowLeft } from "react-icons/go";
import { packageImage } from "../assets/images/images";

export const Banner = () => {
  return (
    <>
      <section className="relative flex flex-col gap-3 bg-[var(--secondary)] w-full" dir="ltr">
        <div>
          <p className="absolute right-4 top-5 text-xl font-extrabold text-[var(--light)]">
            ارسال رایگان بسته با تپسی
          </p>
        </div>
        <div className="flex flex-wrap">
          <p className="absolute right-4 top-12 text-md text-balancefont-mono text-[var(--text-2)]" dir="rtl">
            ویژه ارسال اول با اتوپیک و موتوپیک
          </p>
          <p className="absolute right-4 top-[4.2rem] text-md text-balancefont-mono text-[var(--text-2)]"> MPEYK :کد</p>
        </div>

        <div className="absolute bottom-[2rem]  right-5">
          <button className="flex flex-row-reverse gap-3 items-center bg-[var(--btn-banner)] text rounded-full p-1 text-[var(--black)]">
            <span>دریافت تخفیف</span>
            <span className="text-xl"><GoArrowLeft /></span> 
          </button>   
        </div>
        
        <div className="h-[140px]">
          <img className="animate-move-in-left h-full w-auto object-contain" src={packageImage.package} alt="" />
        </div>
      </section>
    </>
  );
};
