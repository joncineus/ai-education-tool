import React from 'react'
import { Search } from 'lucide-react'
import Logo from './Logo'

const NavigationBar = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Quizzes', href: '/quiz' },
    { title: 'Study Assistant', href: '/study-assistant' },
  ]

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-gray-900"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600">
              Upload Notes
            </button>
           
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar