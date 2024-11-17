
export default function DetectPlatform(){
    const platform=window.navigator.userAgent;
    
    if (/android/i.test(platform)) {
        return "android"        
    }
    if(/iPad|iPhone|iPod/.test(platform)){
        return "ios"
    }

    return "web"
    
}