
import Link from 'next/link'
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-orange-500">AlifShop</a>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Qidirish..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiHeart className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiShoppingCart className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  )
}