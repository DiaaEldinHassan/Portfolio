import React from "react";
import personalImg from "../../../assets/1000121881.jpg";

const Avatar = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
      <div className="relative max-w-sm lg:max-w-md w-full">

        <div className="relative group">

          <div className="relative overflow-hidden rounded-3xl">
 
            <img
              src={personalImg}
              alt="Diaa Hassan"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
   
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            
        
            <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 border-[#C4C4C4]/30 rounded-tr-3xl"></div>
            
          
            <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 border-[#C4C4C4]/30 rounded-bl-3xl"></div>
          </div>
          
      
          <div className="absolute -top-4 -right-4 flex flex-col gap-2"> 
            <div className="bg-[#C4C4C4] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-110 transition-transform">
              Node.js
            </div>
            <div className="  bg-[#8B8B8B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-110 transition-transform ml-4  ">
              MongoDB
            </div>
            <div className="bg-[#C4C4C4] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-110 transition-transform ml-8">
              React.js
            </div>
          </div>
          
 
          <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border-2 border-[#C4C4C4] rounded-2xl p-4 shadow-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#C4C4C4]">1+</div>
              <div className="text-xs text-[#909090]">Years of</div>
              <div className="text-xs text-[#909090]">Experience</div>
            </div>
          </div>
          

          <div className="absolute bottom-6 right-6 text-right">
            <h3 className="text-2xl font-bold text-[#C4C4C4] drop-shadow-lg">Diaa</h3>
            <h3 className="text-3xl font-bold text-[#C4C4C4] drop-shadow-lg">Hassan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;