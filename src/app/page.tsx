
// 'use client';
import Banner from "./components/Banner";
import ProductBlock from "./components/ProductBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner/>
      <ProductBlock />
    </main>
  );
}
