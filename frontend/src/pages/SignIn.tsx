import React, { useState } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: 'jonas.kahnwald@gmail.com',
    otp: '',
    keepLoggedIn: false
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGetOtp = () => {
    setOtpSent(true);
    alert('OTP has been sent to your email!');
  };

  const handleResendOtp = () => {
    alert('New OTP has been sent to your email!');
  };

  const handleVerifyOtp = () => {
    if (formData.otp.length === 6) {
      setIsVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify your OTP first');
      return;
    }
    alert('Signed in successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign in</h1>
          <p className="text-gray-600 text-center mb-8">Please login to continue to your account.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                OTP
              </label>
              <div className="flex space-x-2">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  disabled={!otpSent}
                />
                <button
                  type="button"
                  onClick={otpSent ? handleVerifyOtp : handleGetOtp}
                  className={`px-4 py-3 rounded-lg font-medium ${otpSent ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white transition duration-300 whitespace-nowrap`}
                >
                  {otpSent ? 'Verify OTP' : 'Get OTP'}
                </button>
              </div>
              {otpSent && (
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">Enter the OTP sent to your email</p>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Resend OTP
                  </button>
                </div>
              )}
              {isVerified && (
                <p className="text-sm text-green-500 mt-2 flex items-center">
                  <i className="fas fa-check-circle mr-1"></i> OTP verified successfully!
                </p>
              )}
            </div>
            
            <div className="flex items-center">
              <input
                id="keepLoggedIn"
                name="keepLoggedIn"
                type="checkbox"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="keepLoggedIn" className="ml-2 block text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Need an account? <Link to={"/signup"} className="text-blue-600 font-medium hover:underline">Create one</Link>
            </p>
          </div>
        </div>
        
        {/* Welcome Section */}
       <WelcomeSection/>
      </div>
    </div>
  );
};

export default SignInPage;