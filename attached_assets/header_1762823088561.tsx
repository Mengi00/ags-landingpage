"use client"

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-blue-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            A
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">AGS</div>
            <div className="text-xs font-semibold text-gray-600">WebSIL</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-2 rounded-full border border-blue-200 group cursor-pointer hover:border-blue-400 transition-all duration-300">
          <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-900">Gestión de Licencias</span>
        </div>
      </div>
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>
    </header>
  )
}
