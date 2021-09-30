import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="https://c.gitcoin.co/avatars/6c1066b29c0473595ace03078ab78920/mingderwang.png"
            alt=""
          ></img>
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Ming-der Wang</p>
              <p className="text-sm leading-tight text-grey-dark">
                Developer at Muzamint.
              </p>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
