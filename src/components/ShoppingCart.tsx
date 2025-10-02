"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const ShoppingCartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-pink-500 transition-colors text-gray-300">
          <ShoppingBag size={22} />
          <span className="sr-only">Carrito de Compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tu Carrito de Compras</SheetTitle>
          <SheetDescription>
            Revisa los pasteles que quieres comprar.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 text-center text-muted-foreground">
          <p>Tu carrito está vacío.</p>
          <p>¡Añade algunos pasteles deliciosos!</p>
        </div>
        <SheetFooter className="mt-auto">
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
            Realizar Compra
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSheet;