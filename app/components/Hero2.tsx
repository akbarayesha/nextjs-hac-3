import React from 'react';

const Hero2 = () => {
  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-[131px] flex flex-col items-center justify-center mb-[399px]">
      {/* Title Section */}
      <div className="w-full text-center">
        <h1 className="font-poppins font-[700] text-[24px] md:text-[28px] lg:text-[32px] text-[#333333]">
          Browse The Range
        </h1>

        {/* Paragraph Section */}
        <p className="mt-[10px] font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#555555]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between mt-[30px] gap-8">
        {/* Dining Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/pic1.png" 
            alt="Dining Area" 
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[381px] h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] md:text-[20px] lg:text-[24px] text-[#333333]">Dining</h2>
        </div>

        {/* Living Room Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/pic2.png" 
            alt="Living Room" 
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[381px] h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] md:text-[20px] lg:text-[24px] text-[#333333]">Living</h2>
        </div>

        {/* Bedroom Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/pic3.png" 
            alt="Bedroom" 
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[381px] h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] md:text-[20px] lg:text-[24px] text-[#333333]">Bedroom</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
