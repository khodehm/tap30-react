import toast from "react-hot-toast";
import * as react from 'react';
import DetectPlatform from "../shared/services/platformDetector";

export const InstallPrompt = () =>{
  const [isInstallable,setIsInstallable]=react.useState<boolean>(false);
  const [platform,setPlatform]=react.useState<string>(DetectPlatform());
  const [promptEvent, setPromptEvent]=react.useState<any>();
  react.useEffect(()=>{
    setPlatform(DetectPlatform());    
    console.log(platform);    
  },[platform]);
  
  
  const handleBeforeInstallPrompt=async(event:any)=>{
    event.preventDefault()
    setIsInstallable(true); 
    setPromptEvent(event);
    console.log("App is installable");      
  }
  react.useEffect(()=>{      
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    }
  },[isInstallable])
  
  const handleInstallClick = async () => {
    if(promptEvent){

      promptEvent.prompt();
    const choiceResult = await promptEvent.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
      toast.success("برنامه با موفقیت نصب شد!");
    } else {
      console.log("User dismissed the install prompt");
    }
    // Reset the deferred prompt
    setPromptEvent(null);
    setIsInstallable(false);
    // Disable the install button after the prompt
   }
   else{
    console.log("no prompt event available");
    
   }
  }    
 

  
  if(isInstallable){

    return(
   
      <div><button onClick={handleInstallClick}>install</button></div>
    )
  }
}


// toast.custom((t ) => (
//   <div
//     className={`max-w-md w-full flex justify-between bg-white backdrop-blur-sm rounded-lg`}
//     >
//     <div className="flex-1 w-0 p-4">
//       <div className="flex items-start">
//         <div className="ml-3 flex-1">
//           <p className="text-sm font-medium">
//             نصب وب آپ تبسی
//           </p>
//           <p className="mt-1 text-sm text-[var(--text-1)]">
//            همین الان تپ سی رو نصب کن!
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="flex  ">
//       <button
//         onClick={() => { handleInstallClick(),toast.dismiss(t.id)}}
//        className="flex flex-row-reverse gap-3 items-center bg-[var(--btn-banner)] text rounded-full p-1 text-[var(--black)]"
//       >
//         نصب
//       </button>
//     </div>
//   </div>
// ),
// )