"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import Image from "next/image";
import logo from "../../public/Pai Paulo de Ayra (49).jpg";
import { useState, useEffect } from "react";

export default function Navigation() {
  // Mobile menu state and effects removed

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9997] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm mobile-header-visible">
      {/* Main navigation */}
      <div className="container mx-auto px-3 sm:px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Always visible and responsive */}
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src={logo} alt="Mãe Amanda Cartomante" width={100} height={100} className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base md:text-lg lg:text-2xl font-bold">Mãe Amanda</span>
              <div className="text-xs md:text-sm text-muted-foreground">Cartomante</div>
            </div>
            <div className="sm:hidden">
              <span className="text-xs font-bold">Mãe Amanda</span>
              <div className="text-xs text-muted-foreground">Cartomante</div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="cursor-pointer"
                  onClick={() => scrollToSection('methods')}
                >
                  Consultas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] md:w-[500px] lg:w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col min-h-[200px]">
                        <h4 className="font-semibold text-sm text-foreground mb-3 border-b border-border/30 pb-2">
                          Métodos de Consulta
                        </h4>
                        <div className="flex-1 space-y-2">
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('methods')}
                          >
                            Baralho Cigano
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('methods')}
                          >
                            Tarot
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('methods')}
                          >
                            Oráculo de Ossos
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('methods')}
                          >
                            Jogo de Exu
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col min-h-[200px]">
                        <h4 className="font-semibold text-sm text-foreground mb-3 border-b border-border/30 pb-2">
                          Serviços
                        </h4>
                        <div className="flex-1 space-y-2">
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('services')}
                          >
                            Consultas
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('services')}
                          >
                            Rituais
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('services')}
                          >
                            Banhos Energéticos
                          </div>
                          <div 
                            className="cursor-pointer hover:text-primary transition-colors text-sm py-2 px-2 rounded hover:bg-accent/50"
                            onClick={() => scrollToSection('services')}
                          >
                            Trabalhos Espirituais
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer hover:text-primary transition-colors px-4 py-2"
                  onClick={() => scrollToSection('about')}
                >
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer hover:text-primary transition-colors px-4 py-2"
                  onClick={() => scrollToSection('testimonials')}
                >
                  Depoimentos
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer hover:text-primary transition-colors px-4 py-2"
                  onClick={() => scrollToSection('services')}
                >
                  Valores
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="cursor-pointer hover:text-primary transition-colors px-4 py-2"
                  onClick={() => scrollToSection('contact')}
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - WhatsApp Button only */}
          <div className="flex items-center">
            {/* WhatsApp Button - Always visible */}
            <WhatsAppButton 
              size="sm" 
              className="text-xs sm:text-sm"
              message="Olá! Gostaria de saber mais sobre seus serviços espirituais."
         
            >
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </nav>
  );
} 