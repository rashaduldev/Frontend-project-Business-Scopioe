import { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex overflow-hidden w-full max-w-4xl">
        <div className="w-1/2 p-8">
          <div className="flex justify-start mb-8">
          <h1 className='text-5xl text-blue-600'>LOGO</h1>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-left">Log In To Your Account</h2>
          <p className="text-left mb-6">Welcome Back! Select a method to log in:</p>
          <div className="flex justify-center mb-6">
            <button className="text-black hover:text-white hover:bg-blue-600 text-xl py-2 px-4 rounded mx-2 flex items-center gap-3 border shadow-xl">
            <FcGoogle />
              Google
            </button>
            <button className="text-black hover:text-white hover:bg-blue-600 text-xl py-2 px-4 rounded mx-2 flex items-center gap-3 border shadow-xl">
            <FaFacebookF />
              Facebook
            </button>
          </div>
          <div className="text-center mb-6">Or Continue with Email</div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
              <div 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2 leading-tight" />
                <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-4">
            Dont Have an Account? <a href="/signup" className="text-blue-500 hover:underline">Create Account</a>
          </div>
        </div>
        <div className="w-1/2 relative hidden lg:block">
          <img src="https://i.ibb.co/y8XFwSs/Rectangle-9593.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold text-center bg-[#4950349f] p-10 rounded-lg"><a className="text-blue-600" href="#">Sign In</a> to view all the <br/> massage therapists</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
