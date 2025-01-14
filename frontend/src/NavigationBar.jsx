import React from 'react'
import { Search } from 'lucide-react'
import Logo from './Logo'

const NavigationBar = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Quizzes', href: '/quizzes' },
    { title: 'Community', href: '/community' },
    { title: 'Study Assistant', href: '/study-assistant' },
    { title: 'Premium Theme', href: '/premiumtheme' },
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
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <a
              href="/login"
              className="text-gray-600 hover:text-gray-900"
            >
              Login / Register
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar