import { useState } from 'react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        <div className="md:w-1/2 p-8">
          <h1 className='text-5xl my-5 text-blue-600'>LOGO</h1>
          <h2 className="text-2xl font-bold mb-4">Sign In To Your Account</h2>
          <p className="text-sm mb-4">
            Welcome Back! By clicking the sign-up button, you agree to Zeniatod Terms and Service and acknowledge the <a href="#" className="text-blue-500">Privacy and Policy</a>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Name</label>
              <input id="username" type="text" placeholder="@username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" />
              <div 
                className="absolute inset-y-0 right-0 pr-3 top-7 text-lg flex items-center leading-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </div>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Re-type password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" />
              <div 
                className="absolute inset-y-0 right-0 top-7 text-lg pr-3 flex items-center leading-5 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </div>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Accept Terms of Service</span>
              </label>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign up</button>
          </form>
          <p className="mt-4 text-sm">
            Already Have an Account? <a href="/login" className="text-blue-500">Log in</a>
          </p>
        </div>
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('https://i.ibb.co/y8XFwSs/Rectangle-9593.png')` }}>
          <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center p-8">
            <div className="fixed">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Create Account</h3>
              <p>Fill in Your Information</p>
            </div>
            <div className="flex mt-[500px]">
              <span className="w-2 h-2 bg-blue-600 rounded-full mx-1"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
