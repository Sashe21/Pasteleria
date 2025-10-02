"use client";

import React from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-pink-500 transition-colors text-gray-300">
          <Search size={22} />
          <span className="sr-only">Buscar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buscar Pasteles</DialogTitle>
          <DialogDescription>
            Escribe el nombre del pastel o ingrediente que buscas.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="search"
            placeholder="Ej. Pastel de chocolate, Red Velvet..."
            className="col-span-3"
          />
          {/* Aquí podrías añadir resultados de búsqueda dinámicos */}
          <p className="text-sm text-muted-foreground mt-2">
            Resultados de búsqueda aparecerán aquí.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;