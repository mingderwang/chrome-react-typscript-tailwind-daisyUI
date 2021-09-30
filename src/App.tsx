import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className="avatar">
            <div className="mb-8 rounded-full w-24 h-24">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
            </div>
          </div>
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Ming-der Wang</p>
              <p className="text-sm leading-tight text-grey-dark">
                Developer at Muzamint.
              </p>
            </div>
            <div>
              <button className="btn btn-primary">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
