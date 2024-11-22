
import { motion } from 'framer-motion';
import * as react from 'react';
interface IOffCanvasProps{
    title:string ,
    children:any ,
    isOpen:boolean ,
    className : any ,

}
export const OffCanvas = ({title,children,isOpen, className}:IOffCanvasProps) => {
  const [open, setOpen] = react.useState(isOpen); // Control visibility
  const [height, setHeight] = react.useState(200); // Initial height
  const touchStartY = react.useRef<number | null>(null); // Track touch start
  const currentY = react.useRef<number>(0); // Track current drag position
  const minHeight = 200; // Minimum height
  const maxHeight = window.innerHeight - 50; // Maximum height (full screen)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY; // Set starting touch Y
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const deltaY = e.touches[0].clientY - touchStartY.current; // Calculate drag distance
    const newHeight = Math.max(minHeight, Math.min(maxHeight, height - deltaY)); // Constrain height

    setHeight(newHeight);
    currentY.current = deltaY;
  };

  const handleTouchEnd = () => {
    // Snap to the minimum height if dragged down significantly
    if (currentY.current > 50) {
        
      setOpen(!open);
    } else if (currentY.current < -100) {
      setHeight(maxHeight); // Fully open if dragged up
    }

    touchStartY.current = null;
    currentY.current = 0;
  };

  if (!open) return null;

  return (
    <section
      className=" w-full fixed bottom-0  z-50 bg-[var(--bg-1)] transform-cpu  text-[var(--black)]  shadow-3xl cursor-grab rounded-t-xl"
      style={{  
        height: `${height}px`,
        transition: "height 0.2s ease-out",
      }}
     
    >
      {/* Drag Handle */}
      <div  className=" flex items-center justify-center" >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full"  ></div>
      </div>

        <div className='font-bold font-xl border-b-[1px] border-solid border-[var(--border)] p-4' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}> {title} </div>
        {/* Content Area */}
        <div className={`p-4 overflow-y-auto ${className}`} style={{ height: `${height}px`}}>
          {children}
        </div>
    </section>
  );
};
