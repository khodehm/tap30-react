import { BsArrowLeft } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { Card } from "../components/card";
import { MiniCard } from "../components/miniCard";
import { CiCreditCardOff } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineStar } from "react-icons/md";

export default function Profile() {
  const cardIconsArray =[
    {title:"کیف پول " ,icon:<CiWallet className="text-[2rem] w-full" />,isFullWidth:false},
    {title:"پرداخت اعتباری" ,icon:<CiCreditCardOff className="text-[2rem] w-full"/>,isFullWidth:false},
    {title:"پشتیبانی" ,icon:<TfiHeadphoneAlt className="text-[2rem] w-full"/>,isFullWidth:false},
    {title:"باشگاه مشتریان" ,icon:<MdOutlineStar className="text-[2rem] w-full"/>,isFullWidth:true, score:"156115"}

  ]
  

  return (
    <>
      <section className="flex flex-col gap-4 relative ">
        {/* fixed header */}
        <div className="fixed top-5 flex gap-2 p-2 bg-[var(--bg-1)]">
          <div className="w-[60px] mr-2">
            <img className="w-full" src="https://app.tapsi.cab/assets/80f52284.svg" alt="profile" />
          </div>

          <div className="p-2">
            <div className=" flex flex-col justify-center  text-[var(--black)]">
              <p className="text-xl font-bold  ">alireza hamidi</p>
              <p className="text-sm font-light  ">09159044570</p>
            </div>
            <div className="absolute right-[20rem] top-5">
              <p className="text-xl text-[var(--text-1)]"><BsArrowLeft/></p>
            </div>
          </div>

        </div>
        <section className={` absolute  top-[7rem] grid grid-cols-3 gap-4 p-4`}>
          {cardIconsArray.map((e:any,i:number)=>{ 
            return(                
              <section  key={i} style={{display:i===3? 'none':''}}>                
                <MiniCard  key={i} className={`flex flex-wrap `} type={"profile"} icon={e.icon} title={e.title} bannerTitle={""}/>
              </section>  
            )
          }
        )}
       
        </section>
        <section className=" absolute top-[15rem] p-4 flex w-full">
          {/* <MiniCard title={cardIconsArray[3].title} className={} icon={cardIconsArray[3].icon} bannerTitle={""} /> */}
          <div className="flex w-full gap-3 justify-between bg-[var(--text-2)] text-[var(--black)] rounded-xl p-4">
           <p className="font-sm  ">{cardIconsArray[3].title}</p>
           <section className="flex gap-2  ">
            <p>{cardIconsArray[3].icon}</p>            
            <p className="flex gap-2">{cardIconsArray[3].score?.replace('6',',6')} <span>امتیاز</span></p>
           </section>
          </div>
        </section>
      </section>
    </>
  );
}
