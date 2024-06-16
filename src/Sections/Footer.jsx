import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#024950] text-white py-6 px-4 md:px-6">
    <div className="container mx-auto flex items-center justify-between flex-row sm:flex-col">
      <p className="text-sm">© 2024 Anchal Deshmukh</p>
      {/* <nav className="flex gap-4 flex-row sm:flex-col" data-id="71">
        <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
          Terms of Service
        </Link>
        <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
          Privacy Policy
        </Link>
        <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
          Contact Us
        </Link>
      </nav> */}
    </div>
  </footer>
  )
}

export default Footer