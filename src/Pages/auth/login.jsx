import React from 'react'

function login() {
  return (
    <div className="bg-[#b5651d] rounded-lg p-8 w-80 text-center">
        <h1 className="text-white text-2xl font-bold mb-6">Cafe Lover</h1>
            <form>
                <div className="mb-4">
                    <label type="email" className="block text-white text-left mb-2">email address</label>
                    <div className="relative">
                        <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-300" placeholder="Yourname@gmail.com" />
                        <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label type="password" className="block text-white text-left mb-2">Password</label>
                        <div className="relative">
                            <input type="password" id="password" className="w-full p-3 rounded-lg border border-gray-300" value="********************" />
                            <i className="fas fa-check-circle absolute right-3 top-3 text-green-500"></i>
                        </div>
                        <p className="text-green-500 text-left mt-2">Password is strong</p>
                    </div>
                    <div className="text-right mb-4">
                        <a href="#" className="text-white">Forgotten your password?</a>
                    </div>
                        <p className="text-white mb-4">Don't have an account? <a href="#" className="font-bold">Sign up</a></p>
                        <button type="submit" className="bg-[#4b3621] text-white w-full py-3 rounded-lg mb-4">Log in</button>
                    </form>
                </div>
            );
}

export default login