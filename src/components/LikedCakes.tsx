"use client";

import React from "react";
import { Heart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const LikedCakesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-pink-500 transition-colors text-gray-300">
          <Heart size={22} />
          <span className="sr-only">Pasteles Favoritos</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tus Pasteles Favoritos</SheetTitle>
          <SheetDescription>
            Aquí verás los pasteles que has marcado como favoritos.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 text-center text-muted-foreground">
          <p>Aún no tienes pasteles favoritos.</p>
          <p>¡Explora nuestro catálogo y añade algunos!</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LikedCakesSheet;