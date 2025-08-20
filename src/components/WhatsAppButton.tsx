"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
  message?: string;
  onClick?: () => void;
  scrollTo?: string; // Nova prop para redirecionamento
}

export default function WhatsAppButton({ 
  className = "", 
  size = "default", 
  variant = "default",
  children,
  message = "Olá! Gostaria de saber mais sobre seus serviços espirituais.",
  onClick,
  scrollTo
}: WhatsAppButtonProps) {
  const phoneNumber = "85992117815"; // Número do WhatsApp atualizado
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Função para detectar se é dispositivo mobile
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
  };

  // Função para abrir WhatsApp com melhor compatibilidade mobile
  const openWhatsApp = () => {
    if (isMobile()) {
      // No mobile, usar window.location.href para melhor compatibilidade
      window.location.href = whatsappUrl;
    } else {
      // No desktop, usar window.open para abrir em nova aba
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleClick = () => {
    // Se houver um scrollTo, navegar para a seção primeiro
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        // Aguardar um pouco antes de abrir o WhatsApp para dar tempo da animação
        setTimeout(() => {
          openWhatsApp();
        }, 1000);
      } else {
        // Se não encontrar o elemento, abrir WhatsApp diretamente
        openWhatsApp();
      }
    } else {
      // Comportamento padrão
      openWhatsApp();
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className={`mystical-glow ${className}`}
      size={size}
      variant={variant}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {children || "WhatsApp"}
    </Button>
  );
} 