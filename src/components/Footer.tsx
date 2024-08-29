import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Kompaniya</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Biz haqimizda</a></li>
              <li><a href="#" className="hover:text-orange-500">Vakansiyalar</a></li>
              <li><a href="#" className="hover:text-orange-500">Hamkorlik</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Mijozlarga</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Yetkazib berish</a></li>
              <li><a href="#" className="hover:text-orange-500">To'lov usullari</a></li>
              <li><a href="#" className="hover:text-orange-500">Qaytarish shartlari</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li>+998 71 200 01 05</li>
              <li>info@alifshop.uz</li>
              <li>Toshkent sh., Mirzo Ulug'bek t., 22-uy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-orange-500">Facebook</a>
              <a href="#" className="text-2xl hover:text-orange-500">Instagram</a>
              <a href="#" className="text-2xl hover:text-orange-500">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
