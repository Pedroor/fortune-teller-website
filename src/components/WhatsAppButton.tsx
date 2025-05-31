"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function WhatsAppButton({ 
  className = "", 
  size = "default", 
  variant = "default",
  children,
  onClick
}: WhatsAppButtonProps) {
  const phoneNumber = "5511999999999"; // Número do WhatsApp (formato internacional)
  const message = encodeURIComponent(
    "Olá Mãe Amanda! Gostaria de agendar uma consulta. Pode me ajudar com mais informações sobre os valores e horários disponíveis?"
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
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