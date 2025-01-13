import React from 'react'

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-orange-500"
        fill="currentColor"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="text-xl font-bold">FikriSpace</span>
    </a>
  )
}

export default Logo