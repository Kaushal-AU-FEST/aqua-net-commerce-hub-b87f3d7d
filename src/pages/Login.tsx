
import React from "react";
import LoginForm from "@/components/Auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-wave bg-cover">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full dolphnet-gradient flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M8,2C6.34,2 5,3.34 5,5V22H7V13H17V22H19V5C19,3.34 17.66,2 16,2H8M16,7H8V5H16V7Z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-dolphin-500 to-ocean-400">
              DOLPHNET
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Unified E-commerce Business Platform
            </p>
          </div>
          
          <div className="glass-card p-8 backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Sign in to your account</h3>
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="wave-divider">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#33c3f0"
            fillOpacity="0.2"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
