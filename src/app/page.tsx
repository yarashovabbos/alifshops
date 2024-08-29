"use client";  // Add this line at the top

import { useEffect } from 'react';
import Head from 'next/head';
import { useProductStore } from '../store/productStore';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

export default function Home() {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>AlifShop Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4">
        <Banner />
        <ProductSection title="Chegirmalar 🔥" />
        <ProductSection title="Sizni qiziqtirishi mumkin" />
        <ProductSection title="BQ uskunalari chegirma bilan" />
        <ProductSection title="Maktab bozori" />
        <ProductSection title="Goodwell maishiy texnikasi" />
      </main>
      <Footer />
    </div>
  );
}
