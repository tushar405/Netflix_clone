import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertname = name.trim().split(" ");
    const finalname = alertname.length >= 2;
    const alertpassword = password.length >= 8;

   
    if (!finalname && !alertpassword) {
      alert("Please enter your full name and a password with at least 8 characters.");
    } else if (!finalname) {
      alert("Please enter your full name.");
    } else if (!alertpassword) {
      alert("Password must be at least 8 characters long.");
    } else {
      alert("Login successfully!");
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center min-h-screen py-10">
        <form
          onSubmit={handleSubmit}
          className="p-16 text-white rounded-md"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.76)" }}
        >
          <h2 className="text-3xl font-bold mb-7">Sign In</h2>

       
          <div className="mb-6">
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
              required
            />
          </div>

      
          <div className="mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
              required
            />
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={() => setShowPassword(!showPassword)} 
                />
                <label className="text-gray-400 font-light text-sm">
                  Remember 
                </label>
              </div>
              <p className="font-light text-sm text-gray-400">Need help?</p>
            </div>
          </div>

        
          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#e50815] w-full py-3 rounded-md"
            >
              Sign In
            </button>
          </div>

         
          <div className="mb-4">
            <p>
              <span className="font-light text-gray-400">New to Netflix?</span>{" "}
              <span className="hover:underline cursor-pointer font-light">
                Sign up now.
              </span>
            </p>
          </div>

          <div className="mb-10">
            <p className="text-xs text-gray-400">
              This page is protected by Google reCAPTCHA to <br /> ensure you're
              not a bot. <span className="text-blue-600">Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
