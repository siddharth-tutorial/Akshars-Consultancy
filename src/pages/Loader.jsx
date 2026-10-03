import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      {/* Ripple animation container */}
      <div className="relative w-[120px] h-[120px]">
        <div className="circle one"></div>
        <div className="circle two"></div>
      </div>

      {/* Loading text */}
      <span className="mt-5 font-primary text-xl font-bold text-primaryDark">
        Loading...
      </span>

      {/* Inline CSS for ripple effect */}
      <style>{`
        .circle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #F5B800; /* Using 'gold' from your Tailwind config */
          transform: translate(-50%, -50%);
          opacity: 0.7;
        }

        .circle.one {
          animation: rippleOne 2s infinite ease-in-out;
        }

        .circle.two {
          animation: rippleTwo 2s infinite ease-in-out;
        }

        @keyframes rippleOne {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.7;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }

        @keyframes rippleTwo {
          0%, 40% {
            width: 0px;
            height: 0px;
            opacity: 0.7;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;