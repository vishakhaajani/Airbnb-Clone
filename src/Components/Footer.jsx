import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="h-14 fixed bottom-0 w-screen bg-white flex justify-between items-center px-16">
                <div className="flex space-x-2 text-sm font-base">
                    <p>© 2023 Airbnb, Inc.</p>
                    <p>·</p>
                    <p>Privacy</p>
                    <p>·</p>
                    <p>Terms</p>
                    <p>·</p>
                    <p>Sitemap</p>
                    <p>·</p>
                    <p>Company details</p>
                </div>
                <div className="flex space-x-4 text-sm font-medium">
                    <span className="material-symbols-outlined">language</span>
                    <p>English(IN)</p>
                    <p>₹ INR</p>
                    <p>Support & resources</p>
                </div>
        </footer>
    </div>
  )
}

export default Footer
