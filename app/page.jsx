'use client';

import ProductCardFeedComponent from "@/components/ProductCardFeedComponent";
import HeroComponent from "@/components/HeroComponent";
import BottomBarComponent from "@/components/BottomBarComponent";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <div>
        <HeroComponent />
        <ProductCardFeedComponent />
        <BottomBarComponent />
      </div>
    </section>
  )
}
