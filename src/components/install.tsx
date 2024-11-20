import toast from "react-hot-toast";
import * as react from 'react';
import DetectPlatform from "../shared/services/platformDetector";
import { CgClose } from "react-icons/cg";

export const InstallPrompt = () =>{
  const [isInstallable,setIsInstallable]=react.useState<boolean>(Boolean(!localStorage.getItem("dismissPrompt")));
  const [platform,setPlatform]=react.useState<boolean>(Boolean(DetectPlatform()==="android"));
  const [promptEvent, setPromptEvent]=react.useState<any>();
  
  const handleBeforeInstallPrompt=async(event:any)=>{
    event.preventDefault()
    setIsInstallable(true); 
    setPromptEvent(event);
    console.log("App is installable");      
  }

  const handleCloseClick = () => {
    localStorage.setItem('dismissPrompt',"true");
    setIsInstallable(false);
  }

  react.useEffect(()=>{      
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt",handleBeforeInstallPrompt);
    }
  },[isInstallable])
  
  const handleInstallClick = async () => {
    if(promptEvent&&platform){
      promptEvent.prompt();
      const choiceResult = await promptEvent.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
        toast.success("برنامه با موفقیت نصب شد!");
      } else {        
        console.log(promptEvent);
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

  return(    
    <>
      {isInstallable && platform &&
        <div className="relative w-full top-0 bg-[var(--primaryColor)] flex justify-between items-center p-2 rounded-md ">
          <div className="flex justify-between items-center gap-4">
            <CgClose onClick={handleCloseClick}/>
            <p className="font-medium text-[var(--light)]">همین الان وب آپ رو نصب کن!!</p>
          </div>
          <button className="flex gap-3 mt-2 justify-center bg-[var(--secondary)] w-[5rem] text-[var(--light)] text rounded-full p-1"
          onClick={handleInstallClick}>نصب</button>
        </div>
      }
    </>
  )
}

