"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import Navbar from "@/components/ui/NavBar"; 

// Secciones principales de la pastelería
const SectionHome = dynamic(() => import("../SectionHome"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionAboutUs = dynamic(() => import("../SectionAboutUs"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionCatalog = dynamic(() => import("../SectionCatalog"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionServices = dynamic(() => import("../SectionServices"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionGallery = dynamic(() => import("../SectionGallery"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionHowToBuy = dynamic(() => import("../SectionHowBuy"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})
const SectionContact = dynamic(() => import("../SectionContact"), {
  loading: () => <div className="h-96 bg-pink-50 animate-pulse" />,
})

export default function PasteleriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <main className="bg-[#fffaf0] overflow-x-hidden">
        <Navbar />

        <Suspense fallback={<div className="h-96 bg-pink-50 animate-pulse" />}>
          <SectionHome />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-pink-50 animate-pulse" />}>
          <SectionAboutUs />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-pink-50 animate-pulse" />}>
          <SectionHowToBuy />
        </Suspense>

        
      </main>
    </div>
  )
}
