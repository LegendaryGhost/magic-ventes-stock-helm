"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PRODUCTS = [
  {
    id: 1,
    name: "Cape de Lorien",
    price: 150,
    stock: 7,
    image: "/images/cape.jpg", 
    description: "Fixée par une broche en forme de feuille d'elfe. Offre une discrétion absolue.",
  },
  {
    id: 2,
    name: "Armure de la Citadelle",
    price: 1200,
    stock: 3,
    image: "/images/armure.jpg", 
    description: "En acier poli de Minas Tirith, gravée de l'Arbre Blanc.",
  },
  {
    id: 3,
    name: "Tunique de Rôdeur du Nord",
    price: 85,
    stock: 12,
    image: "/images/tunique.jpg", 
    description: "Cuir robuste et tissu teinté pour se fondre dans la nature sauvage.",
  },
];

export default function DashboardPage() {
  const user = { firstName: "Aragorn", lastName: "Elessar" };
  
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });

  const handleQuantityChange = (productId: number, val: number, stock: number) => {
    if (val < 1 || val > stock) return;
    setQuantities((prev) => ({ ...prev, [productId]: val }));
  };

  const addToCart = (productId: number, name: string) => {
    alert(`Succès : ${quantities[productId]}x "${name}" ajouté(s) à votre besace !`);
  };

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground min-h-screen">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 text-[11px] tracking-[0.32em] text-muted-foreground font-display uppercase">
          <span className="inline-flex items-center gap-3">Gondor Chic — Citadelle</span>
          <span className="font-serif italic text-xs text-gold">Bienvenue, Héritier</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-12 flex-1">
        
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-display text-2xl tracking-[0.1em] sm:text-3xl text-foreground">
            Salutations, <span className="text-gold">{user.firstName} {user.lastName}</span>
          </h2>
          <p className="mt-2 font-serif italic text-base text-muted-foreground">
            « Puisse la lumière de l'Arbre Blanc guider vos choix dans les galeries de notre tailleur royal. »
          </p>
        </div>

        <h3 className="font-display text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">
          Garde-robe du jour
        </h3>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="rounded-md bg-card ring-1 ring-foreground/5 shadow-md flex flex-col justify-between overflow-hidden">
              <div>
                <div className="h-64 w-full bg-muted/30 relative overflow-hidden border-b border-border/40 p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-display text-lg tracking-wide text-foreground">
                      {product.name}
                    </CardTitle>
                    <span className="font-display text-sm text-gold whitespace-nowrap">
                      {product.price} Argent
                    </span>
                  </div>
                  <p className="text-xs font-serif italic text-muted-foreground mt-1">
                    {product.description}
                  </p>
                </CardHeader>
              </div>

              <CardContent className="pt-0">
                <div className="flex flex-col gap-4 border-t border-border/40 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-serif text-muted-foreground">
                      En stock : <strong className="text-foreground">{product.stock}</strong>
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <label className="font-display text-[10px] tracking-wider uppercase text-muted-foreground">
                        Qté :
                      </label>
                      <div className="flex items-center border border-border rounded-sm bg-background">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1, product.stock)}
                          className="px-2 py-1 text-xs font-bold border-r border-border hover:bg-muted"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-serif text-sm w-8 text-center">
                          {quantities[product.id]}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1, product.stock)}
                          className="px-2 py-1 text-xs font-bold border-l border-border hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => addToCart(product.id, product.name)}
                    className="w-full h-10 rounded-sm bg-primary text-primary-foreground font-display text-[10px] tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
                  >
                    Ajouter à la besace
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/60 mt-auto">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display">
          <span>Gondor Chic — Galerie</span>
          <a href="/" className="hover:text-foreground transition-colors font-serif italic lowercase">
            ← quitter la citadelle
          </a>
        </div>
      </footer>
    </div>
  );
}