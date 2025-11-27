export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full" />
          <div>
            <div className="font-bold">Beautyflow AI</div>
            <div className="text-xs text-gray-500">Your salon assistant</div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/demo" className="text-gray-700 hover:text-indigo-600">Demo</a>
          <a href="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</a>
        </nav>
      </div>
    </header>
  )
}
