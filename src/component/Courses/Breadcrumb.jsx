import { ChevronRight } from 'lucide-react'

export function Breadcrumb({ items }) {
  return (
    <nav className="flex bg-gray-100 p-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
            )}
            {index === items.length - 1 ? (
              <span className="text-sm font-medium">{item.label}</span>
            ) : (
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}