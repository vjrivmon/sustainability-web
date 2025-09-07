import React from 'react';

/**
 * Componente Logo - Diseño minimalista AF con cambio automático de color
 * 
 * Logo ultra-minimalista que se adapta automáticamente al contexto:
 * - Blanco cuando el header es transparente (scroll arriba)
 * - Negro cuando el header tiene fondo blanco (después del scroll)
 * - Blanco cuando está en el footer para consistencia visual
 * Transición suave para experiencia de usuario premium
 * 
 * @param {string} className - Clases CSS adicionales para el contenedor
 * @param {string} variant - Variante de color ('default' = negro, 'white' = blanco, 'light' = blanco)
 */
const Logo = ({ className = "h-8", variant = "default" }) => {
  // Determinar color basado en la variante recibida
  const textColor = (variant === 'white' || variant === 'light') ? 'text-white' : 'text-neutral-800';
  
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold text-2xl tracking-tight select-none transition-colors duration-300 ${textColor}`}>
        AF
      </span>
    </div>
  );
};

export default Logo;